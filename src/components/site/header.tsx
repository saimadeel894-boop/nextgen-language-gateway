import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "./site-data";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <Logo />
          <span className="min-w-0">
            <span className="block truncate font-display text-[0.95rem] leading-tight font-semibold text-primary sm:text-base">
              Next Generations
            </span>
            <span className="block truncate text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              Language Center
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "bg-primary-soft text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="ml-2 flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Phone className="size-4" />
            {SITE.phone}
          </a>
          <Button asChild variant="gold" size="lg" className="ml-3 rounded-full">
            <Link to="/contact">Apply Now</Link>
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
                  Apply Now
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
  );
}
