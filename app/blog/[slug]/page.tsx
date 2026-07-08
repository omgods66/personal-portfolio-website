import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/cards/blog-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Newsletter } from "@/components/ui/newsletter";
import { Reveal } from "@/components/ui/reveal";
import { getBlogPost, blogPosts } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <section className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
        <Reveal>
          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{post.category}</p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-6xl">{post.title}</h1>
            <p className="mt-5 text-white/55">
              {new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-7">
          {post.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-9 text-white/68">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-7xl">
        <h2 className="font-heading text-3xl font-bold">Related Posts</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.slug} post={item} />
          ))}
        </div>
        <div className="mt-12">
          <Newsletter />
        </div>
      </div>
    </section>
  );
}
