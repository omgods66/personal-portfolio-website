import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  process: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  metric: string;
};
