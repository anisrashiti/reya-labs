'use client';

import { useLayoutEffect, useRef } from 'react';
import { Wordmark } from './wordmark';

/** Visible in the exported HTML. CSS owns the timeline, even before hydration. */
export function HomeIntro() {
  const intro = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const screen = intro.current;
    if (!screen) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finish = () => {
      screen.hidden = true;
    };
    if (preference.matches || window.location.hash || window.scrollY > 20)
      finish();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Tab') finish();
    };
    preference.addEventListener('change', finish);
    window.addEventListener('keydown', onKey);
    window.addEventListener('focusin', finish);
    window.addEventListener('wheel', finish, { passive: true });
    window.addEventListener('touchstart', finish, { passive: true });
    return () => {
      preference.removeEventListener('change', finish);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('focusin', finish);
      window.removeEventListener('wheel', finish);
      window.removeEventListener('touchstart', finish);
    };
  }, []);

  return (
    <div
      ref={intro}
      className="site-intro"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget)
          event.currentTarget.hidden = true;
      }}
    >
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
