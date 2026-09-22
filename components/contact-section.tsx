import { contactConfig } from '@/config/contact';
import { SectionLabel } from './section-label';
import { Arrow } from './arrow';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="home-section contact-section"
      aria-labelledby="contact-heading"
    >
      <SectionLabel number="06">Start a project</SectionLabel>
      <h2 id="contact-heading">Have something in mind?</h2>
      <a className="contact-address" href={`mailto:${contactConfig.email}`}>
        <span>{contactConfig.email}</span>
        <Arrow diagonal />
      </a>
      <div className="contact-links">
        <a
          className="text-link"
          href={`mailto:${contactConfig.email}?subject=Start%20a%20project`}
        >
          Start a project <Arrow diagonal />
        </a>
        {contactConfig.socials.map((social) => (
          <a className="text-link" key={social.label} href={social.url}>
            {social.label} <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  );
}
