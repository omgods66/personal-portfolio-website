import {
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Mail,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Sparkles
} from "lucide-react";
import type { Service } from "@/types";

const sharedFaqs = [
  {
    question: "How fast can we start?",
    answer:
      "Most engagements begin with a discovery call and a 7-day strategic audit before execution starts."
  },
  {
    question: "Do you support small businesses?",
    answer:
      "Yes. The strategy is sized around your offer, budget, team capacity, and current marketing maturity."
  },
  {
    question: "Can AI tools connect with existing workflows?",
    answer:
      "Yes. Recommendations prioritize practical tools that fit your CRM, content process, analytics, and sales workflow."
  }
];

export const services: Service[] = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    short: "Data-backed growth plans powered by AI insights, automation, and sharper customer journeys.",
    icon: BrainCircuit,
    overview:
      "A practical AI marketing roadmap that connects business goals, customer data, campaign systems, and measurable growth.",
    benefits: ["Sharper positioning", "Lower acquisition waste", "Faster campaign testing", "Clear KPI ownership"],
    process: ["Audit current channels", "Map AI opportunities", "Build growth roadmap", "Launch measurement system"],
    features: ["Customer journey analysis", "AI tool stack planning", "Campaign architecture", "Performance dashboards"],
    faqs: sharedFaqs
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Integrated digital campaigns across search, content, paid media, and conversion touchpoints.",
    icon: Megaphone,
    overview:
      "End-to-end digital marketing support that turns scattered activity into a focused acquisition engine.",
    benefits: ["Better channel mix", "Conversion-led messaging", "Unified reporting", "Consistent campaign rhythm"],
    process: ["Define funnel", "Prioritize channels", "Launch campaigns", "Optimize weekly"],
    features: ["Campaign planning", "Landing page guidance", "Analytics setup", "Growth experiments"],
    faqs: sharedFaqs
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Audience-building content systems for consistent reach, trust, and lead generation.",
    icon: Sparkles,
    overview:
      "A social presence designed around audience psychology, content pillars, platform behavior, and brand authority.",
    benefits: ["Consistent posting system", "Stronger engagement", "Reusable content assets", "Better brand recall"],
    process: ["Audience research", "Content pillars", "Publishing calendar", "Engagement review"],
    features: ["Content strategy", "Creative direction", "Caption frameworks", "Performance analysis"],
    faqs: sharedFaqs
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    short: "Authority-building articles, lead magnets, scripts, and AI-assisted editorial workflows.",
    icon: PenTool,
    overview:
      "Content systems that educate buyers, rank in search, support sales conversations, and compound over time.",
    benefits: ["Stronger trust", "More organic reach", "Sales enablement", "Efficient production"],
    process: ["Topic research", "Editorial calendar", "Content production", "Distribution loops"],
    features: ["Blog strategy", "Lead magnet planning", "AI writing workflows", "Repurposing systems"],
    faqs: sharedFaqs
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    short: "Technical, content, and local SEO built for discoverability and qualified demand.",
    icon: Search,
    overview:
      "Search optimization that improves structure, relevance, authority, and the conversion value of organic traffic.",
    benefits: ["Higher discoverability", "Qualified intent traffic", "Better site structure", "Long-term compounding"],
    process: ["Technical audit", "Keyword mapping", "Content optimization", "Authority plan"],
    features: ["On-page SEO", "Technical fixes", "Schema guidance", "Content briefs"],
    faqs: sharedFaqs
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    short: "Lifecycle email sequences, newsletters, and automated follow-ups that convert attention into revenue.",
    icon: Mail,
    overview:
      "Email journeys that nurture prospects, reactivate leads, and keep customers engaged with relevant messaging.",
    benefits: ["More repeat touchpoints", "Higher lead conversion", "Better retention", "Segmented messaging"],
    process: ["List audit", "Journey design", "Copy and setup", "A/B optimization"],
    features: ["Welcome sequences", "Newsletter systems", "Segmentation", "Campaign reporting"],
    faqs: sharedFaqs
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    short: "Automated workflows for leads, campaigns, reporting, and repeatable marketing operations.",
    icon: Bot,
    overview:
      "Smart automation that removes manual friction while keeping your marketing human, timely, and measurable.",
    benefits: ["Less manual work", "Faster lead response", "Cleaner operations", "Reliable reporting"],
    process: ["Workflow audit", "Tool selection", "Automation build", "QA and training"],
    features: ["Lead routing", "CRM workflows", "AI assistants", "Reporting automation"],
    faqs: sharedFaqs
  },
  {
    slug: "ai-business-consultation",
    title: "AI Business Consultation",
    short: "Strategic advisory for adopting AI across marketing, sales, operations, and decision-making.",
    icon: BriefcaseBusiness,
    overview:
      "Executive-friendly guidance for using AI responsibly and profitably inside real business workflows.",
    benefits: ["Clear adoption priorities", "Reduced tool confusion", "Team enablement", "Better decisions"],
    process: ["Business assessment", "Opportunity scoring", "Pilot design", "Implementation support"],
    features: ["AI readiness audit", "Tool recommendations", "Training sessions", "Use-case prioritization"],
    faqs: sharedFaqs
  },
  {
    slug: "brand-positioning",
    title: "Brand Positioning",
    short: "Sharper messaging, differentiation, and offer clarity for crowded digital markets.",
    icon: Rocket,
    overview:
      "A positioning system that makes your offer easier to understand, remember, compare, and choose.",
    benefits: ["Clearer message", "Stronger differentiation", "Better sales conversations", "Higher perceived value"],
    process: ["Market review", "Audience interviews", "Message framework", "Launch guide"],
    features: ["Positioning map", "Value proposition", "Brand voice", "Offer narrative"],
    faqs: sharedFaqs
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    short: "ROI-focused paid campaigns with structured testing, tracking, and conversion optimization.",
    icon: BarChart3,
    overview:
      "Paid growth programs built around disciplined testing, accurate measurement, and profitable acquisition.",
    benefits: ["Better budget control", "Faster learning cycles", "Improved ROAS", "Conversion-focused campaigns"],
    process: ["Tracking setup", "Campaign build", "Creative tests", "Scale winners"],
    features: ["Paid ads strategy", "Funnel analytics", "Creative testing", "Weekly optimization"],
    faqs: sharedFaqs
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
