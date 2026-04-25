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
          Mummy-Papa ke liye enquire karein
        </a>
      </Button>
      <Button asChild size="lg" variant="primary">
        <a
          href={whatsappLink(whatsappMessages.guidance)}
          target="_blank"
          rel="noreferrer"
        >
          Safe routine guidance lein
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
            Ready to choose the right batch?
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">
            Parent ke liye enquire karein, ya khud join karne ke liye guidance lein.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
            WhatsApp par age, city, comfort level aur morning/evening preference bhejein.
            Hum suitable live batch, fees aur next steps clearly share kar denge.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[460px]">
          <Button asChild size="lg" variant="saffron" className="w-full">
            <a href={whatsappLink(whatsappMessages.parent)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              For my parent
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full border-white/28 bg-white/10 text-white hover:border-white/58 hover:bg-white/16">
            <a href={whatsappLink(whatsappMessages.self)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              For myself
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
