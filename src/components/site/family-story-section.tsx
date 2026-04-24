"use client";

import Image from "next/image";
import { Dumbbell, HeartHandshake, House, MoveRight, TreePalm } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { familyStory, whatsappLink, whatsappMessages } from "@/lib/site";
import { Reveal } from "./reveal";
import { Section } from "./section";

const chapterIcons = [House, TreePalm, Dumbbell, HeartHandshake];

export function FamilyStorySection() {
  return (
    <Section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff9ee_0%,#fff2d8_38%,#fffcf5_100%)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-10 top-16 h-36 w-36 rounded-full bg-[rgba(242,184,75,0.16)] blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-24 h-48 w-48 rounded-full bg-[rgba(91,138,98,0.14)] blur-3xl"
          animate={{ y: [0, 16, 0], x: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 left-1/3 h-24 w-24 rounded-full bg-[rgba(201,121,85,0.12)] blur-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">For Sons And Daughters</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight text-[var(--green-950)] sm:text-5xl lg:text-6xl">
            {familyStory.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--stone-700)] sm:text-xl sm:leading-9">
            {familyStory.subheading}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-lg border border-[rgba(255,255,255,0.72)] bg-white/44 shadow-[0_28px_90px_rgba(47,74,59,0.14)] backdrop-blur-xl">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={familyStory.image}
                    alt={familyStory.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 52vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,41,31,0.02),rgba(16,41,31,0.22))]" />
                </div>
                <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
                  {["Joint family warmth", "Today’s reality", "ShreeFit bridge"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-[var(--cream-300)] bg-white/72 px-4 py-3 text-sm font-semibold text-[var(--green-900)] shadow-sm backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-[rgba(255,255,255,0.76)] bg-white/62 shadow-[0_22px_70px_rgba(47,74,59,0.12)] backdrop-blur-xl">
                <div className="border-b border-[var(--cream-300)] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,247,233,0.76))] px-5 py-4">
                  <p className="text-sm font-bold text-[var(--green-900)]">
                    {familyStory.video.label}
                  </p>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="overflow-hidden rounded-lg border border-[var(--cream-300)] bg-[var(--green-950)] shadow-[0_18px_44px_rgba(16,41,31,0.18)]">
                    <div className="relative aspect-video">
                      <video
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={familyStory.video.poster}
                        aria-label={familyStory.video.ariaLabel}
                      >
                        <source src={familyStory.video.src} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {familyStory.chapters.map((chapter, index) => {
              const Icon = chapterIcons[index] ?? HeartHandshake;
              return (
                <Reveal key={chapter.title} delay={index * 0.05}>
                  <Card className="overflow-hidden border-white/65 bg-white/70 p-5 shadow-[0_20px_60px_rgba(47,74,59,0.1)] backdrop-blur-md sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-[var(--green-900)] text-[var(--saffron-200)] shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="eyebrow !text-[0.72rem]">{chapter.label}</p>
                        <h3 className="mt-2 text-2xl font-bold text-[var(--green-950)]">
                          {chapter.title}
                        </h3>
                        <p className="mt-4 text-lg leading-8 text-[var(--stone-700)]">
                          {chapter.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}

            <Reveal delay={0.18}>
              <div className="overflow-hidden rounded-lg border border-[rgba(255,255,255,0.76)] bg-[linear-gradient(135deg,rgba(23,61,43,0.92)_0%,rgba(47,95,61,0.82)_100%)] p-6 text-white shadow-[0_24px_80px_rgba(23,61,43,0.22)] sm:p-8">
                <p className="eyebrow !text-[var(--saffron-200)]">Family Fitness Bridge</p>
                <h3 className="mt-3 text-balance text-3xl font-extrabold sm:text-4xl">
                  {familyStory.closingTitle}
                </h3>
                <p className="mt-4 text-lg leading-8 text-white/84">
                  {familyStory.closingText}
                </p>
                <Button asChild size="lg" variant="saffron" className="mt-6 w-full sm:w-auto">
                  <a href={whatsappLink(whatsappMessages.parent)} target="_blank" rel="noreferrer">
                    {familyStory.ctaLabel}
                    <MoveRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
