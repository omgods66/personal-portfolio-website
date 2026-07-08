"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/validation";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "subject", label: "Subject", type: "text" }
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setStatus(null);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const result = (await response.json()) as { message?: string };
    setStatus(result.message || (response.ok ? "Message sent successfully." : "Something went wrong."));
    if (response.ok) reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass grid gap-5 rounded-lg p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="text-sm font-medium text-white/75" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              className="mt-2 min-h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan"
              {...register(field.name)}
            />
            <p className="mt-2 min-h-5 text-sm text-sky">{errors[field.name]?.message}</p>
          </div>
        ))}
      </div>
      <div>
        <label className="text-sm font-medium text-white/75" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className="mt-2 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan"
          {...register("message")}
        />
        <p className="mt-2 min-h-5 text-sm text-sky">{errors.message?.message}</p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan px-6 font-semibold text-ink transition hover:bg-white disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? "Submitting..." : "Submit Form"}
      </button>
      {status ? <p className="rounded-md border border-cyan/25 bg-cyan/10 px-4 py-3 text-sm text-cyan">{status}</p> : null}
    </form>
  );
}
