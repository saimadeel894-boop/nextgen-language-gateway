import { BadgeCheck } from "lucide-react";

import { COMMITMENTS } from "./site-data";

export function TrustStrip() {
  return (
    <section aria-label="What we stand for" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {COMMITMENTS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-sm font-medium text-primary/80"
            >
              <BadgeCheck className="size-4 shrink-0 text-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
