import type { ReactNode } from 'react';

export function DestinationLink({
  href,
  className,
  children,
  label,
}: {
  href: string | null;
  className?: string;
  children: ReactNode;
  label: string;
}) {
  if (href)
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  return (
    <button
      type="button"
      className={className}
      aria-disabled="true"
      aria-label={`${label} — available when the next sections are added`}
      title="This section has not been added yet"
    >
      {children}
    </button>
  );
}
