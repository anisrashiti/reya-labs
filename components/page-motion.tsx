'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Wordmark } from './wordmark';

export function PageMotion() {
  const pathname = usePathname();
  const initialPath = useRef(pathname);
  const navigated = useRef(false);
  const intro = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // The root layout persists through SPA navigation; a new document resets it.
    // No session storage or paint deadline: even delayed hydration gets the intro.
    if (pathname !== initialPath.current) navigated.current = true;
    if (pathname !== '/' || navigated.current || initialPath.current !== '/')
      return;
    const screen = intro.current;
    if (!screen) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!preference.matches && !window.location.hash && window.scrollY < 20) {
      screen.hidden = false;
    }
    const finish = () => {
      screen.hidden = true;
    };
    const onEnd = (event: AnimationEvent) => {
      if (event.target === screen) finish();
    };
    const timer = window.setTimeout(finish, 1400);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') finish();
    };
    preference.addEventListener('change', finish);
    screen.addEventListener('animationend', onEnd);
    window.addEventListener('keydown', onKey);
    window.addEventListener('focusin', finish);
    window.addEventListener('wheel', finish, { passive: true });
    window.addEventListener('touchstart', finish, { passive: true });
    return () => {
      window.clearTimeout(timer);
      preference.removeEventListener('change', finish);
      screen.removeEventListener('animationend', onEnd);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('focusin', finish);
      window.removeEventListener('wheel', finish);
      window.removeEventListener('touchstart', finish);
      finish();
    };
  }, [pathname]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    function setup() {
      observer?.disconnect();
      elements.forEach((element) => element.classList.remove('reveal-pending'));
      if (preference.matches || !('IntersectionObserver' in window)) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('reveal-pending');
              entry.target.classList.add('is-revealed');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight)
          element.classList.add('reveal-pending');
        observer?.observe(element);
      });
    }
    setup();
    preference.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', setup);
      elements.forEach((element) => element.classList.remove('reveal-pending'));
    };
  }, [pathname]);
  return (
    <div ref={intro} className="site-intro" hidden aria-hidden="true">
      <div className="intro-brand">
        <Wordmark />
        <span>LABS</span>
        <div className="intro-loading">
          <i />
        </div>
      </div>
      <span className="intro-caption">Elevated Systems.</span>
    </div>
  );
}
