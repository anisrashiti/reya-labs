// Supply real destinations when the later sections are commissioned.
// null keeps a control keyboard discoverable without a broken link or fake action.
export const destinations = {
  work: null,
  services: null,
  about: null,
  contact: null,
} as const satisfies Record<string, string | null>;

export const navigation = [
  { label: 'Work', href: destinations.work },
  { label: 'Services', href: destinations.services },
  { label: 'About', href: destinations.about },
  { label: 'Contact', href: destinations.contact },
] as const;
