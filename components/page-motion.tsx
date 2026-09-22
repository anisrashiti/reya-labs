'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageMotion() {
  const pathname = usePathname();
  const initialPath = useRef(pathname);
  useLayoutEffect(() => {
    // The root layout survives client navigation. Suppress any subsequently
    // mounted homepage intro before paint; a full document refresh resets this.
    if (pathname !== initialPath.current)
      document.documentElement.dataset.homeNavigation = 'true';
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
  return null;
}
