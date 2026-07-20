"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Bot, BrainCircuit, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

const metrics = [
  ["42%", "Lead quality lift"],
  ["3x", "Content velocity"],
  ["28%", "Lower acquisition cost"]
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-radial-grid" />
      <div className="grid-mask absolute inset-0 -z-10 opacity-70" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-32 hidden h-20 w-20 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan shadow-glow lg:grid"
      >
        <BrainCircuit className="h-9 w-9" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-[7%] hidden h-16 w-16 place-items-center rounded-lg border border-violet/35 bg-violet/10 text-violet shadow-violet md:grid"
      >
        <Bot className="h-8 w-8" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-cyan" />
            AI strategy, automation, content, and performance growth
          </div>
          <h1 className="mt-7 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Helping Businesses Grow with <span className="text-gradient">AI Marketing</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            I help businesses turn AI into practical growth systems: smarter campaigns, faster content, sharper SEO, automated workflows, and measurable customer acquisition.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-glow">
            <Image
              src="/hero-photo.png"
              alt="Om Prakash planning digital marketing strategy"
              width={1408}
              height={1110}
              priority
              className="aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="glass absolute bottom-4 left-4 right-4 rounded-lg p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[24rem]">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Growth Console</span>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-glow" />
              </div>
              <div className="grid gap-2">
                {["Audience intelligence", "AI content workflow", "Marketing automation", "SEO opportunity map"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.12 }}
                      className="flex items-center justify-between rounded-md border border-white/10 bg-ink/55 px-3 py-2"
                    >
                      <span className="text-sm text-white/75">{item}</span>
                      <span className="text-sm font-bold text-cyan">{88 + index * 3}%</span>
                    </motion.div>
                  )
                )}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.05] p-3">
                    <p className="font-heading text-xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-[11px] leading-4 text-white/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
