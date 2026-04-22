import type { Metadata } from "next";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { CtaBand } from "@/components/site/cta";
import { Section, SectionHeader } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { site, whatsappLink, whatsappMessages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ShreeFit on WhatsApp Business at +91 70151 36264 or send a quick enquiry for Hindi online fitness classes for parents.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-[var(--cream-50)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-tight text-[var(--green-950)] sm:text-5xl">
            Apne parents ke liye safe Hindi fitness classes ke baare mein WhatsApp par baat karein.
          </h1>
          <p className="mt-6 text-xl leading-9 text-[var(--stone-700)]">
            Share parent age, city and preferred morning/evening batch. We will help you
            understand the right next step.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-5">
            <Card>
              <CardHeader>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--green-100)] text-[var(--green-800)]">
                  <Phone className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--green-950)]">WhatsApp Business</h2>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-extrabold text-[var(--green-950)]">{site.phoneDisplay}</p>
                <p className="mt-4 leading-7 text-[var(--stone-700)]">
                  Fastest way to enquire, ask about batches and get simple guidance.
                </p>
                <Button asChild size="lg" variant="saffron" className="mt-6 w-full">
                  <a href={whatsappLink(whatsappMessages.parent)} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Talk to us on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[var(--cream-50)]">
              <CardHeader>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--saffron-100)] text-[var(--green-900)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--green-950)]">What to share</h2>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-[var(--stone-700)]">
                  <li>Parent age and current activity level</li>
                  <li>Preferred morning or evening batch</li>
                  <li>Any medical concern you want us to be aware of</li>
                  <li>Best WhatsApp number for follow-up</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <SectionHeader
              eyebrow="Quick enquiry"
              title="Send details in one simple form"
              text="Form submit karte hi WhatsApp message ready ho jayega, so you can review and send."
            />
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-[var(--cream-50)]">
        <CtaBand />
      </Section>
    </>
  );
}
