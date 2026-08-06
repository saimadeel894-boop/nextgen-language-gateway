import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, HeartHandshake, Target, Telescope } from "lucide-react";

import environmentImg from "@/assets/environment.jpg";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Next Generations Language Center" },
      {
        name: "description",
        content:
          "Our mission, teaching approach and faculty. Learn why international students and families choose Next Generations Language Center.",
      },
      { property: "og:title", content: "About Us | Next Generations Language Center" },
      {
        property: "og:description",
        content:
          "An accredited language centre built on small classes, qualified teachers and measurable student progress.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To give every student the language confidence required to study, work and build a life beyond their home country — without financial or cultural barriers standing in the way.",
  },
  {
    icon: Telescope,
    title: "Our Vision",
    text: "To be the most trusted independent language centre for international families, judged on published outcomes rather than marketing promises.",
  },
  {
    icon: HeartHandshake,
    title: "Our Promise",
    text: "Transparent fees, honest level placement and a named advisor who stays with each student from first enquiry to university enrolment.",
  },
];

const APPROACH = [
  {
    step: "01",
    title: "Honest placement",
    text: "A written and spoken assessment places every student at their true level — never one flattering level higher.",
  },
  {
    step: "02",
    title: "Communicative teaching",
    text: "Lessons are built on speaking time. Grammar is taught in service of communication, not as an end in itself.",
  },
  {
    step: "03",
    title: "Fortnightly tutorials",
    text: "Each student meets their tutor to review progress evidence and reset targets for the coming two weeks.",
  },
  {
    step: "04",
    title: "Exit with evidence",
    text: "Students leave with a certificate, a portfolio of work and a documented band or CEFR level.",
  },
];

const TEAM = [
  { img: teacher1, name: "Dr. Eleanor Whitfield", role: "Director of Studies" },
  { img: teacher2, name: "Michael Brennan", role: "Head of IELTS" },
  { img: teacher3, name: "Amira Sallam", role: "Lead Student Counsellor" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Seventeen years of teaching students to be understood"
        intro="Next Generations Language Center was founded in 2009 by a group of teachers who believed language schools should be measured by student outcomes, not enrolment numbers. That principle still governs how we hire, teach and report."
      >
        <Button asChild variant="gold" size="xl">
          <Link to="/contact">Book a consultation</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="An independent centre, accountable to its students"
              intro="We teach English, IELTS preparation and five world languages to adults and young learners, and we support international applicants through the full university admission process."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our teaching team is small by design. Every instructor holds a recognised qualification,
              is observed twice each term and contributes to curriculum review. Our counselling team
              works alongside them, so academic progress and admission planning are never separate
              conversations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Families come to us from more than forty countries. What they consistently tell us they
              value is straightforward: clear communication, no hidden fees, and someone who answers
              the phone.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={environmentImg}
              alt="Reception and study lounge at Next Generations Language Center"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <div className="grid gap-6 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="card-premium rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-accent-soft">
                <Icon className="size-5 text-accent-foreground" />
              </span>
              <h2 className="mt-5 text-xl text-primary">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Teaching approach"
          title="Four commitments in every classroom"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APPROACH.map((a) => (
            <article key={a.step} className="rounded-2xl border border-border bg-card p-7">
              <span className="font-display text-3xl text-accent">{a.step}</span>
              <h3 className="mt-4 text-lg text-primary">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading eyebrow="Our team" title="The people you will work with" align="center" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t) => (
            <article key={t.name} className="card-premium rounded-2xl bg-card shadow-soft">
              <img
                src={t.img}
                alt={`${t.name}, ${t.role}`}
                loading="lazy"
                width={800}
                height={900}
                className="aspect-4/5 w-full rounded-t-2xl object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg text-primary">{t.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-accent-foreground/70 uppercase">
                  {t.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="surface-hero relative overflow-hidden rounded-3xl px-7 py-14 sm:px-12 lg:px-16">
          <div className="max-w-2xl">
            <Compass className="size-8 text-accent" />
            <h2 className="mt-5 text-3xl text-primary-foreground sm:text-4xl">
              Why students choose us
            </h2>
            <p className="mt-5 text-primary-foreground/78">
              Small classes, teachers who stay, published outcomes and a counselling team that
              understands the visa process as well as the syllabus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
