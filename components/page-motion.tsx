'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

export function PageMotion() {
  const seenOnMount = useRef<boolean | null>(null);

  useLayoutEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero');
    if (!hero) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let seen = seenOnMount.current ?? false;
    try {
      if (seenOnMount.current === null) {
        seen = sessionStorage.getItem('reya-entrance-seen') === '1';
        seenOnMount.current = seen;
      }
      sessionStorage.setItem('reya-entrance-seen', '1');
    } catch {
      /* Storage can be unavailable; the entrance still works. */
    }
    // Never cover content already read while a slow connection hydrates the page.
    const paint = performance.getEntriesByName('first-contentful-paint')[0];
    const late = paint && performance.now() - paint.startTime > 500;
    if (
      !preference.matches &&
      !window.location.hash &&
      window.scrollY < 20 &&
      !late
    ) {
      hero.dataset.entrance = seen ? 'quick' : 'full';
    }
    const finish = () => {
      delete hero.dataset.entrance;
    };
    const timer = window.setTimeout(finish, 1400);
    preference.addEventListener('change', finish);
    hero.addEventListener('pointerdown', finish);
    hero.addEventListener('focusin', finish);
    return () => {
      window.clearTimeout(timer);
      preference.removeEventListener('change', finish);
      hero.removeEventListener('pointerdown', finish);
      hero.removeEventListener('focusin', finish);
      finish();
    };
  }, []);

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
  }, []);
  return null;
}
