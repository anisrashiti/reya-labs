import type { Project } from '@/config/homepage';
import Image from 'next/image';

export function ProjectPreview({ project }: { project: Project }) {
  if (project.image)
    return (
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 800px) 90vw, 80vw"
          unoptimized
        />
      </div>
    );
  return (
    <figure
      className={`preview-placeholder preview-${project.slug}`}
      aria-label={`${project.name}: project imagery coming soon`}
    >
      <div className="placeholder-topline">
        <span>
          {project.category} / {project.sector}
        </span>
        <span>{project.number} / 03</span>
      </div>
      <div className="placeholder-grid" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="placeholder-title" aria-hidden="true">
        {project.name}
      </div>
      <figcaption className="placeholder-bottomline">
        Project imagery coming soon
      </figcaption>
    </figure>
  );
}
