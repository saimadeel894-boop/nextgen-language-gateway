import type { ReactNode } from "react";
import { Scene3D } from "@/components/site/scene-3d";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-24 lg:py-28 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-accent-foreground/70 uppercase">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? (
        <p
          className={`inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.24em] uppercase ${
            tone === "dark" ? "text-accent" : "text-primary/70"
          }`}
        >
          <span
            className="h-px w-7 rounded-full"
            style={{ backgroundImage: "var(--gradient-gold)" }}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-3xl leading-[1.12] text-balance sm:text-4xl lg:text-[2.9rem] ${
          tone === "dark" ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-[1.05rem] ${
            tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="surface-hero relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="drift pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <Scene3D
        variant="accent"
        className="opacity-50 [mask-image:radial-gradient(70%_100%_at_88%_45%,#000_25%,transparent_80%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
        <div className="reveal max-w-3xl">
          <p className="inline-flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.24em] text-accent uppercase">
            <span
              className="h-px w-7 rounded-full"
              style={{ backgroundImage: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] text-balance text-primary-foreground sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-primary-foreground/78 sm:text-lg">
            {intro}
          </p>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ backgroundImage: "var(--gradient-gold)", opacity: 0.5 }}
        aria-hidden="true"
      />
    </div>
  );
}
