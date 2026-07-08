"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-lg border border-white/10 bg-white/[0.04]">
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
          >
            {item.question}
            <Plus className={`h-5 w-5 shrink-0 text-cyan transition ${open === index ? "rotate-45" : ""}`} />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-7 text-white/60">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
