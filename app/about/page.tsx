import type { Metadata } from "next";
import { Award, GraduationCap, Target, Telescope } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Om Prakash, AI Marketing Expert based in New Baneshwor, Shantinagar-31."
};

const timeline = [
  ["Foundation", "Built expertise across digital marketing, content, brand strategy, SEO, and paid growth."],
  ["AI Shift", "Integrated AI tools into research, content systems, automation, and performance reporting."],
  ["Consulting", "Now helps businesses adopt AI marketing through practical strategy and execution."]
];

const skills = ["AI strategy", "SEO", "Content systems", "Automation", "Brand positioning", "Analytics", "Social media", "Performance marketing"];

export default function AboutPage() {
  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle eyebrow="About Om" title="An AI marketing expert focused on practical business growth.">
            I combine marketing fundamentals with modern AI systems to help businesses communicate clearly, automate wisely, and scale with measurable confidence.
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            [Target, "Mission", "Make AI marketing useful, measurable, and accessible for ambitious businesses."],
            [Telescope, "Vision", "A market where small and growing brands use intelligent systems with the confidence of larger teams."],
            [Award, "Why Choose Me", "Strategic clarity, hands-on execution, and AI adoption that respects customer trust."]
          ].map(([Icon, title, copy]) => (
            <Reveal key={title as string}>
              <article className="glass h-full rounded-lg p-6">
                <Icon className="h-7 w-7 text-cyan" />
                <h2 className="mt-5 font-heading text-2xl font-bold">{title as string}</h2>
                <p className="mt-3 leading-7 text-white/60">{copy as string}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div className="glass rounded-lg p-6 sm:p-8">
              <h2 className="font-heading text-3xl font-bold">Career Journey</h2>
              <div className="mt-8 grid gap-6">
                {timeline.map(([label, detail], index) => (
                  <div key={label} className="relative border-l border-cyan/30 pl-6">
                    <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-cyan shadow-glow" />
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">0{index + 1}</p>
                    <h3 className="mt-2 font-heading text-xl font-bold">{label}</h3>
                    <p className="mt-2 leading-7 text-white/60">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <div className="glass rounded-lg p-6 sm:p-8">
                <GraduationCap className="h-7 w-7 text-cyan" />
                <h2 className="mt-5 font-heading text-3xl font-bold">Experience, Education, Achievements</h2>
                <p className="mt-4 leading-8 text-white/60">
                  Practical experience across marketing strategy, campaign planning, AI-assisted content production, automation workflows, SEO optimization, and advisory work for growth-focused businesses.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["AI Marketing Systems", "Digital Growth", "Customer Journey Strategy", "Marketing Automation"].map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="glass rounded-lg p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-bold">Skills</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-md bg-cyan/10 px-3 py-2 text-sm font-medium text-cyan">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 rounded-lg border border-cyan/25 bg-cyan/10 p-8 text-center">
            <h2 className="font-heading text-3xl font-bold">Ready to bring AI into your marketing?</h2>
            <div className="mt-7">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
