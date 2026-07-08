"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const go = (direction: number) => setActive((value) => (value + direction + testimonials.length) % testimonials.length);

  return (
    <div className="glass rounded-lg p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <Quote className="h-8 w-8 text-cyan" />
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/70 hover:text-cyan"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/70 hover:text-cyan"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.35 }}
          className="mt-8"
        >
          <p className="font-heading text-2xl leading-snug text-white">&ldquo;{current.quote}&rdquo;</p>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-semibold text-white">{current.name}</p>
              <p className="mt-1 text-sm text-white/50">{current.role}</p>
            </div>
            <p className="rounded-md bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan">{current.metric}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
