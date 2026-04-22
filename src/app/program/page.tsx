import type { Metadata } from "next";
import { BenefitsGrid, ProcessSteps, TimingsGrid, WhoItsForList } from "@/components/site/content-blocks";
import { CtaBand } from "@/components/site/cta";
import { Section, SectionHeader } from "@/components/site/section";

export const metadata: Metadata = {
  title: "Program and How It Works",
  description:
    "See how ShreeFit's Hindi online fitness program works for parents aged 50+, from WhatsApp enquiry to morning/evening live classes and routine building.",
};

export default function ProgramPage() {
  return (
    <>
      <Section className="bg-[var(--cream-50)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Program</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight text-[var(--green-950)] sm:text-5xl">
            Hindi guided online fitness and wellness classes for older adults.
          </h1>
          <p className="mt-6 text-xl leading-9 text-[var(--stone-700)]">
            Suitable for parents who want safe movement in a supportive environment:
            mobility, flexibility, balance, gentle strength, breathwork and daily confidence.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Clear flow"
          title="How ShreeFit works"
          text="Small, attentive batches are preferred so parents can learn safely and comfortably in Hindi."
          align="center"
        />
        <ProcessSteps />
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Who it is for"
            title="For parents who want structured guidance, not random workouts."
            text="The program is online, Hindi-first and built around a safe, encouraging pace."
          />
          <WhoItsForList />
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          eyebrow="Benefits"
          title="What parents can build with consistent practice"
          text="Every class is designed to support movement quality, routine and confidence."
          align="center"
        />
        <BenefitsGrid />
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <TimingsGrid />
      </Section>

      <Section className="bg-white">
        <CtaBand />
      </Section>
    </>
  );
}
