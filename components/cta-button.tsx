import { DestinationLink } from './destination-link';

export function CtaButton({
  children,
  href,
  primary = false,
}: {
  children: string;
  href: string | null;
  primary?: boolean;
}) {
  return (
    <DestinationLink
      href={href}
      label={children}
      className={`cta ${primary ? 'cta-primary' : 'cta-secondary'}`}
    >
      <span>{children}</span>
      <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M4 12h15M12 5l7 7-7 7" />
      </svg>
    </DestinationLink>
  );
}
