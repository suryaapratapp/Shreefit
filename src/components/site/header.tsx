"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks, site, whatsappLink, whatsappMessages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--cream-300)] bg-[rgba(255,252,245,0.9)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="ShreeFit home">
          <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[var(--cream-300)]">
            <Image
              src="/images/logo-cropped.jpg"
              alt="ShreeFit logo"
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight text-[var(--green-950)]">
              {site.name}
            </span>
            <span className="block text-xs font-medium leading-tight text-[var(--stone-600)]">
              Fitness for Parents
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold text-[var(--green-900)] transition hover:bg-white hover:text-[var(--green-700)]",
                pathname === link.href && "bg-white shadow-sm",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="primary">
            <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Talk to us on WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="grid h-12 w-12 place-items-center rounded-full border border-[var(--cream-300)] bg-white text-[var(--green-950)] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[var(--cream-300)] bg-[var(--cream-50)] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-semibold text-[var(--green-950)]",
                  pathname === link.href && "bg-white shadow-sm",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" variant="saffron" className="mt-2 w-full">
              <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" />
                Talk to us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
