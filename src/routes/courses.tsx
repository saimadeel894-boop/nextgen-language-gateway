import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Check, Clock, GaugeCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/section";
import { COURSES } from "@/components/site/site-data";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses | English, IELTS & World Languages" },
      {
        name: "description",
        content:
          "Explore General English, IELTS preparation, communication skills, business English, world languages and young learner programmes with levels, duration and fees.",
      },
      { property: "og:title", content: "Courses | English, IELTS & World Languages" },
      {
        property: "og:description",
        content:
          "Six accredited programmes with defined entry levels, contact hours and measurable outcomes.",
      },
      { property: "og:url", content: "/courses" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: Courses,
});

function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Find the course that matches your goal"
        intro="Every programme states its entry level, weekly contact hours and expected outcome up front. If you are unsure where you sit, book a free placement assessment and we will place you accurately."
      >
        <Button asChild variant="gold" size="xl">
          <Link to="/contact">Book a free placement test</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <article
              key={course.slug}
              className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h2 className="text-xl leading-snug text-primary">{course.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.summary}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-muted/70 p-4 text-center">
                <div>
                  <dt className="flex items-center justify-center text-muted-foreground">
                    <Clock className="size-3.5" />
                  </dt>
                  <dd className="mt-1.5 text-xs font-semibold text-primary">{course.duration}</dd>
                </div>
                <div>
                  <dt className="flex items-center justify-center text-muted-foreground">
                    <GaugeCircle className="size-3.5" />
                  </dt>
                  <dd className="mt-1.5 text-xs font-semibold text-primary">{course.level}</dd>
                </div>
                <div>
                  <dt className="flex items-center justify-center text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                  </dt>
                  <dd className="mt-1.5 text-xs font-semibold text-primary">{course.hours}</dd>
                </div>
              </dl>

              <ul className="mt-6 flex-1 space-y-2.5">
                {course.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <Button asChild variant="navy" size="lg" className="mt-7 w-full rounded-full">
                <Link to="/contact">Apply Now</Link>
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Enrolment"
          title="How enrolment works"
          intro="Four straightforward steps, usually completed within a week."
          align="center"
        />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Enquire", "Send us your goal and availability. An advisor replies within one day."],
            ["Assess", "Complete a free written and spoken placement assessment, online or on site."],
            ["Enrol", "Receive your level, timetable and full fee breakdown, then confirm your place."],
            ["Begin", "Start on the next intake date with a named tutor and a progress file."],
          ].map(([title, text], i) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-3xl text-accent">{`0${i + 1}`}</span>
              <h3 className="mt-4 text-lg text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
