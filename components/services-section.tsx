'use client';

import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { services } from '@/config/homepage';
import { SectionLabel } from './section-label';
import { SystemsSection } from './systems-section';

function ServiceDiagram({ active }: { active: number }) {
  return (
    <svg
      className="service-diagram"
      viewBox="0 0 560 300"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="diagram-guides"
        d="M20 40H540M20 260H540M60 20V280M500 20V280M280 20V280"
      />
      <g className={`service-state${active === 0 ? ' is-active' : ''}`}>
        <rect x="90" y="60" width="380" height="180" />
        <path d="M90 87H470M110 74H140M110 110H260M110 125H230M110 180H230M110 195H215M110 210H200" />
        <rect
          className="diagram-fill"
          x="300"
          y="110"
          width="145"
          height="105"
        />
        <path className="diagram-accent" d="M110 150H180M300 110V215H445" />
        <path d="M315 125H430M315 140H390M315 180H430M315 195H405" />
      </g>
      <g className={`service-state${active === 1 ? ' is-active' : ''}`}>
        <path d="M180 145H220M340 145H380M280 190V215H440V185" />
        <rect x="65" y="95" width="115" height="100" />
        <rect
          className="diagram-fill"
          x="220"
          y="70"
          width="120"
          height="120"
        />
        <rect x="380" y="95" width="115" height="90" />
        <path d="M65 118H180M80 138H155M80 153H145M80 172H160M220 95H340M235 113H315M235 132H300M235 163H320M380 118H495M395 138H475M395 155H455" />
        <path className="diagram-accent" d="M180 145H220V190H340V145H380" />
      </g>
      <g className={`service-state${active === 2 ? ' is-active' : ''}`}>
        <path d="M120 150H225M315 150H440M270 105V70H395V125M270 195V235H145V175" />
        <rect x="70" y="125" width="50" height="50" />
        <rect className="diagram-fill" x="225" y="105" width="90" height="90" />
        <rect x="370" y="125" width="50" height="50" />
        <rect x="440" y="125" width="50" height="50" />
        <path d="M250 135H290M250 150H280M250 165H290M82 150H108M383 150H407M453 150H477" />
        <path
          className="diagram-accent"
          d="M120 150H225M270 105V70H395V125M420 150H440"
        />
        <circle className="diagram-accent" cx="170" cy="150" r="4" />
        <circle className="diagram-accent" cx="340" cy="70" r="4" />
      </g>
    </svg>
  );
}

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta =
      event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
    if (!delta && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? services.length - 1
          : (index + delta + services.length) % services.length;
    buttons.current[next]?.focus();
  }
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <div className="capabilities-heading" data-reveal>
        <SectionLabel number="03">What we build</SectionLabel>
        <h2 id="services-heading">Built with purpose.</h2>
      </div>
      <div className="service-workbench">
        <ol className="service-selectors">
          {services.map((service, index) => (
            <li key={service.number}>
              <h3>
                <button
                  type="button"
                  aria-pressed={active === index}
                  aria-controls="service-detail"
                  ref={(element) => {
                    buttons.current[index] = element;
                  }}
                  onPointerEnter={(event) => {
                    if (event.pointerType === 'mouse') setActive(index);
                  }}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => move(event, index)}
                >
                  <span className="service-number">{service.number}</span>
                  <span>{service.title}</span>
                  <span className="service-indicator" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </h3>
            </li>
          ))}
        </ol>
        <div className="service-detail" id="service-detail">
          <div className="service-visual" aria-hidden="true">
            <div className="visual-register micro">
              <span>REYA / Structure</span>
              <span>0{active + 1} / 03</span>
            </div>
            <ServiceDiagram active={active} />
            <div className="visual-register micro">
              <span>Interface → System</span>
              <span>+ + +</span>
            </div>
          </div>
          <div className="service-descriptions">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`service-description${active === index ? ' is-active' : ''}`}
                aria-hidden={active !== index}
              >
                <p>{service.description}</p>
                <ul>
                  {service.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SystemsSection />
    </section>
  );
}
