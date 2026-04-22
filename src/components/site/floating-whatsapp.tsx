"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <>
      <a
        href={whatsappLink(whatsappMessages.parent)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.34)] transition hover:-translate-y-1 md:grid"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
        <a
          href={whatsappLink(whatsappMessages.parent)}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-base font-bold text-white shadow-[0_16px_34px_rgba(37,211,102,0.34)]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp par enquire karein
        </a>
      </div>
    </>
  );
}
