'use client';
import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { projects } from '@/config/homepage';
import { Arrow } from './arrow';
import { ProjectPreview } from './project-preview';
import { SectionLabel } from './section-label';

export function WorkSection() {
  const [active, setActive] = useState(0);
  const selectors = useRef<(HTMLButtonElement | null)[]>([]);
  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 0;
    if (!delta && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? projects.length - 1 : (index + delta + projects.length) % projects.length;
    setActive(next); selectors.current[next]?.focus();
  }
  const project = projects[active];
  return <section id="work" className="work-section" aria-labelledby="work-heading">
    <div className="work-heading" data-reveal><SectionLabel number="01">Selected work</SectionLabel><h2 id="work-heading">Ideas, made real.</h2><span className="micro">A selection of our work / 01�03</span></div>
    <div className="work-layout" data-reveal>
      <fieldset className="project-list"><legend className="sr-only">Select a project. Use arrow keys to choose a project.</legend>{projects.map((item, index) => <button key={item.slug} ref={el => { selectors.current[index] = el; }} type="button" className={`project-selector${active === index ? ' is-active' : ''}`} tabIndex={active === index ? 0 : -1} aria-pressed={active === index} onKeyDown={e => move(e, index)} onPointerEnter={e => { if (e.pointerType === 'mouse') setActive(index); }} onFocus={() => setActive(index)} onClick={() => setActive(index)}><span className="project-index">{item.number}</span><span className="project-row-copy"><span className="project-name">{item.name}</span><span className="project-category">{item.category} / {item.sector}</span></span><Arrow diagonal /></button>)}<p className="work-note">Different businesses.<br />The same attention to detail.</p></fieldset>
      <div className="project-stage"><div key={project.slug} className="preview-transition"><ProjectPreview project={project} /></div><div className="preview-caption"><span className="micro" aria-live="polite">{project.number} / {project.name} / {project.category}</span><a className="text-link" href={`/work/${project.slug}`}>View project <Arrow /></a></div><div className="project-touch-controls"><span className="micro">Swipe to explore</span><button type="button" aria-label="Previous project" onClick={() => setActive((active + projects.length - 1) % projects.length)}>?</button><button type="button" aria-label="Next project" onClick={() => setActive((active + 1) % projects.length)}>?</button></div></div>
    </div>
  </section>;
}
