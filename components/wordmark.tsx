/** Geometric vector reconstruction of public/reya-final-logo.png. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 180"
      fill="currentColor"
      aria-hidden="true"
    >
      <g className="wordmark-geometry">
        <path d="M0 0h113a51 51 0 0 1 0 102H77l70 78h-33L22 77h91a26 26 0 0 0 0-52H0Z" />
        <path d="M249 0h160v25H249zM249 155h160v25H249z" />
        <path d="M475 0h32l64 74 66-74h32l-86 96v84h-24V96Z" />
        <path d="M688 180 797 0l100 180h-27L797 46l-81 134Z" />
      </g>
      <path className="wordmark-accent" fill="var(--color-accent)" d="M249 77h142v25H249z" />
    </svg>
  );
}
