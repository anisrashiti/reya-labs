'use client';

import { useRef, useState } from 'react';
import type { FocusEvent, KeyboardEvent } from 'react';
import { projects } from '@/config/homepage';
import { Arrow } from './arrow';
import { ProjectPreview } from './project-preview';
import { SectionLabel } from './section-label';

export function WorkSection() {
  const [active, setActive] = useState<number | null>(null);
  const selectors = useRef<(HTMLButtonElement | null)[]>([]);
  const pointerFocus = useRef(false);

  function leaveFocus(event: FocusEvent<HTMLElement>) {
    const list = event.currentTarget.closest('.project-list');
    if (!list?.contains(event.relatedTarget) && !list?.matches(':hover'))
      setActive(null);
  }

  function closeOnEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Escape' || active === null) return;
    event.preventDefault();
    selectors.current[active]?.focus();
    setActive(null);
  }

  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    pointerFocus.current = false;
    closeOnEscape(event);
    const delta =
      event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;
    if (!delta && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? projects.length - 1
          : (index + delta + projects.length) % projects.length;
    selectors.current[next]?.focus();
    setActive(next);
  }

  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <div className="work-heading" data-reveal>
        <SectionLabel number="01">Selected work</SectionLabel>
        <h2 id="work-heading">Ideas, made real.</h2>
        <span className="micro">A selection of our work / 01–03</span>
      </div>
      <ol
        className="project-list"
        onPointerLeave={(event) => {
          if (
            event.pointerType === 'mouse' &&
            !event.currentTarget.contains(document.activeElement)
          )
            setActive(null);
        }}
      >
        {projects.map((project, index) => {
          const open = active === index;
          return (
            <li
              key={project.slug}
              className={`project-entry${open ? ' is-open' : ''}`}
              onPointerEnter={(event) => {
                // Keep a focused project link reachable while a mouse moves elsewhere.
                if (
                  event.pointerType === 'mouse' &&
                  !event.currentTarget.parentElement?.querySelector(
                    '.project-opening:focus-within',
                  )
                )
                  setActive(index);
              }}
            >
              <h3 className="project-row-heading">
                <button
                  ref={(element) => {
                    selectors.current[index] = element;
                  }}
                  type="button"
                  id={`project-${project.slug}`}
                  className="project-selector"
                  aria-expanded={open}
                  aria-controls={`preview-${project.slug}`}
                  onPointerDown={() => {
                    pointerFocus.current = true;
                  }}
                  onPointerCancel={() => {
                    pointerFocus.current = false;
                  }}
                  onFocus={() => {
                    if (!pointerFocus.current) setActive(index);
                  }}
                  onBlur={leaveFocus}
                  onKeyDown={(event) => move(event, index)}
                  onClick={(event) => {
                    pointerFocus.current = false;
                    if (
                      event.detail > 0 &&
                      window.matchMedia('(hover: hover) and (pointer: fine)')
                        .matches
                    )
                      setActive(index);
                    else
                      setActive((current) =>
                        current === index ? null : index,
                      );
                  }}
                >
                  <span className="project-index">{project.number}</span>
                  <span className="project-name">{project.name}</span>
                  <span className="project-category">
                    {project.category}
                    <span>{project.sector}</span>
                  </span>
                  <Arrow diagonal />
                </button>
              </h3>
              <section
                id={`preview-${project.slug}`}
                className="project-opening"
                aria-labelledby={`project-${project.slug}`}
                aria-hidden={!open}
                inert={!open}
              >
                <div className="project-reveal-surface">
                  <div className="project-visual">
                    <ProjectPreview project={project} />
                  </div>
                  <div className="project-reveal-footer">
                    <span className="micro">
                      {project.sector} / {project.category}
                    </span>
                    <a
                      className="text-link"
                      href={`/work/${project.slug}`}
                      aria-label={`View ${project.name} project`}
                      onKeyDown={closeOnEscape}
                      onBlur={leaveFocus}
                    >
                      View project <Arrow diagonal />
                    </a>
                  </div>
                </div>
              </section>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
