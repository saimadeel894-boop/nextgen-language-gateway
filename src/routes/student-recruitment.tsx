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
          "University admission assistance, visa guidance, counselling and application support for international students, with 38 partner universities worldwide.",
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
    text: "CAS tracking, financial evidence checks, interview preparation and a pre-departure briefing before you travel.",
  },
  {
    icon: UserRoundCheck,
    title: "Student counselling",
    text: "A named advisor throughout, with counselling available in Arabic, Urdu, Turkish, French and English.",
  },
  {
    icon: Wallet,
    title: "Scholarship & funding",
    text: "Identification of merit and need-based awards, plus support assembling the supporting documentation.",
  },
];

const PARTNERS = [
  ["United Kingdom", "Manchester · Leeds · Coventry · Sussex"],
  ["Canada", "Toronto Metropolitan · Dalhousie · Concordia"],
  ["Germany", "Bremen · Jacobs · SRH Berlin"],
  ["Australia", "Deakin · Griffith · La Trobe"],
  ["Ireland", "Griffith College · UCC Pathways"],
  ["Netherlands", "Hanze · Fontys · Saxion"],
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
          <Link to="/contact">Request a free assessment</Link>
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
            <dl className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
              {[
                ["38", "Partner universities"],
                ["96%", "Visa success rate"],
                ["4", "Counselling languages"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl text-primary">{v}</dt>
                  <dd className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Partner universities"
          title="Where our students study"
          intro="Direct application routes and pathway agreements across six study destinations."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map(([country, list]) => (
            <article
              key={country}
              className="card-lift rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <h3 className="text-lg text-primary">{country}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{list}</p>
            </article>
          ))}
        </div>
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
