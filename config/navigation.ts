export const destinations = {
  work: '#work',
  services: '#services',
  about: '#about',
  contact: '#contact',
} as const satisfies Record<string, string | null>;

export const navigation = [
  { label: 'Work', href: destinations.work },
  { label: 'Services', href: destinations.services },
  { label: 'About', href: destinations.about },
  { label: 'Contact', href: destinations.contact },
] as const;
