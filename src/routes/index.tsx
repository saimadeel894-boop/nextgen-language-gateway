import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  Globe2,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero-students.jpg";
import environmentImg from "@/assets/environment.jpg";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/section";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { COURSES, SITE } from "@/components/site/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Next Generations Language Center | English & IELTS in London" },
      {
        name: "description",
        content:
          "Accredited English, IELTS and world language courses with expert teachers, small classes and full university admission support for international students.",
      },
      {
        property: "og:title",
        content: "Next Generations Language Center | English & IELTS in London",
      },
      {
        property: "og:description",
        content:
          "Unlock your future through language learning. Small classes, expert teachers and complete international student support.",
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
    icon: ShieldCheck,
    title: "Accredited & Trusted",
    text: "Independently accredited teaching standards, transparent fees and a published student charter families can rely on.",
  },
  {
    icon: Users,
    title: "Classes of Twelve",
    text: "Deliberately small groups so every student speaks in every lesson and receives individual correction.",
  },
  {
    icon: Award,
    title: "Examiner-Led Training",
    text: "IELTS preparation designed by former examiners, with weekly band diagnostics and targeted improvement plans.",
  },
  {
    icon: Globe2,
    title: "Global Pathways",
    text: "Direct partnerships with universities across the UK, Canada, Germany and Australia for onward study.",
  },
  {
    icon: BookOpen,
    title: "Measured Progress",
    text: "Every learner has a tracked progress file with fortnightly tutorials and clear next-step targets.",
  },
  {
    icon: MessageCircle,
    title: "Support in Your Language",
    text: "Counsellors who speak Arabic, Urdu, Turkish and French guide families through every stage.",
  },
];

const STATS = [
  { value: "12,400+", label: "Students taught since 2009" },
  { value: "94%", label: "Achieve their target IELTS band" },
  { value: "38", label: "Partner universities worldwide" },
  { value: "4.9/5", label: "Average student rating" },
];

const TESTIMONIALS = [
  {
    quote:
      "I arrived at 5.5 and left with 7.5 in eleven weeks. The mock exams were harder than the real test, which is exactly what I needed.",
    name: "Yusuf Karaman",
    detail: "IELTS Preparation · now at University of Manchester",
  },
  {
    quote:
      "My daughter studied here before her foundation year. The counsellors handled the visa paperwork properly and kept us informed every week.",
    name: "Farida Hassan",
    detail: "Parent · Cairo",
  },
  {
    quote:
      "The communication course changed how I interview. I stopped translating in my head and started speaking with confidence.",
    name: "Linh Nguyen",
    detail: "Communication Skills · Graduate trainee",
  },
];

const TEACHERS = [
  {
    img: teacher1,
    name: "Dr. Eleanor Whitfield",
    role: "Director of Studies",
    bio: "DELTA qualified with eighteen years designing academic English curricula for university pathway programmes.",
  },
  {
    img: teacher2,
    name: "Michael Brennan",
    role: "Head of IELTS",
    bio: "Former IELTS examiner; has coached more than 2,000 candidates through band 7 and above.",
  },
  {
    img: teacher3,
    name: "Amira Sallam",
    role: "Lead Student Counsellor",
    bio: "Specialist in admissions and visa guidance for students from the Middle East, North Africa and South Asia.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="surface-hero relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 -left-24 size-[32rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-medium text-primary-foreground/85">
              <Sparkles className="size-3.5 text-accent" />
              Accredited language education since 2009
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-[3.75rem]">
              Unlock Your Future Through{" "}
              <span className="text-gradient-gold">Language Learning</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/78 sm:text-lg">
              English, IELTS and world language programmes taught in classes of twelve — paired with
              complete admission, visa and counselling support for students studying abroad.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl text-accent sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-primary-foreground/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift ring-1 ring-primary-foreground/15">
              <img
                src={heroImg}
                alt="International students working together with their teacher in a bright language classroom"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-background/95 p-4 shadow-lift sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft">
                <GraduationCap className="size-5 text-accent-foreground" />
              </span>
              <p className="text-sm leading-snug text-foreground">
                <strong className="font-semibold">41 university offers</strong> secured by our spring
                cohort across 18 institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <Section>
        <SectionHeading
          eyebrow="Why choose us"
          title="A language centre built around student outcomes"
          intro="Everything we do is measured against one question: is the student moving forward? Our structure, class sizes and reporting exist to answer it honestly."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="card-lift rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary-soft">
                <Icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Programmes */}
      <Section className="bg-muted/60">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular programmes"
            title="Courses that lead somewhere"
            intro="Each programme has a defined entry level, contact hours and a measurable outcome."
          />
          <Button asChild variant="quiet" size="lg" className="rounded-full">
            <Link to="/courses">View all courses</Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.slice(0, 3).map((course) => (
            <article
              key={course.slug}
              className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                  {course.level}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground">
                  <Clock className="size-3" />
                  {course.duration}
                </span>
              </div>
              <h3 className="mt-5 text-xl text-primary">{course.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.summary}
              </p>
              <Button asChild variant="navy" size="lg" className="mt-6 w-full rounded-full">
                <Link to="/contact">Apply for this course</Link>
              </Button>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Student success stories"
          title="Results our students talk about"
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <span className="block font-semibold text-primary">{t.name}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Environment */}
      <Section className="bg-muted/60">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={environmentImg}
              alt="The Next Generations Language Center lobby and student study lounge"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Learning environment"
              title="A campus designed for focus"
              intro="Purpose-built classrooms, a quiet study lounge, a self-access library and dedicated speaking rooms — all in one central, well-connected building."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Interactive smart-board classrooms",
                "Silent study and group work zones",
                "Self-access learning library",
                "One-to-one speaking practice rooms",
                "Student welfare and counselling office",
                "Free high-speed campus Wi-Fi",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Teachers */}
      <Section>
        <SectionHeading
          eyebrow="Meet the faculty"
          title="Taught by qualified, career educators"
          intro="Every teacher holds a recognised teaching qualification and is observed and supported throughout the academic year."
          align="center"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t) => (
            <article key={t.name} className="card-lift rounded-2xl bg-card shadow-soft">
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  width={800}
                  height={900}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg text-primary">{t.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-accent-foreground/70 uppercase">
                  {t.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Enquiry */}
      <Section id="enquiry" className="bg-muted/60">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Enquire today"
              title="Speak to an admissions advisor"
              intro="Tell us your current level and your goal. We will recommend the right programme, share fees and outline start dates — with no obligation."
            />
            <div className="mt-8 space-y-4 text-sm">
              <p className="text-muted-foreground">
                Call us on{" "}
                <a href={SITE.phoneHref} className="font-semibold text-primary">
                  {SITE.phone}
                </a>
              </p>
              <p className="text-muted-foreground">
                Email{" "}
                <a href={`mailto:${SITE.email}`} className="font-semibold break-all text-primary">
                  {SITE.email}
                </a>
              </p>
              <p className="text-muted-foreground">{SITE.hours}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
