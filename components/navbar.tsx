'use client';

import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/config/navigation';
import { DestinationLink } from './destination-link';
import { Wordmark } from './wordmark';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 640) setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="navbar">
      <a href="#main-content" aria-label="REYA Labs home" className="nav-brand">
        <Wordmark className="nav-wordmark" />
        <span>LABS</span>
      </a>
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={open}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        onClick={() => setOpen(!open)}
      >
        <span
          className={open ? 'menu-lines is-open' : 'menu-lines'}
          aria-hidden="true"
        >
          <i />
          <i />
        </span>
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`nav-links${open ? ' is-open' : ''}`}
      >
        {navigation.map(({ label, href }) => (
          <DestinationLink
            key={label}
            label={label}
            href={href}
            className="nav-link"
          >
            {label}
          </DestinationLink>
        ))}
        <span className="nav-point" aria-hidden="true" />
      </nav>
    </header>
  );
}
