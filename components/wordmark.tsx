/** Drawn to match the approved geometric lettering, independent of font loading. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 700 145"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M0 0h111c38 0 58 17 58 47 0 27-20 44-58 46l58 52h-43L69 94H31v51H0V0Zm31 26v43h77c20 0 31-7 31-22s-11-21-31-21H31Z"
      />
      <path d="M183 0h142v26H214v33h106v26H214v34h113v26H183V0Z" />
      <path d="M330 0h37l72 90L511 0h38L455 116v29h-32v-29L330 0Z" />
      <path
        fillRule="evenodd"
        d="M579 0h32l89 145h-35l-17-27H534l-17 27h-35L574 0h5Zm13 27-43 66h84l-41-66Z"
      />
    </svg>
  );
}
