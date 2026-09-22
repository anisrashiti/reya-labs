import { studio } from '@/config/homepage';
import { Wordmark } from './wordmark';
import { SectionLabel } from './section-label';

export function AboutSection() {
  return (
    <section
      id="about"
      className="home-section about-section"
      aria-labelledby="about-heading"
    >
      <SectionLabel number="05">Independent studio</SectionLabel>
      <div className="about-intro" data-reveal>
        <h2 id="about-heading">
          Built in Kosovo.
          <br />
          <span>Working beyond it.</span>
        </h2>
        <p>{studio.about}</p>
      </div>
      <figure
        className="identity-plate"
        data-reveal
        aria-label="REYA Labs. Independent software studio based in Kosovo."
      >
        <div className="identity-annotations micro">
          <span>Web / Platforms / Software</span>
          <span>Kosovo</span>
        </div>
        <div className="identity-mark">
          <Wordmark />
        </div>
        <figcaption className="identity-annotations micro">
          <span>Independent studio / 2026—</span>
          <span>Systems / Interface / Product</span>
        </figcaption>
      </figure>
    </section>
  );
}
