import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/service-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "AI marketing, digital marketing, SEO, content, automation, and business consultation services."
};

export default function ServicesPage() {
  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle eyebrow="Services" title="Marketing systems built for clarity, speed, and measurable growth.">
            Choose a focused service or combine strategy, content, SEO, automation, and performance marketing into one connected growth program.
          </SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.035}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
