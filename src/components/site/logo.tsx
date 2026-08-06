export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl text-primary-foreground shadow-soft ring-1 ring-accent/40 ${className}`}
      style={{ backgroundImage: "var(--gradient-hero)" }}
      aria-hidden="true"
    >
      <span
        className="pointer-events-none absolute -top-4 -right-3 size-9 rounded-full opacity-45 blur-md"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      />
      <svg
        viewBox="0 0 24 24"
        className="relative size-5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.6 3.8 5.7 3.8 8.5S14.5 17.9 12 20.5c-2.5-2.6-3.8-5.7-3.8-8.5S9.5 6.1 12 3.5Z" />
      </svg>
      <span
        className="absolute right-1 bottom-1 size-1.5 rounded-full"
        style={{ backgroundImage: "var(--gradient-gold)" }}
      />
    </span>
  );
}
