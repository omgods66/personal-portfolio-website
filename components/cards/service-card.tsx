import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group glass flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/45 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-5">
        <span className="grid h-12 w-12 place-items-center rounded-md bg-cyan/10 text-cyan">
          <Icon className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:text-cyan" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-white/60">{service.short}</p>
    </Link>
  );
}
