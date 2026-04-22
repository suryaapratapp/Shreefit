import type { Metadata } from "next";
import { TimingsGrid } from "@/components/site/content-blocks";
import { CtaBand } from "@/components/site/cta";
import { Section } from "@/components/site/section";

export const metadata: Metadata = {
  title: "Session Timings",
  description:
    "ShreeFit currently offers Hindi live online fitness sessions for parents in morning and evening batches. Enquire on WhatsApp for guidance.",
};

export default function TimingsPage() {
  return (
    <>
      <Section className="bg-[var(--cream-50)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Class timings</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight text-[var(--green-950)] sm:text-5xl">
            Choose from two morning and two evening live Hindi sessions.
          </h1>
          <p className="mt-6 text-xl leading-9 text-[var(--stone-700)]">
            Each batch is online from home, Hindi-guided, and designed as a limited
            guided group with attentive support.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <TimingsGrid showHeader={false} />
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <CtaBand />
      </Section>
    </>
  );
}
