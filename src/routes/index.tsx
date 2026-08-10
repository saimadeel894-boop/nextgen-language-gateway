import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Compass,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Target,
  UserRoundCheck,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero-students.jpg";
import environmentImg from "@/assets/environment.jpg";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { TrustStrip } from "@/components/site/trust-strip";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { COURSES, SITE } from "@/components/site/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next Generations Language Center | English, IELTS & Study Abroad" },
      {
        name: "description",
        content:
          "English, IELTS and other language programs taught in small classes, with personal student support and guidance for students planning to study abroad.",
      },
      {
        property: "og:title",
        content: "Next Generations Language Center | English, IELTS & Study Abroad",
      },
      {
        property: "og:description",
        content:
          "Language programs, personal student support and international education guidance for students, parents and professionals.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const REASONS = [
  {
    icon: Users,
    title: "Experienced instructors",
    text: "Qualified teachers who specialise in language teaching and are supported throughout the academic year.",
  },
  {
    icon: Target,
    title: "Small, focused classes",
    text: "Group sizes kept deliberately small so every student speaks in every lesson and gets individual correction.",
  },
  {
    icon: BookOpen,
    title: "Structured curriculum",
    text: "Each program has a defined entry level, weekly contact hours and a clear outcome stated before you enrol.",
  },
  {
    icon: HeartHandshake,
    title: "Personalised assistance",
    text: "A study plan built around your goal, reviewed with your tutor as your level changes.",
  },
  {
    icon: Compass,
    title: "International education support",
    text: "Guidance on studying abroad — course choice, applications and admission documents — under one roof.",
  },
  {
    icon: MessageCircle,
    title: "Friendly, honest advice",
    text: "Clear fees, honest placement and straightforward answers for students and parents alike.",
  },
];

const SUPPORT = [
  "Free placement assessment before you enrol",
  "Personalised study plan and clear targets",
  "One-to-one tutorials and progress reviews",
  "Exam preparation and practice guidance",
  "Regular updates for parents of young learners",
  "A named point of contact throughout your course",
];

const RECRUITMENT = [
  {
    icon: GraduationCap,
    title: "University application support",
    text: "Choosing suitable courses and institutions, then preparing and submitting a complete application.",
  },
  {
    icon: FileCheck2,
    title: "Admission assistance",
    text: "Document checks, personal statement guidance and help keeping every deadline on track.",
  },
  {
    icon: UserRoundCheck,
    title: "Student guidance",
    text: "One-to-one counselling for students and families, from first questions to pre-departure planning.",
  },
  {
    icon: Compass,
    title: "Career & education guidance",
    text: "Practical advice on study routes and career direction, so your choice fits your longer-term plan.",
  },
];

const TEAM = [
  {
    img: teacher1,
    role: "Academic leadership",
    text: "Curriculum design, teacher observation and placement standards across every program.",
  },
  {
    img: teacher2,
    role: "Language instructors",
    text: "Qualified teachers delivering General English, IELTS preparation and communication courses.",
  },
  {
    img: teacher3,
    role: "Student counsellors",
    text: "Guidance on study plans, applications and support for students and their families.",
  },
];

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="surface-hero relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="drift pointer-events-none absolute -top-48 -left-32 size-[36rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <span
              className="reveal inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/8 px-4 py-1.5 text-xs font-medium text-primary-foreground/90 backdrop-blur-sm"
              style={{ animationDelay: "60ms" }}
            >
              <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
              Language education &amp; study abroad guidance
            </span>
            <h1
              className="reveal mt-7 text-4xl leading-[1.06] text-balance text-primary-foreground sm:text-5xl lg:text-[3.85rem]"
              style={{ animationDelay: "140ms" }}
            >
              Learn a language.{" "}
              <span className="text-gradient-gold">Open your next opportunity.</span>
            </h1>
            <p
              className="reveal mt-6 max-w-xl text-base leading-relaxed text-pretty text-primary-foreground/78 sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              Next Generations Language Center teaches English, IELTS preparation and other
              languages in small, supportive classes — and guides students who plan to continue
              their studies abroad.
            </p>
            <div
              className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "300ms" }}
            >
              <Button asChild variant="gold" size="xl" className="shine shadow-gold">
                <Link to="/courses">
                  Explore Our Programs <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <ul
              className="reveal mt-12 grid gap-x-8 gap-y-3 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/75 sm:grid-cols-2"
              style={{ animationDelay: "380ms" }}
            >
              {[
                "Experienced, qualified instructors",
                "Small class sizes",
                "Personalised study plans",
                "Support for study abroad plans",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative" style={{ animationDelay: "260ms" }}>
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-25 blur-xl"
              style={{ backgroundImage: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-primary-foreground/20">
              <img
                src={heroImg}
                alt="Students studying together with their teacher in a bright language classroom"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.24 0.085 265 / 0.5), transparent 55%)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{ backgroundImage: "var(--gradient-gold)", opacity: 0.55 }}
          aria-hidden="true"
        />
      </section>

      <TrustStrip />

      {/* 2. About */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div
              className="pointer-events-none absolute -bottom-5 -left-5 hidden size-40 rounded-3xl opacity-20 blur-2xl lg:block"
              style={{ backgroundImage: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-border">
              <img
                src={environmentImg}
                alt="Reception and study lounge at Next Generations Language Center"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="About the centre"
              title="A language centre built around the student"
              intro="We teach English, IELTS preparation and other languages to adults and young learners, and we help students who want to continue their education abroad."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Classes are kept small on purpose. Students are placed by assessment rather than
              guesswork, taught by qualified instructors, and supported by a team that knows both
              the classroom and the application process.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="navy" size="lg" className="rounded-full">
                <Link to="/about">More about us</Link>
              </Button>
              <Button asChild variant="quiet" size="lg" className="rounded-full">
                <Link to="/student-services">Student services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. Language programs */}
      <Section className="bg-muted/60">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Language programs"
              title="Courses with a clear starting point"
              intro="Each program states its level, duration and weekly hours up front."
            />
            <Button asChild variant="quiet" size="lg" className="rounded-full">
              <Link to="/courses">
                View all courses <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 3).map((course, i) => (
            <Reveal key={course.slug} delay={i * 90} className="h-full">
              <article className="card-premium flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                    {course.level}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground">
                    <Clock className="size-3" aria-hidden="true" />
                    {course.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-xl text-primary">{course.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {course.summary}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="navy" size="lg" className="mt-6 w-full rounded-full shine">
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Why choose us */}
      <Section className="relative overflow-hidden">
        <div
          className="grid-lines-ink pointer-events-none absolute inset-0 -z-10 fade-mask-b"
          aria-hidden="true"
        />
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Reasons students and parents stay with us"
            intro="No shortcuts and no inflated promises — just consistent teaching and honest guidance."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70} className="h-full">
              <article className="card-premium h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="grid size-12 place-items-center rounded-xl bg-primary-soft ring-1 ring-primary/10">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. Student support */}
      <Section className="bg-muted/60">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Student support"
              title="You are never studying on your own"
              intro="Support is part of the course, not an add-on. Every student has a plan, a tutor and a person to ask."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="navy" size="lg" className="rounded-full">
                <Link to="/student-services">See student services</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft sm:grid-cols-2 sm:p-9">
              {SUPPORT.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 6. Recruitment services */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="International education services"
            title="Guidance for students planning to study abroad"
            intro="Alongside our language programs, our consultancy team supports international students through the university application journey."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {RECRUITMENT.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="card-premium flex h-full gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft">
                  <Icon className="size-5 text-accent-foreground" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg text-primary">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="navy" size="xl" className="rounded-full shine">
              <Link to="/student-recruitment">
                Recruitment services <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* 7. Team */}
      <Section className="bg-muted/60">
        <Reveal>
          <SectionHeading
            eyebrow="Our people"
            title="The team behind every class"
            intro="Teaching, academic oversight and student guidance work together rather than in separate departments."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t, i) => (
            <Reveal key={t.role} delay={i * 90} className="h-full">
              <article className="card-premium group h-full rounded-2xl border border-border bg-card shadow-soft">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={t.img}
                    alt={t.role}
                    loading="lazy"
                    width={800}
                    height={900}
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-primary">{t.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. CTA */}
      <Section>
        <Reveal>
          <div className="surface-hero relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
            <div
              className="grid-lines pointer-events-none absolute inset-0 opacity-70"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl text-balance text-primary-foreground sm:text-4xl">
                Not sure which course is right for you?
              </h2>
              <p className="mt-5 text-primary-foreground/78">
                Book a free placement assessment and we will recommend a program, explain the fees
                and outline the start dates — with no obligation.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="gold" size="xl" className="shine shadow-gold">
                  <Link to="/contact">Enquire Now</Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/courses">Explore Our Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 9. Contact */}
      <Section id="enquiry" className="relative overflow-hidden bg-muted/60">
        <div
          className="grid-lines-ink pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Speak to an advisor"
              intro="Tell us your current level and your goal. We will reply with a recommendation, the fees and the next available start date."
            />
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Phone
                </dt>
                <dd className="mt-1.5">
                  <a href={SITE.phoneHref} className="font-semibold text-primary hover:underline">
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold break-all text-primary hover:underline"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Address
                </dt>
                <dd className="mt-1.5 text-foreground">{SITE.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  Opening hours
                </dt>
                <dd className="mt-1.5 text-foreground">{SITE.hours}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
