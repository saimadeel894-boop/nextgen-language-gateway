import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  ClipboardList,
  Compass,
  HeartHandshake,
  LifeBuoy,
  MessagesSquare,
  NotebookPen,
  Users,
} from "lucide-react";

import environmentImg from "@/assets/environment.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/student-services")({
  head: () => ({
    meta: [
      { title: "Student Services | Next Generations Language Center" },
      {
        name: "description",
        content:
          "Placement assessment, personalised study plans, one-to-one tutorials, exam guidance and pastoral support for every student at Next Generations Language Center.",
      },
      { property: "og:title", content: "Student Services | Next Generations Language Center" },
      {
        property: "og:description",
        content:
          "Guidance and personal support at every stage of your language studies — from placement to progress reviews.",
      },
      { property: "og:url", content: "/student-services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/student-services" }],
  }),
  component: StudentServices,
});

const SERVICES = [
  {
    icon: ClipboardList,
    title: "Placement assessment",
    text: "A written and spoken assessment before you start, so you join a class at the level that actually fits you.",
  },
  {
    icon: NotebookPen,
    title: "Personalised study plan",
    text: "Clear targets for the term, agreed with your teacher and reviewed as your level changes.",
  },
  {
    icon: MessagesSquare,
    title: "One-to-one tutorials",
    text: "Regular individual sessions to talk through progress, difficulties and the next step.",
  },
  {
    icon: CalendarCheck,
    title: "Exam guidance",
    text: "Practical preparation for exam day: format, timing, practice papers and honest feedback.",
  },
  {
    icon: LifeBuoy,
    title: "Pastoral support",
    text: "A friendly point of contact for anything outside the classroom — settling in, timetables or study balance.",
  },
  {
    icon: Users,
    title: "Family communication",
    text: "Parents of younger learners receive regular updates so progress is never a surprise.",
  },
];

const STEPS = [
  ["Talk to an advisor", "Tell us your goal, your current level and how much time you have."],
  ["Assessment", "Complete a free placement assessment, online or on site."],
  ["Study plan", "Receive your recommended course, timetable and targets."],
  ["Ongoing review", "Meet your tutor regularly to check progress and adjust the plan."],
];

function StudentServices() {
  return (
    <>
      <PageHero
        eyebrow="Student services"
        title="Support that sits alongside every lesson"
        intro="Learning a language is easier with someone in your corner. From your first assessment to your final review, you have a clear plan and a person to ask."
      >
        <Button asChild variant="gold" size="xl">
          <Link to="/contact">Enquire Now</Link>
        </Button>
        <Button asChild variant="onDark" size="xl">
          <Link to="/courses">Explore Our Programs</Link>
        </Button>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What we provide"
            title="Practical, personal student support"
            intro="Every service below is included as part of studying with us — not sold as an extra."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70} className="h-full">
              <article className="card-premium h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-primary-soft ring-1 ring-primary/10">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg text-primary">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/60">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-border">
              <img
                src={environmentImg}
                alt="Study lounge and student support area at the language centre"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="How it works"
              title="Four simple steps"
              intro="Straightforward from the first conversation, with no obligation to enrol."
            />
            <ol className="mt-9 space-y-6">
              {STEPS.map(([title, text], i) => (
                <li key={title} className="flex gap-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent-foreground">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base text-primary">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="surface-hero relative overflow-hidden rounded-3xl px-7 py-14 sm:px-12 lg:px-16">
            <div
              className="grid-lines pointer-events-none absolute inset-0 opacity-70"
              aria-hidden="true"
            />
            <div className="relative max-w-2xl">
              <HeartHandshake className="size-8 text-accent" aria-hidden="true" />
              <h2 className="mt-5 text-3xl text-primary-foreground sm:text-4xl">
                Planning to study abroad as well?
              </h2>
              <p className="mt-5 text-primary-foreground/78">
                Our education consultancy team supports university applications, admission
                documents and study planning alongside your language course.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="gold" size="xl" className="shine">
                  <Link to="/student-recruitment">
                    <Compass className="size-4" /> Recruitment services
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
