'use client';

import { useEffect } from 'react';

export function PageMotion() {
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
