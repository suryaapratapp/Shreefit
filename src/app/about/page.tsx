import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/site/cta";
import { ExpertsSection, SbasTrustSection } from "@/components/site/content-blocks";
import { Section, SectionHeader } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why ShreeFit was created for Indian parents aged 50+ and meet Shri Bhagwan Vashistha and Sushma Vashistha, certified Ayurveda and Yoga experts connected with Shree Bhagwati Aarogya Sansthan.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-[var(--cream-50)]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">About ShreeFit</p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight text-[var(--green-950)] sm:text-5xl">
              A caring fitness and wellness routine made especially for parents.
            </h1>
            <p className="mt-6 text-xl leading-9 text-[var(--stone-700)]">
              ShreeFit was created for Indian families who want their mother or father to
              stay active, confident and connected without the pressure of generic fitness
              programs.
            </p>
            <p className="mt-5 text-lg leading-8 text-[var(--stone-700)]">
              Classes are Hindi only, online from home, and focused on gentle movement,
              mobility, flexibility, balance, breathwork, routine and wellness. The goal is
              simple: parents should feel safe, respected and encouraged.
            </p>
            <Button asChild size="lg" variant="primary" className="mt-8">
              <a href={site.sbasUrl} target="_blank" rel="noreferrer">
                Know more about Shree Bhagwati Aarogya Sansthan
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/shreefit-parents-hero.png"
                alt="Parents joining a gentle online wellness class at home"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Why this exists"
          title="Because parents deserve guidance that feels familiar, safe and personal."
          text="Many older adults want to move more, but do not know what is safe, where to start, or how to stay consistent. ShreeFit brings structure and warmth into that daily routine."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Routine that feels doable, not intimidating.",
            "Mobility and confidence for everyday life.",
            "A Hindi-first space where parents can ask, follow and participate comfortably.",
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-[var(--cream-300)] bg-[var(--cream-50)] p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--green-700)]" />
              <p className="text-lg leading-8 text-[var(--stone-700)]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <ExpertsSection />
      </Section>

      <Section className="bg-white">
        <SbasTrustSection />
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <CtaBand />
      </Section>
    </>
  );
}
