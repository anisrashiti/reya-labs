import Image from 'next/image';
import type { Project } from '@/config/homepage';

export function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 800px) 86vw, 46vw"
          unoptimized
        />
      </div>
    );
  }
  return (
    <figure
      className={`preview-placeholder preview-${project.slug}`}
      aria-label={`Temporary ${project.name} ${project.category.toLowerCase()} preview. A real project screenshot will be added here.`}
    >
      <div className="placeholder-topline">
        <span>REYA / {project.number}</span>
        <span>Preview placeholder</span>
      </div>
      <div className="preview-browser" aria-hidden="true">
        <div className="preview-browser-bar">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="preview-website">
          <div className="preview-website-nav">
            <span>{project.name}</span>
            <i />
            <i />
          </div>
          <div className="preview-website-body">
            {project.slug === 'mind-nexus' && (
              <div className="preview-sidebar">
                <i />
                <i />
                <i />
                <i />
              </div>
            )}
            <div className="preview-website-content">
              <span className="preview-sector">{project.sector}</span>
              <span className="preview-project-title">{project.name}</span>
              <div className="preview-copy-lines">
                <i />
                <i />
              </div>
              <div className="preview-image-space">
                <span>
                  {project.category === 'Platform'
                    ? 'Product preview'
                    : 'Project image'}
                </span>
                <span>↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="placeholder-bottomline">
        <span>
          {project.category} / {project.sector}
        </span>
        <span>Screenshot to follow</span>
      </div>
    </figure>
  );
}
