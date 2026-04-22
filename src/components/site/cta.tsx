import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { whatsappLink, whatsappMessages } from "@/lib/site";

export function PrimaryCtas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <Button asChild size="lg" variant="saffron">
        <a href={whatsappLink(whatsappMessages.parent)} target="_blank" rel="noreferrer">
          <MessageCircle className="h-5 w-5" />
          WhatsApp par baat karein
        </a>
      </Button>
      <Button asChild size="lg" variant="primary">
        <a
          href={whatsappLink(whatsappMessages.guidance)}
          target="_blank"
          rel="noreferrer"
        >
          Free Guidance Poochhein
          <ArrowRight className="h-5 w-5" />
        </a>
      </Button>
      <Button asChild size="lg" variant="outline">
        <Link href="/timings">
          <CalendarDays className="h-5 w-5" />
          Class Timing Dekhein
        </Link>
      </Button>
    </div>
  );
}

export function CtaBand() {
  return (
    <div className="overflow-hidden rounded-lg bg-[var(--green-900)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(21,61,43,0.24)] sm:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--saffron-200)]">
            WhatsApp enquiry
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Apne parents ke liye safe Hindi fitness classes ke baare mein baat karein.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
            Hum aapko available batches, parent comfort level, aur WhatsApp enquiry ke
            next steps clearly explain kar denge.
          </p>
        </div>
        <Button asChild size="lg" variant="saffron" className="w-full sm:w-auto">
          <a href={whatsappLink(whatsappMessages.parent)} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" />
            WhatsApp par enquire karein
          </a>
        </Button>
      </div>
    </div>
  );
}
