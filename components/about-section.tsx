import { SectionLabel } from './section-label';
import { Arrow } from './arrow';

export function AboutSection() {
  return (
    <section
      id="about"
      className="home-section about-section"
      aria-labelledby="about-heading"
    >
      <SectionLabel number="05">About REYA</SectionLabel>
      <h2 id="about-heading" data-reveal>
        We build digital products
        <br className="about-line-break" /> with{' '}
        <span>
          clarity, purpose
          <br className="about-line-break" /> and craft.
        </span>
      </h2>
      <div className="about-bottom" data-reveal>
        <span className="about-location">
          Based in Kosovo.
          <br />
          Built with intent.
        </span>
        <div className="about-body">
          <p>
            REYA Labs is a digital development company focused on websites,
            platforms and custom software for modern businesses. We combine
            thoughtful design with solid execution to create products that look
            good, work well and make sense to the people using them.
          </p>
          <details className="about-details">
            <summary className="text-link">
              About REYA <Arrow />
            </summary>
            <p>
              Our name comes from the Albanian word “reja”, meaning cloud. It is
              the idea behind REYA and the quiet atmosphere that runs through
              our identity.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
