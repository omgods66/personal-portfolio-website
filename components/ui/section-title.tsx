import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">{children}</p> : null}
    </div>
  );
}
