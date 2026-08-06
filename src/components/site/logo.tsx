export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
      </svg>
    </span>
  );
}
