import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group glass flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/45"
    >
      <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
        <span>{post.category}</span>
      </div>
      <h3 className="mt-4 font-heading text-xl font-bold text-white transition group-hover:text-cyan">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-white/60">{post.excerpt}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/45">
        <span className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric" })}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </span>
      </div>
    </Link>
  );
}
