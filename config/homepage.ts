export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  sector: string;
  image: string | null;
  imageAlt: string;
  summary: string;
};

// Replace image: null with /projects/<slug>/preview.webp when screenshots are ready.
export const projects: Project[] = [
  {
    slug: 'villa-ada',
    number: '01',
    name: 'Villa Ada',
    category: 'Website',
    sector: 'Hospitality',
    image: null,
    imageAlt: 'Villa Ada website preview',
    summary: 'A website for Villa Ada, in hospitality.',
  },
  {
    slug: 'rub-beton',
    number: '02',
    name: 'RUB Beton',
    category: 'Website',
    sector: 'Industrial',
    image: null,
    imageAlt: 'RUB Beton website preview',
    summary: 'A website for RUB Beton, in the industrial sector.',
  },
  {
    slug: 'mind-nexus',
    number: '03',
    name: 'Mind Nexus',
    category: 'Platform',
    sector: 'Product',
    image: null,
    imageAlt: 'Mind Nexus platform preview',
    summary: 'A digital platform project for Mind Nexus.',
  },
];

export const services = [
  {
    number: '01',
    title: 'Websites',
    description:
      'Modern websites designed to make businesses look credible, clear and memorable.',
    examples: ['Business websites', 'Landing pages', 'E-commerce'],
  },
  {
    number: '02',
    title: 'Platforms',
    description:
      'Digital products built around real workflows, customers and teams.',
    examples: ['Dashboards', 'Booking systems', 'Portals', 'Internal tools'],
  },
  {
    number: '03',
    title: 'Custom software',
    description:
      'Tailored software for business problems that off-the-shelf tools cannot solve well.',
    examples: ['Workflow automation', 'Integrations', 'Business systems'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We understand the business, problem and goals.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We shape the experience, structure and visual direction.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We turn the approved direction into a reliable digital product.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We test, refine and put the finished product into the world.',
  },
];

export const studio = {
  philosophy: ['Built with purpose.', 'Made to matter.'],
  systemsDescription: 'Behind a simple experience can be a complex system. We connect the people, processes and information that make your business work.',
  nodes: ['Business', 'Platform', 'Users', 'Operations', 'Data', 'Automation'],
  support: 'Beyond launch: maintenance, improvements and what comes next.',
  about: 'REYA Labs is a software studio based in Kosovo. We build websites, platforms and custom software with a focus on clarity, usefulness and careful execution.',
};
