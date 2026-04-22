import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks, site, whatsappLink, whatsappMessages } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--cream-300)] bg-[var(--green-950)] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-white/20">
              <Image
                src="/images/logo-cropped.jpg"
                alt="ShreeFit logo"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </span>
            <div>
              <p className="text-lg font-bold">{site.fullName}</p>
              <p className="text-sm text-white/70">{site.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl leading-7 text-white/72">
            Hindi live classes, caring guidance, and a simple wellness routine for Indian
            parents who want to stay active from home.
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/58">
            Disclaimer: This program supports fitness and wellness and is not a replacement
            for medical treatment. Please consult a doctor if there are specific medical
            concerns.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--saffron-200)]">
            Quick links
          </h2>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/74 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.sbasUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/74 transition hover:text-white"
            >
              Shree Bhagwati Aarogya Sansthan
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--saffron-200)]">
            WhatsApp Business
          </h2>
          <p className="mt-5 text-2xl font-bold">{site.phoneDisplay}</p>
          <p className="mt-3 leading-7 text-white/72">
            Apne parents ke liye safe Hindi fitness classes ke baare mein WhatsApp par
            baat karein.
          </p>
          <Button asChild size="lg" variant="saffron" className="mt-6 w-full sm:w-auto">
            <a href={whatsappLink(whatsappMessages.parent)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Talk to us on WhatsApp
            </a>
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/56">
        Copyright {new Date().getFullYear()} ShreeFit. All rights reserved.
      </div>
    </footer>
  );
}
