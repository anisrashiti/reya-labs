import { services } from '@/config/homepage';
import { SectionLabel } from './section-label';
import { PhilosophySection } from './philosophy-section';
import { SystemsSection } from './systems-section';
import { Arrow } from './arrow';
function Visual({ number }: { number: string }) {
  return (
    <div className={`capability-visual visual-${number}`} aria-hidden="true">
      <div className="visual-register micro">
        <span>REYA / {number}</span>
        <span>
          {number === '01'
            ? 'Interface'
            : number === '02'
              ? 'Interaction'
              : 'Integration'}
        </span>
      </div>
      <div className="visual-window">
        <div />
        <div />
        <div />
        <b>{number === '01' ? 'WEB' : number === '02' ? 'SYSTEM' : 'FLOW'}</b>
      </div>
      <div className="visual-foot micro">
        <span>Structure with purpose</span>
        <span>+ + +</span>
      </div>
    </div>
  );
}
export function ServicesSection() {
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className="capabilities-heading">
        <SectionLabel number="03">What we build</SectionLabel>
        <PhilosophySection />
      </div>
      <div className="capability-list">
        {services.map((service) => (
          <article className="capability-chapter" key={service.number}>
            <div className="capability-copy" data-reveal>
              <span className="capability-number">/{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
              <a className="text-link" href="#contact">
                Let&apos;s talk <Arrow diagonal />
              </a>
            </div>
            <Visual number={service.number} />
          </article>
        ))}
      </div>
      <SystemsSection />
    </section>
  );
}
