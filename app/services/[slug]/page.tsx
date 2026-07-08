import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/cards/service-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ButtonLink } from "@/components/ui/button-link";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <Reveal>
            <div>
              <div className="grid h-16 w-16 place-items-center rounded-lg bg-cyan/10 text-cyan">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="mt-7 font-heading text-5xl font-bold tracking-tight sm:text-6xl">{service.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{service.overview}</p>
              <div className="mt-8">
                <ButtonLink href="/contact">Book Consultation</ButtonLink>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-lg p-6">
              <h2 className="font-heading text-2xl font-bold">Pricing Placeholder</h2>
              <p className="mt-4 leading-7 text-white/60">
                Custom advisory and implementation packages are scoped after discovery, based on goals, channel complexity, and team capacity.
              </p>
              <div className="mt-6 rounded-md border border-cyan/25 bg-cyan/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan">Starting with</p>
                <p className="mt-2 font-heading text-3xl font-bold">Strategy Session</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["Benefits", service.benefits],
            ["Process", service.process],
            ["Features", service.features]
          ].map(([title, items]) => (
            <Reveal key={title as string}>
              <article className="glass h-full rounded-lg p-6">
                <h2 className="font-heading text-2xl font-bold">{title as string}</h2>
                <div className="mt-6 grid gap-4">
                  {(items as string[]).map((item) => (
                    <p key={item} className="flex gap-3 text-white/65">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <SectionTitle eyebrow="FAQs" title="Questions before we begin." />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={service.faqs} />
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <SectionTitle eyebrow="Related" title="Services that pair well with this." />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
