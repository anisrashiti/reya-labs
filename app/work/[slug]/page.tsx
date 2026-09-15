import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/config/homepage';
import { ProjectPreview } from '@/components/project-preview';
import { Wordmark } from '@/components/wordmark';
import { Arrow } from '@/components/arrow';
import { Footer } from '@/components/footer';

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project
      ? `${project.name} — REYA Labs`
      : 'Project not found — REYA Labs',
    description: project
      ? `${project.name} / ${project.category} / ${project.sector}. A selected REYA Labs project. Full case study to follow.`
      : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <header className="case-header">
        <Link className="footer-brand" href="/" aria-label="REYA Labs home">
          <Wordmark />
          <span>LABS</span>
        </Link>
        <Link className="text-link" href="/#work">
          All work <Arrow />
        </Link>
      </header>
      <main id="main-content" className="case-shell">
        <p className="section-label">Selected work / {project.number}</p>
        <h1>{project.name}</h1>
        <p className="case-category">
          {project.category} / {project.sector}
        </p>
        <div className="case-content">
          <ProjectPreview project={project} />
          <div className="case-note">
            <span className="section-label">Case study</span>
            <h2>
              A closer look
              <br />
              is on the way.
            </h2>
            <p>The full project story will be added here.</p>
            <Link className="text-link" href="/#contact">
              Tell us what you have in mind <Arrow />
            </Link>
          </div>
        </div>
      </main>
      <Footer fromProject />
    </>
  );
}
