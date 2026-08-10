import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck2, GraduationCap, Plane, UserRoundCheck, Wallet } from "lucide-react";

import recruitmentImg from "@/assets/recruitment.jpg";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/section";
import { EnquiryForm } from "@/components/site/enquiry-form";

export const Route = createFileRoute("/student-recruitment")({
  head: () => ({
    meta: [
      { title: "Student Recruitment | University Admission & Visa Support" },
      {
        name: "description",
        content:
          "University admission assistance, application support, student counselling and career guidance for international students planning to study abroad.",
      },
      {
        property: "og:title",
        content: "Student Recruitment | University Admission & Visa Support",
      },
      {
        property: "og:description",
        content:
          "End-to-end support for international students: course selection, applications, visas and pre-departure briefing.",
      },
      { property: "og:url", content: "/student-recruitment" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/student-recruitment" }],
  }),
  component: Recruitment,
});

const SERVICES = [
  {
    icon: GraduationCap,
    title: "University admission assistance",
    text: "Shortlisting realistic institutions against your grades, budget and target field, then managing every deadline on your behalf.",
  },
  {
    icon: FileCheck2,
    title: "Application support",
    text: "Personal statement coaching, document verification, reference chasing and submission through official portals.",
  },
  {
    icon: Plane,
    title: "Visa guidance",
    text: "Guidance on the documents, evidence and timelines involved, plus a pre-departure briefing before you travel.",
  },
  {
    icon: UserRoundCheck,
    title: "Student counselling",
    text: "A named advisor throughout, available to both students and parents at every stage.",
  },
  {
    icon: Wallet,
    title: "Career & education guidance",
    text: "Help identifying funding and scholarship opportunities, and assembling the supporting documentation.",
  },
];

const PROCESS = [
  ["Consultation", "We discuss your academic background, budget, destination and long-term goal."],
  ["Course shortlist", "Together we build a realistic shortlist of institutions and programmes."],
  ["Application", "We prepare documents, review your statement and submit through official channels."],
  ["Offer & next steps", "We help you compare offers and plan the practicalities before you travel."],
];

function Recruitment() {
  return (
    <>
      <PageHero
        eyebrow="International student recruitment"
        title="From first enquiry to your first lecture"
        intro="Our recruitment team guides students and families through course selection, applications, funding and visas — with honest advice about what is achievable and what is not."
      >
        <Button asChild variant="gold" size="xl">
          <Link to="/contact">Enquire Now</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="Complete support, one accountable team"
              intro="No handoffs between agencies, no unexplained fees, and no application submitted without your review."
            />
            <div className="mt-10 space-y-7">
              {SERVICES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg text-primary">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={recruitmentImg}
                alt="International student holding admission documents on a university campus"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-base text-primary">Who we work with</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                School leavers, graduates and working professionals — together with the parents
                supporting them. Every enquiry starts with an honest conversation about what is
                realistic.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Our process"
          title="How the process works"
          intro="Four clear stages, with your review and approval before anything is submitted."
          align="center"
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(([title, text], i) => (
            <li
              key={title}
              className="card-premium rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="font-display text-3xl text-accent">{`0${i + 1}`}</span>
              <h3 className="mt-4 text-lg text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Start your application"
            title="Tell us where you want to study"
            intro="Share your academic background and destination preference. We will come back with a realistic shortlist and a timeline."
          />
          <div className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
