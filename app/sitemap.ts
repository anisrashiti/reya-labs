import type { MetadataRoute } from 'next';
import { projects } from '@/config/homepage';
import { siteConfig } from '@/config/site';

// Metadata routes must be prerendered for this project's static export.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: 'weekly', priority: 1 },
    // The same project data drives generateStaticParams in /work/[slug].
    ...projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
