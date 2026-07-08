"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { newsletterSchema, type NewsletterInput } from "@/lib/validation";

export function Newsletter() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterInput) {
    setStatus(null);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    setStatus(response.ok ? "You are subscribed." : "Subscription failed. Please try again.");
    if (response.ok) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-3 rounded-lg p-5 sm:grid-cols-[1fr_auto]">
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Email for AI marketing insights"
        className="min-h-12 rounded-md border border-white/10 bg-white/[0.04] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan"
        {...register("email")}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan px-5 font-semibold text-ink transition hover:bg-white disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        Subscribe
      </button>
      <p className="text-sm text-white/55 sm:col-span-2">{errors.email?.message || status}</p>
    </form>
  );
}
