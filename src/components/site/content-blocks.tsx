import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Leaf, MessageCircle, Music2, Sprout, UsersRound } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { benefits, expertHighlights, expertJointPhoto, experts, faqs, processSteps, site, sundaySession, timingCards, whatsappLink, whatsappMessages, whoItsFor } from "@/lib/site";
import { SiteIcon } from "./icon";
import { Reveal } from "./reveal";
import { Section, SectionHeader } from "./section";
import { TestimonialsCarousel } from "./testimonial-carousel";

export function BenefitsGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? benefits.slice(0, 6) : benefits;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((benefit, index) => (
        <Reveal key={benefit.title} delay={index * 0.03}>
          <Card className="h-full">
            <CardHeader>
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--saffron-100)] text-[var(--green-900)]">
                <SiteIcon name={benefit.icon} />
              </div>
              <h3 className="text-xl font-bold text-[var(--green-950)]">{benefit.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-[var(--stone-700)]">{benefit.text}</p>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function TimingsGrid({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <div>
      {showHeader ? (
        <SectionHeader
          eyebrow="Choose your preferred session"
          title="Apne routine ke hisaab se morning ya evening class choose karein"
          text="Online guided fitness batches with Hindi instruction, stretching, mobility, stamina, gentle strength and attentive support from home."
          align="center"
        />
      ) : null}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {timingCards.map((timing, index) => (
          <Reveal key={`${timing.title}-${timing.time}`} delay={index * 0.04}>
            <Card className="h-full overflow-hidden">
              <CardHeader className="border-b border-[var(--cream-300)] bg-[var(--cream-50)]">
                <p className="text-sm font-semibold text-[var(--green-700)]">{timing.period}</p>
                <h3 className="text-2xl font-bold text-[var(--green-950)]">{timing.title}</h3>
                <p className="text-4xl font-extrabold text-[var(--green-950)]">{timing.time}</p>
                <p className="text-sm font-medium text-[var(--stone-600)]">{timing.note}</p>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {["Limited guided batch", "Hindi live class", "Online from home"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[var(--green-950)]">
                    <CheckCircle2 className="h-5 w-5 text-[var(--green-700)]" />
                    {item}
                  </div>
                ))}
                <Button asChild variant="primary" className="mt-4 w-full">
                  <a href={whatsappLink(whatsappMessages.timing)} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Enquire on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {processSteps.map((step, index) => (
        <Reveal key={step.step} delay={index * 0.04}>
          <div className="h-full rounded-lg border border-[var(--cream-300)] bg-white p-5 shadow-sm">
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--green-900)] text-sm font-bold text-white">
              {step.step}
            </div>
            <h3 className="text-lg font-bold text-[var(--green-950)]">{step.title}</h3>
            <p className="mt-3 leading-7 text-[var(--stone-700)]">{step.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function WhoItsForList() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {whoItsFor.map((item) => (
        <div
          key={item}
          className="flex gap-3 rounded-lg border border-[var(--cream-300)] bg-white p-4 shadow-sm"
        >
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--green-700)]" />
          <p className="leading-7 text-[var(--stone-700)]">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function ExpertsSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="eyebrow">Meet your experts</p>
        <h2 className="mt-3 text-balance text-3xl font-bold text-[var(--green-950)] sm:text-4xl">
          Shri Bhagwan Vashistha and Sushma Vashistha: trusted guidance for parents.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--stone-700)]">
          ShreeFit mein guidance sirf yoga ya Ayurveda tak limited nahi hai. Shri Bhagwan ji
          aur Sushma ji parents ke liye practical fitness, stretching, stamina, mobility,
          gentle strength, routine aur healthy lifestyle ko simple Hindi mein guide karte hain.
        </p>
        <div className="mt-6 grid gap-3">
          {expertHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex gap-3 rounded-lg border border-[var(--cream-300)] bg-white/78 p-4 shadow-sm"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--green-700)]" />
              <p className="leading-7 text-[var(--stone-700)]">{highlight}</p>
            </div>
          ))}
        </div>
        <Button asChild variant="outline" size="lg" className="mt-7">
          <a href={site.sbasUrl} target="_blank" rel="noreferrer">
            Know more about Shree Bhagwati Aarogya Sansthan
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <div className="grid gap-4">
        <Reveal>
          <Card className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fff7e9_100%)] shadow-[0_24px_70px_rgba(47,74,59,0.12)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,var(--green-900),var(--green-600)_58%,var(--saffron-400))] sm:aspect-[16/10]">
              {expertJointPhoto.src ? (
                <Image
                  src={expertJointPhoto.src}
                  alt={expertJointPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center p-6 text-center text-white">
                  <div>
                    <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-white/18 ring-1 ring-white/35">
                      <UsersRound className="h-10 w-10 text-[var(--saffron-100)]" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--saffron-100)]">
                      Expert photo placeholder
                    </p>
                    <p className="mt-3 text-2xl font-bold">Shri Bhagwan Vashistha & Sushma Vashistha</p>
                    <p className="mt-3 text-sm leading-6 text-white/78">{expertJointPhoto.caption}</p>
                  </div>
                </div>
              )}
            </div>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold leading-6 text-[var(--green-900)]">
                Shree Bhagwati Aarogya Sansthan ke founders, certified Ayurveda aur Yoga
                experts, aur parents ke liye balanced fitness + wellness guidance par focused.
              </p>
            </CardContent>
          </Card>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {experts.map((expert, index) => (
            <Reveal key={expert.name} delay={index * 0.06}>
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(145deg,var(--cream-100),var(--green-100))]">
                  {expert.image ? (
                    <Image
                      src={expert.image}
                      alt={expert.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center p-6 text-center">
                      <div>
                        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[var(--green-900)] text-3xl font-bold text-[var(--saffron-200)] shadow-lg">
                          {expert.initials}
                        </div>
                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--green-700)]">
                          Portrait placeholder
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[var(--stone-600)]">
                          Add the real portrait path in the central site data.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="inline-flex w-fit rounded-full bg-[var(--saffron-100)] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--green-800)]">
                    ShreeFit Expert
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--green-950)]">{expert.name}</h3>
                  <p className="font-semibold text-[var(--green-700)]">{expert.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-[var(--stone-700)]">{expert.text}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SbasTrustSection() {
  return (
    <div className="rounded-lg border border-[var(--cream-300)] bg-[var(--cream-50)] p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">Wellness credibility</p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-[var(--green-950)] sm:text-4xl">
            Shree Bhagwati Aarogya Sansthan se juda trusted wellness background.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--stone-700)]">
            Shri Bhagwan Vashistha aur Sushma Vashistha Shree Bhagwati Aarogya Sansthan
            ke founders hain. Pichhle 5 saalon mein unhone hundreds of students ko diploma
            education/training di hai. Yeh credibility ShreeFit ko sirf workout nahi,
            balki practical fitness, healthy lifestyle aur rooted wellness ka balanced
            routine banati hai.
          </p>
        </div>
        <Button asChild size="lg" variant="primary">
          <a href={site.sbasUrl} target="_blank" rel="noreferrer">
            Visit SBAS website
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export function SundaySessionSection() {
  const icons = [Leaf, Sprout, Music2];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div>
        <p className="eyebrow">{sundaySession.eyebrow}</p>
        <h2 className="mt-3 text-balance text-3xl font-bold text-[var(--green-950)] sm:text-4xl">
          {sundaySession.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--stone-700)]">{sundaySession.text}</p>
        <p className="mt-4 text-lg leading-8 text-[var(--stone-700)]">{sundaySession.note}</p>
      </div>
      <div className="rounded-lg border border-[var(--cream-300)] bg-[linear-gradient(135deg,#ffffff_0%,#fff7e9_55%,#e7f0e8_100%)] p-5 shadow-[0_18px_50px_rgba(47,74,59,0.08)] sm:p-6">
        <div className="grid gap-4">
          {sundaySession.items.map((item, index) => {
            const Icon = icons[index] ?? Leaf;
            return (
              <div key={item} className="flex gap-4 rounded-lg bg-white/76 p-4 shadow-sm">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--green-900)] text-[var(--saffron-200)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--green-950)]">{item}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--stone-700)]">
                    Fitness routine ke saath prakriti, wellness aur daily lifestyle ko
                    practical tareeke se samajhne ka mauka.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return <TestimonialsCarousel />;
}

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Accordion type="single" collapsible className="rounded-lg border border-[var(--cream-300)] bg-white px-5 shadow-sm sm:px-7">
      {items.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function HomepageFaqPreview() {
  return (
    <Section className="bg-[var(--cream-50)]" id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions families ask before joining"
        text="Hindi classes, online format, batches and beginner comfort ke baare mein quick answers."
        align="center"
      />
      <div className="mx-auto max-w-4xl">
        <FaqSection limit={6} />
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/faq">View all FAQs</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
