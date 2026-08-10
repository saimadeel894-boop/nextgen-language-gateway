import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "./site-data";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="surface-hero relative hidden overflow-hidden text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-2 text-xs lg:px-8">
          <p className="opacity-85">
            <span className="font-semibold text-accent">Enrolment open</span> — English, IELTS and
            other language programs.
          </p>
          <div className="flex items-center gap-5 opacity-85">
            <a href={SITE.phoneHref} className="transition-opacity hover:opacity-100">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="transition-opacity hover:opacity-100">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/70 bg-background/85 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-background"
        }`}
      >
        <div
          className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-300 lg:px-8 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <Logo className="transition-transform duration-300 group-hover:scale-105" />
            <span className="min-w-0">
              <span className="block truncate font-display text-[0.95rem] leading-tight font-semibold text-primary sm:text-base">
                Next Generations
              </span>
              <span className="block truncate text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
                Language Center
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="underline-sweep rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="ml-3 flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-soft/70"
            >
              <Phone className="size-4" />
              <span className="hidden xl:inline">{SITE.phone}</span>
            </a>
            <Button asChild variant="gold" size="lg" className="ml-2 rounded-full shine">
              <Link to="/contact">Enquire Now</Link>
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="quiet" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <div className="mt-10 flex flex-col gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                    activeProps={{ className: "bg-primary-soft text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild variant="gold" size="xl" className="mt-5">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Enquire Now
                  </Link>
                </Button>
                <a
                  href={SITE.phoneHref}
                  className="mt-4 flex items-center gap-2 px-3 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
