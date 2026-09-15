'use client';

import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { projects } from '@/config/homepage';
import { Arrow } from './arrow';
import { ProjectPreview } from './project-preview';
import { SectionLabel } from './section-label';

export function WorkSection() {
  const [active, setActive] = useState(projects[0].slug);
  const selectors = useRef<(HTMLButtonElement | null)[]>([]);
  const project = projects.find((item) => item.slug === active) ?? projects[0];
  function selectWithKeyboard(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
      next = (index + 1) % projects.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
      next = (index - 1 + projects.length) % projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = projects.length - 1;
    else return;
    event.preventDefault();
    setActive(projects[next].slug);
    selectors.current[next]?.focus();
  }
  return (
    <section
      id="work"
      className="home-section work-section"
      aria-labelledby="work-heading"
    >
      <div className="section-heading" data-reveal>
        <div>
          <SectionLabel number="02">Work</SectionLabel>
          <h2 id="work-heading">Selected work.</h2>
        </div>
        <span className="section-aside">Websites &amp; digital products</span>
      </div>
      <div className="work-layout" data-reveal>
        <fieldset
          className="project-list"
          aria-label="Select a project to preview"
          aria-describedby="project-keyboard-help"
        >
          <p id="project-keyboard-help" className="sr-only">
            Use the arrow keys to choose a project, then Tab to view it.
          </p>
          {projects.map((item, index) => (
            <div
              key={item.slug}
              className={`project-entry${active === item.slug ? ' is-active' : ''}`}
            >
              <button
                ref={(element) => {
                  selectors.current[index] = element;
                }}
                tabIndex={active === item.slug ? 0 : -1}
                onKeyDown={(event) => selectWithKeyboard(event, index)}
                type="button"
                className="project-selector"
                aria-pressed={active === item.slug}
                aria-label={`Preview ${item.name}`}
                onPointerEnter={(event) => {
                  if (
                    event.pointerType === 'mouse' &&
                    window.matchMedia('(hover: hover)').matches
                  )
                    setActive(item.slug);
                }}
                onFocus={() => setActive(item.slug)}
                onClick={() => setActive(item.slug)}
              >
                <span className="project-index">{item.number}</span>
                <span className="project-row-copy">
                  <span className="project-name">{item.name}</span>
                  <span className="project-category">
                    {item.category} / {item.sector}
                  </span>
                </span>
                <Arrow diagonal />
              </button>
              {active === item.slug && (
                <div className="mobile-project-preview">
                  <ProjectPreview project={item} />
                  <a className="text-link" href={`/work/${item.slug}`}>
                    View project <Arrow />
                  </a>
                </div>
              )}
            </div>
          ))}
        </fieldset>
        <div className="desktop-project-preview">
          <div key={project.slug} className="preview-transition">
            <ProjectPreview project={project} />
          </div>
          <div className="preview-caption">
            <span>
              {project.number} / {project.name}
            </span>
            <a className="text-link" href={`/work/${project.slug}`}>
              View project <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
