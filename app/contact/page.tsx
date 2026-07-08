import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { site } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a consultation with Om Prakash for AI marketing strategy and digital growth."
};

export default function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle eyebrow="Contact" title="Book a consultation for your AI marketing strategy.">
            Share your goals, current channels, and biggest bottleneck. I will respond with the best next step.
          </SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <div className="glass rounded-lg p-6">
                <h2 className="font-heading text-2xl font-bold">Contact Information</h2>
                <div className="mt-6 grid gap-4 text-white/65">
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-cyan">
                    <Mail className="h-5 w-5 text-cyan" />
                    {site.email}
                  </a>
                  <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-cyan">
                    <Phone className="h-5 w-5 text-cyan" />
                    {site.phone}
                  </a>
                  <span className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-cyan" />
                    {site.location}
                  </span>
                  <span className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-cyan" />
                    Sunday to Friday, 9:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
              <div className="glass min-h-72 rounded-lg p-6">
                <h2 className="font-heading text-2xl font-bold">Google Map</h2>
                <div className="mt-5 grid h-52 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-center text-white/50">
                  New Baneshwor, Shantinagar-31
                </div>
              </div>
              <div className="glass rounded-lg p-6">
                <h2 className="font-heading text-2xl font-bold">Social Links</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {["LinkedIn", "Facebook", "Instagram", "X"].map((item) => (
                    <a key={item} href="#" className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 hover:border-cyan/45 hover:text-cyan">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
