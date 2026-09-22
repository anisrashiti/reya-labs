import { destinations } from '@/config/navigation';
import { Navbar } from './navbar';
import { Wordmark } from './wordmark';
import { Arrow } from './arrow';

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-atmosphere" aria-hidden="true" />
      <Navbar />
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-heading">
          <span className="sr-only">Reya Labs</span>
          <span className="wordmark-wrap">
            <Wordmark className="hero-wordmark" />
          </span>
          <span className="hero-labs" aria-hidden="true">
            LABS
          </span>
        </h1>
        <p className="hero-copy">Elevated Systems.</p>
        <div className="hero-actions">
          <a className="hero-primary" href={destinations.work}>
            View work <Arrow />
          </a>
          <a className="hero-secondary" href={destinations.contact}>
            Start a project <Arrow diagonal />
          </a>
        </div>
      </div>
      <aside className="hero-location" aria-label="Studio location">
        <svg
          width="22"
          height="22"
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
      </aside>
      <div className="hero-editorial">
        <span className="hero-intent">
          Built
          <br />
          with
          <br />
          intent
        </span>
        <a className="hero-scroll" href={destinations.work}>
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
        <span className="hero-page">P.001</span>
      </div>
      <div className="hero-register" aria-hidden="true">
        <i />
      </div>
    </section>
  );
}
