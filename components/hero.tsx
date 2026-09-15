import { destinations } from '@/config/navigation';
import { Navbar } from './navbar';
import { Wordmark } from './wordmark';
import { CtaButton } from './cta-button';

function LocationBadge() {
  return (
    <aside className="location" aria-label="Studio location">
      <span className="location-pill">
        <svg
          width="25"
          height="25"
          viewBox="0 0 28 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          aria-hidden="true"
        >
          <circle cx="14" cy="14" r="11" />
          <ellipse cx="14" cy="14" rx="5" ry="11" />
          <path d="M3 14h22M5.5 7.5h17M5.5 20.5h17" />
        </svg>
        Based in Kosovo
      </span>
      <span className="location-point" aria-hidden="true" />
    </aside>
  );
}

function EditorialDetails() {
  return (
    <div className="editorial-details" aria-label="Studio details">
      <div className="intent">
        <span>
          BUILT
          <br />
          WITH
          <br />
          INTENT
        </span>
        <i aria-hidden="true" />
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
      <div className="established">
        <span>EST. 2026</span>
        <i aria-hidden="true" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-atmosphere" aria-hidden="true" />
      <Navbar />
      <section className="hero-content" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="hero-heading">
          <span className="sr-only">REYA Labs</span>
          <span className="wordmark-wrap">
            <Wordmark className="hero-wordmark" />
            <span className="trademark" aria-hidden="true">
              TM
            </span>
          </span>
          <span className="hero-labs" aria-hidden="true">
            LABS
          </span>
        </h1>
        <p className="hero-copy">
          Websites, platforms &amp; software
          <br className="desktop-break" /> built for modern businesses.
        </p>
        <div className="hero-actions">
          <CtaButton href={destinations.work} primary>
            View work
          </CtaButton>
          <CtaButton href={destinations.contact}>Start a project</CtaButton>
        </div>
      </section>
      <LocationBadge />
      <EditorialDetails />
    </section>
  );
}
