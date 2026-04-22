"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const CARD_GAP = 16;

function getVisibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function TestimonialsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);
  const [instant, setInstant] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides = useMemo(
    () => [...testimonials, ...testimonials.slice(0, Math.min(3, testimonials.length))],
    [],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateSize = () => {
      const count = getVisibleCount(window.innerWidth);
      const availableWidth = viewport.offsetWidth;
      setVisibleCount(count);
      setSlideWidth((availableWidth - CARD_GAP * (count - 1)) / count);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || testimonials.length <= visibleCount) return;

    const timer = window.setInterval(() => {
      setActive((current) => current + 1);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [paused, visibleCount]);

  function move(direction: 1 | -1) {
    setInstant(false);
    setActive((current) => {
      if (direction === -1 && current === 0) {
        return testimonials.length - 1;
      }
      return current + direction;
    });
  }

  function handleTransitionEnd() {
    if (active >= testimonials.length) {
      setInstant(true);
      setActive(0);
      window.setTimeout(() => setInstant(false), 40);
    }
  }

  function handleTouchEnd(clientX: number) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - clientX;
    if (Math.abs(delta) > 40) {
      move(delta > 0 ? 1 : -1);
    }
    touchStartX.current = null;
  }

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        ref={viewportRef}
        className="mx-auto w-full max-w-[360px] overflow-hidden sm:max-w-[736px] lg:max-w-[1172px]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
          setPaused(true);
        }}
        onTouchEnd={(event) => {
          handleTouchEnd(event.changedTouches[0]?.clientX ?? 0);
          setPaused(false);
        }}
      >
        <div
          className={cn("flex gap-4", instant ? "transition-none" : "transition-transform duration-700 ease-out")}
          style={{ transform: `translate3d(-${active * (slideWidth + CARD_GAP)}px, 0, 0)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="min-w-0 shrink-0 self-stretch"
              style={{ width: slideWidth || undefined }}
            >
              <div className="flex h-full min-h-[340px] flex-col overflow-hidden rounded-lg border border-[var(--cream-300)] bg-white shadow-[0_18px_50px_rgba(47,74,59,0.08)]">
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--green-950)]">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[var(--stone-600)]">
                        {testimonial.relation}
                      </p>
                    </div>
                    <Quote className="h-8 w-8 shrink-0 text-[var(--saffron-600)]" aria-hidden="true" />
                  </div>
                  <p className="mt-5 flex-1 text-base leading-7 text-[var(--green-950)] sm:text-lg sm:leading-8">
                    “{testimonial.quote}”
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-label="Testimonial carousel pagination">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              className={cn(
                "h-2.5 rounded-full transition-all",
                active % testimonials.length === index
                  ? "w-8 bg-[var(--green-800)]"
                  : "w-2.5 bg-[var(--cream-300)] hover:bg-[var(--green-200)]",
              )}
              onClick={() => {
                setInstant(false);
                setActive(index);
              }}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--cream-300)] bg-white text-[var(--green-950)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--green-500)]"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--cream-300)] bg-white text-[var(--green-950)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--green-500)]"
            aria-label="Next testimonial"
            onClick={() => move(1)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
