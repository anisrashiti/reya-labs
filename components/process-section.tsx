import { processSteps } from '@/config/homepage';
import { SectionLabel } from './section-label';

export function ProcessSection() {
  return (
    <section
      className="home-section process-section"
      aria-labelledby="process-heading"
    >
      <div className="section-heading" data-reveal>
        <div>
          <SectionLabel number="04">How we work</SectionLabel>
          <h2 id="process-heading">Clear from the start.</h2>
        </div>
        <p className="section-aside">
          A considered process.
          <br />
          From the first conversation to what comes next.
        </p>
      </div>
      <ol className="process-sequence">
        {processSteps.map((step, index) => (
          <li
            className="process-step"
            key={step.number}
            data-reveal
            style={{ '--step-delay': `${index * 85}ms` } as React.CSSProperties}
          >
            <span className="process-number">
              {step.number}
              <i aria-hidden="true" />
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
