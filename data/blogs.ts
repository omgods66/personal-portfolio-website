import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-marketing-roadmap-for-small-businesses",
    title: "How Small Businesses Can Build an AI Marketing Roadmap",
    excerpt:
      "A practical sequence for adopting AI without wasting budget on disconnected tools.",
    category: "AI Strategy",
    date: "2026-06-18",
    readTime: "6 min read",
    featured: true,
    body: [
      "AI marketing works best when it starts with business goals rather than tools. Begin by identifying where growth is blocked: lead quality, slow follow-up, weak content production, unclear reporting, or inconsistent campaigns.",
      "From there, choose one workflow to improve first. A focused pilot is easier to measure and helps the team build confidence before expanding into larger automation and personalization systems.",
      "The strongest roadmap combines human strategy with AI speed: sharper customer insights, faster content drafts, automated reporting, and continuous campaign learning."
    ]
  },
  {
    slug: "content-systems-that-compound",
    title: "Content Systems That Compound with AI",
    excerpt:
      "Turn one strategic idea into articles, social posts, email, and sales assets without losing quality.",
    category: "Content",
    date: "2026-05-29",
    readTime: "5 min read",
    featured: true,
    body: [
      "A content system is more than a calendar. It is a repeatable way to collect market questions, turn them into useful assets, distribute them across channels, and measure what creates demand.",
      "AI can accelerate research, outlines, repurposing, and optimization. The human layer remains responsible for insight, taste, accuracy, and brand judgment.",
      "When content is built as a system, every article can support search, social, email, and sales conversations."
    ]
  },
  {
    slug: "automation-without-losing-trust",
    title: "Marketing Automation Without Losing Customer Trust",
    excerpt:
      "Automation should make customer experiences feel more timely and personal, not colder.",
    category: "Automation",
    date: "2026-04-12",
    readTime: "4 min read",
    body: [
      "The best automation is almost invisible. It sends the right message at the right time, routes leads quickly, reminds teams what matters, and removes delays from the buyer journey.",
      "Trust breaks when automation ignores context. Use segmentation, clear consent, useful content, and human handoff points to keep experiences respectful.",
      "A strong automation strategy improves speed while preserving care."
    ]
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    title: "SEO in the Age of AI Search",
    excerpt:
      "Search is changing, but clarity, authority, structure, and usefulness still win.",
    category: "SEO",
    date: "2026-03-21",
    readTime: "7 min read",
    body: [
      "AI search increases the value of authoritative, well-structured content. Businesses need pages that answer specific questions, demonstrate expertise, and make entities easy for machines to understand.",
      "Technical health, schema, original insight, and topical depth all matter. Generic content is less defensible than ever.",
      "SEO strategy should now serve both human readers and AI-mediated discovery."
    ]
  }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
