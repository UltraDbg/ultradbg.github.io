export function AvatarMark({ className = "avatar-mark" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      role="img"
      aria-label="Ultra Dbg"
    >
      <circle cx="40" cy="40" r="40" fill="var(--surface)" />
      <circle
        cx="40"
        cy="40"
        r="31.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.22"
      />
      <path
        d="M29 29.5 L44.5 40 L29 50.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="cursor-blink"
        d="M49 50.5 H61"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
