import { services } from '@/config/homepage';
import { SectionLabel } from './section-label';
import { Arrow } from './arrow';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="home-section services-section"
      aria-labelledby="services-heading"
    >
      <div className="section-heading" data-reveal>
        <div>
          <SectionLabel number="03">What we build</SectionLabel>
          <h2 id="services-heading">
            The right tools.
            <br />
            For your business.
          </h2>
        </div>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <a
            className="service-row"
            href="#contact"
            key={service.number}
            data-reveal
            aria-label={`Discuss ${service.title.toLowerCase()} with REYA Labs`}
          >
            <span className="service-index">{service.number}</span>
            <h3>{service.title}</h3>
            <div className="service-detail">
              <p>{service.description}</p>
              {service.examples.length > 0 && (
                <ul>
                  {service.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              )}
            </div>
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  );
}
