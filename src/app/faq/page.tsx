import type { Metadata } from "next";
import { FaqSection } from "@/components/site/content-blocks";
import { CtaBand } from "@/components/site/cta";
import { Section } from "@/components/site/section";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about ShreeFit Hindi online fitness classes for parents, including batches, beginners, online format and WhatsApp enquiry.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Section className="bg-[var(--cream-50)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight text-[var(--green-950)] sm:text-5xl">
            Questions families ask before joining ShreeFit.
          </h1>
          <p className="mt-6 text-xl leading-9 text-[var(--stone-700)]">
            Hindi classes, online format, beginner comfort and batch availability ke clear
            answers.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <FaqSection />
        </div>
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <CtaBand />
      </Section>
    </>
  );
}
