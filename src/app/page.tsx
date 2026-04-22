import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, HeartPulse, MessageCircle } from "lucide-react";
import { ExpertsSection, HomepageFaqPreview, SbasTrustSection, SundaySessionSection, TestimonialsSection, TimingsGrid, WhoItsForList } from "@/components/site/content-blocks";
import { CtaBand, PrimaryCtas } from "@/components/site/cta";
import { PaymentSection } from "@/components/site/payment-section";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionHeader } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { faqs, trustPoints, whatsappLink, whatsappMessages, whyFamiliesChoose } from "@/lib/site";
import { SiteIcon } from "@/components/site/icon";

export const metadata: Metadata = {
  title: "Fitness for Parents in Hindi",
  description:
    "ShreeFit offers Hindi-only live online fitness and wellness classes for Indian parents aged 50+, with gentle movement, yoga, mobility, breathwork and Ayurveda-informed guidance.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.slice(0, 8).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:min-h-[calc(100vh-73px)] lg:px-8 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/shreefit-parents-hero.png"
            alt="Indian parents doing gentle guided online wellness class from home"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-mask absolute inset-0" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.8fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--cream-300)] bg-white/82 px-4 py-2 text-sm font-bold text-[var(--green-900)] shadow-sm backdrop-blur">
              <HeartPulse className="h-4 w-4 text-[var(--saffron-600)]" />
              Hindi only live classes for parents aged 50+
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-normal text-[var(--green-950)] sm:text-5xl lg:text-6xl">
              ShreeFit - Fitness for Parents
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-2xl font-semibold leading-snug text-[var(--green-800)]">
              Apne parents ko ghar baithe safe aur guided fitness routine dein.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--stone-700)]">
              Hindi mein live classes, pyaar se guidance, aur better routine. Stretching,
              stamina, mobility, flexibility, gentle strength, breathwork aur healthy
              lifestyle ka balanced program for Indian families.
            </p>
            <PrimaryCtas className="mt-8" />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Morning and evening sessions", "Hindi live classes", "Online from home", "Limited guided batches"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/86 px-4 py-2 text-sm font-bold text-[var(--green-900)] shadow-sm backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 text-[var(--green-700)]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:justify-self-end">
            <div className="rounded-lg border border-white/70 bg-white/82 p-5 shadow-[0_24px_80px_rgba(16,41,31,0.16)] backdrop-blur">
              <p className="eyebrow">Trust signals</p>
              <div className="mt-5 grid gap-4">
                {trustPoints.map((point) => (
                  <div key={point.title} className="flex gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--saffron-100)] text-[var(--green-900)]">
                      <SiteIcon name={point.icon} />
                    </div>
                    <div>
                      <h2 className="font-bold text-[var(--green-950)]">{point.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-[var(--stone-700)]">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-[var(--cream-50)]">
        <PaymentSection />
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Why families choose ShreeFit"
          title="Complete fitness + wellness routine for parents."
          text="Aapke parents ke liye guided movement, stretching, stamina, strength, routine aur healthy lifestyle simple aur respectful tareeke se."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyFamiliesChoose.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Card className="h-full">
                <CardHeader>
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--green-100)] text-[var(--green-800)]">
                    <SiteIcon name={item.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--green-950)]">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-[var(--stone-700)]">{item.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Who this is for"
            title="Parents and families who want safe, guided movement in Hindi."
            text="Especially useful jab parents beginners hon, body stiff feel hoti ho, ya family chahti ho ki routine supervised ho."
          />
          <WhoItsForList />
        </div>
      </Section>

      <Section className="bg-white">
        <ExpertsSection />
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <SbasTrustSection />
      </Section>

      <Section className="bg-white">
        <SundaySessionSection />
      </Section>

      <Section className="bg-[var(--cream-50)]" id="timings">
        <TimingsGrid />
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Testimonials"
          title="Warm words from families and parents"
          text="Parents aur families ka experience: Hindi guidance, regular routine, better movement aur ghar se safe support."
          align="center"
        />
        <TestimonialsSection />
      </Section>

      <HomepageFaqPreview />

      <Section className="bg-white">
        <CtaBand />
      </Section>

      <section className="border-y border-[var(--cream-300)] bg-[var(--saffron-100)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-[var(--green-950)]">Need help choosing a batch?</p>
            <p className="mt-1 text-[var(--stone-700)]">
              WhatsApp par parent ki age aur preferred morning/evening batch share karein.
            </p>
          </div>
          <Button asChild variant="primary" size="lg">
            <a href={whatsappLink(whatsappMessages.timing)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Ask on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
