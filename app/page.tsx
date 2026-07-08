import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BlogCard } from "@/components/cards/blog-card";
import { ServiceCard } from "@/components/cards/service-card";
import { TestimonialSlider } from "@/components/cards/testimonial-slider";
import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { blogPosts } from "@/data/blogs";
import { services } from "@/data/services";

const portfolio = [
  { title: "Local Service Lead Engine", metric: "+42% qualified leads", detail: "AI-assisted SEO, landing pages, and automated follow-up." },
  { title: "Content Authority System", metric: "3x publishing speed", detail: "Editorial workflows for blog, social, email, and sales reuse." },
  { title: "Paid Campaign Optimization", metric: "-28% acquisition cost", detail: "Sharper funnel tracking, creative testing, and weekly optimization." }
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionTitle eyebrow="About" title="Marketing expertise with an AI-first operating system.">
              I help businesses apply AI where it actually improves growth: strategy, content production, SEO, automation, analytics, and customer journeys.
            </SectionTitle>
            <div className="mt-8">
              <ButtonLink href="/about" variant="secondary">
                Read More
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {["AI-ready strategy", "Human-centered messaging", "Conversion-focused systems", "Practical automation"].map((item) => (
                <div key={item} className="glass rounded-lg p-5">
                  <CheckCircle2 className="h-5 w-5 text-cyan" />
                  <p className="mt-4 font-heading text-xl font-bold">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-midnight/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle eyebrow="Services" title="AI-powered marketing services for modern growth.">
              Strategy, execution, and automation across the channels that move buyers from awareness to action.
            </SectionTitle>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 7).map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle eyebrow="Portfolio" title="Selected growth systems and success metrics." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {portfolio.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="glass h-full rounded-lg p-6">
                  <p className="font-heading text-3xl font-bold text-gradient">{project.metric}</p>
                  <h3 className="mt-6 font-heading text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{project.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight/55 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionTitle eyebrow="Testimonials" title="Clear strategy, practical execution, measurable wins." />
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <SectionTitle eyebrow="Blog" title="Latest AI marketing insights." />
            </Reveal>
            <ButtonLink href="/blog" variant="secondary">
              Read More
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-lg border border-cyan/25 bg-cyan/10 p-8 text-center shadow-glow sm:p-12">
            <h2 className="font-heading text-3xl font-bold sm:text-5xl">Let&apos;s Build Your AI Marketing Strategy</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/65">
              Bring your goals, bottlenecks, and current channels. I will help turn them into a focused growth plan.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
