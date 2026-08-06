import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageHero, Section, SectionHeading } from "@/components/site/section";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { Button } from "@/components/ui/button";
import { SITE } from "@/components/site/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiries | Next Generations Language Center" },
      {
        name: "description",
        content:
          "Contact Next Generations Language Center in London by phone, email or WhatsApp, or send an enquiry and an admissions advisor will reply within one working day.",
      },
      { property: "og:title", content: "Contact & Enquiries | Next Generations Language Center" },
      {
        property: "og:description",
        content: "Phone, email, WhatsApp and visiting details, plus a direct enquiry form.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const details = [
    { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsapp, href: SITE.whatsappHref },
    { icon: MapPin, label: "Campus", value: SITE.address },
    { icon: Clock, label: "Opening hours", value: SITE.hours },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next step"
        intro="Whether you are comparing schools, preparing for IELTS or applying to university abroad, our admissions team will give you a straight answer — usually the same day."
      >
        <Button asChild variant="gold" size="xl">
          <a href={SITE.whatsappHref} target="_blank" rel="noreferrer noopener">
            Chat on WhatsApp
          </a>
        </Button>
        <Button asChild variant="onDark" size="xl">
          <a href={SITE.phoneHref}>Call {SITE.phone}</a>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Get in touch" title="Contact details" />
            <ul className="mt-9 space-y-6">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft">
                    <Icon className="size-5 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer noopener"
                        className="mt-1 block break-words font-medium text-primary hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9">
            <h2 className="text-2xl text-primary">Send an enquiry</h2>
            <p className="mt-2 mb-7 text-sm text-muted-foreground">
              Complete the form and an advisor will respond within one working day.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </Section>

      <Section className="bg-muted/60">
        <SectionHeading
          eyebrow="Visit us"
          title="Find the campus"
          intro="Two minutes from Holborn station, with step-free access from the Kingsway entrance."
          align="center"
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-lift">
          <iframe
            title="Map showing the location of Next Generations Language Center"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1265%2C51.5130%2C-0.1105%2C51.5215&layer=mapnik&marker=51.5172%2C-0.1185"
            className="h-[380px] w-full border-0 sm:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
