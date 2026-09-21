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
          <span className="sr-only">REYA Labs</span>
          <span className="wordmark-wrap">
            <Wordmark className="hero-wordmark" />
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
      <div className="hero-register" aria-hidden="true">
        <span>P.001</span>
        <i />
      </div>
    </section>
  );
}
