"use client";

import Image from "next/image";
import { Check, Copy, MessageCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { pricing, whatsappLink, whatsappMessages } from "@/lib/site";

export function PaymentSection() {
  const [copied, setCopied] = useState(false);

  async function copyUpiId() {
    try {
      await navigator.clipboard.writeText(pricing.upiId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="pricing-ambient relative overflow-hidden rounded-lg border border-white/70 bg-white/42 p-3 shadow-[0_28px_90px_rgba(47,74,59,0.16)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <span className="wellness-particle left-[8%] top-[14%]" />
        <span className="wellness-particle wellness-particle-slow left-[46%] top-[8%]" />
        <span className="wellness-particle wellness-particle-leaf right-[9%] top-[18%]" />
        <span className="wellness-particle wellness-particle-slow bottom-[12%] left-[18%]" />
        <span className="wellness-particle wellness-particle-leaf bottom-[18%] right-[28%]" />
      </div>
      <div className="relative grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-lg border border-white/20 bg-[linear-gradient(135deg,rgba(17,41,31,0.96)_0%,rgba(32,77,52,0.88)_48%,rgba(91,138,98,0.76)_100%)] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[var(--saffron-400)] px-4 py-2 text-sm font-extrabold text-[var(--green-950)] shadow-[0_10px_24px_rgba(242,184,75,0.24)]">
              {pricing.discountLabel}
            </span>
            <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-bold text-white/88 backdrop-blur-md">
              {pricing.offerLabel}
            </span>
            <span className="rounded-full border border-white/22 bg-white/14 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
              {pricing.planLabel}
            </span>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--saffron-200)]">
            Parent fitness + wellness plan
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-3">
            <p className="text-lg font-semibold text-white/58 line-through decoration-2 decoration-white/46 sm:text-xl">
              {pricing.originalPrice}
            </p>
            <p className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-sm font-semibold text-[var(--saffron-200)] backdrop-blur-md">
              {pricing.discountText}
            </p>
          </div>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {pricing.monthlyPrice}
          </h2>
          <p className="mt-3 text-xl font-bold text-[var(--saffron-200)]">
            per month
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
            Hindi live sessions, stretching, stamina, mobility, gentle strength, breathwork
            aur healthy lifestyle guidance - parents ke liye ek simple monthly routine.
          </p>
          <div className="mt-5 rounded-lg border border-white/14 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md">
            <p className="text-base leading-7 text-white/86">{pricing.comparisonLine}</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Guided fitness", "Wellness routine", "Online from home"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border border-white/12 bg-white/12 p-3 backdrop-blur-md">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--saffron-200)]" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/70 bg-white/72 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)] backdrop-blur-xl sm:p-8 lg:p-10">
          <p className="eyebrow">Pay via UPI</p>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <p className="text-lg font-semibold text-[var(--stone-500)] line-through decoration-2">
              {pricing.originalPrice}
            </p>
            <span className="rounded-full bg-[var(--saffron-100)] px-3 py-1 text-sm font-bold text-[var(--green-900)]">
              {pricing.discountLabel}
            </span>
          </div>
          <h3 className="mt-3 text-3xl font-extrabold text-[var(--green-950)] sm:text-4xl">
            {pricing.monthlyPrice}
          </h3>
          <p className="mt-2 font-semibold text-[var(--green-700)]">per month, {pricing.discountText}</p>

          <div className="mx-auto mt-6 w-full max-w-[300px] rounded-lg border border-[var(--cream-300)] bg-white/92 p-4 shadow-[0_18px_45px_rgba(47,74,59,0.12)]">
            <Image
              src={pricing.qrImage}
              alt={`UPI QR code for ShreeFit monthly fee of ${pricing.monthlyPrice}`}
              width={720}
              height={720}
              className="h-auto w-full"
              priority={false}
            />
          </div>

          <p className="mt-5 text-base leading-7 text-[var(--stone-700)]">
            Scan the QR code or pay using the UPI ID below. After payment, please contact
            us on WhatsApp with your payment screenshot.
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--stone-600)]">
            {pricing.comparisonLine}
          </p>

          <div className="mt-5 rounded-lg border border-[var(--cream-300)] bg-white/88 p-4 shadow-sm">
            <p className="text-sm font-semibold text-[var(--stone-600)]">UPI ID</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="break-all text-lg font-extrabold text-[var(--green-950)]">
                {pricing.upiId}
              </p>
              <Button type="button" variant="outline" size="sm" onClick={copyUpiId}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          <Button asChild size="lg" variant="saffron" className="mt-5 w-full">
            <a href={whatsappLink(whatsappMessages.payment)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Send Payment Screenshot on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
