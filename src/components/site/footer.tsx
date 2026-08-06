import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { COURSES, NAV, SITE } from "./site-data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="surface-hero mt-24 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="bg-primary-foreground/12" />
            <span>
              <span className="block font-display text-base font-semibold">Next Generations</span>
              <span className="block text-[0.65rem] tracking-[0.22em] uppercase opacity-70">
                Language Center
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-80">
            An accredited language and international education centre preparing students for study,
            work and life across borders.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs transition-colors hover:bg-primary-foreground/12"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="opacity-85 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70">Programmes</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {COURSES.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to="/courses" className="opacity-85 transition-opacity hover:opacity-100">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase opacity-70">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 opacity-70" />
              <span className="opacity-85">{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 opacity-70" />
              <a href={SITE.phoneHref} className="opacity-85 hover:opacity-100">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 opacity-70" />
              <a href={`mailto:${SITE.email}`} className="break-all opacity-85 hover:opacity-100">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.hours}</p>
        </div>
      </div>
    </footer>
  );
}
