import type { Metadata } from "next";
import { BlogCard } from "@/components/cards/blog-card";
import { Newsletter } from "@/components/ui/newsletter";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI marketing, automation, SEO, and content strategy articles by Om Prakash."
};

export default function BlogPage() {
  const featured = blogPosts.filter((post) => post.featured);
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionTitle eyebrow="Blog" title="Ideas for smarter marketing systems.">
            Explore practical thinking on AI adoption, content engines, automation, SEO, and measurable digital growth.
          </SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_.45fr]">
          <div className="glass rounded-lg p-5">
            <label className="sr-only" htmlFor="blog-search">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              placeholder="Search articles"
              className="min-h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-white outline-none placeholder:text-white/35 focus:border-cyan"
            />
          </div>
          <div className="glass flex flex-wrap gap-2 rounded-lg p-5">
            {categories.map((category) => (
              <span key={category} className="rounded-md bg-cyan/10 px-3 py-2 text-sm font-medium text-cyan">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-heading text-3xl font-bold">Featured Articles</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-heading text-3xl font-bold">Recent Articles</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Newsletter />
        </div>
      </div>
    </section>
  );
}
