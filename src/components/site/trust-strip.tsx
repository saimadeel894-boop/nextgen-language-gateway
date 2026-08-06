const PARTNERS = [
  "University of Manchester",
  "University of Toronto",
  "Technische Universität München",
  "University of Melbourne",
  "King's College London",
  "University of Amsterdam",
  "Trinity College Dublin",
  "University of British Columbia",
];

export function TrustStrip() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section
      aria-label="Partner universities"
      className="border-y border-border bg-background py-8"
    >
      <p className="text-center text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
        Students placed at partner institutions worldwide
      </p>
      <div className="fade-mask-x mt-6 overflow-hidden">
        <ul className="marquee-track items-center gap-12 pr-12">
          {items.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="font-display text-base whitespace-nowrap text-primary/45 transition-colors hover:text-primary sm:text-lg"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
