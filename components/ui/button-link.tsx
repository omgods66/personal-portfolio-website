import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-cyan text-ink shadow-glow hover:bg-white hover:shadow-[0_0_54px_rgba(0,229,255,.28)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-cyan/60 hover:bg-cyan/10",
  ghost: "text-white/75 hover:text-cyan"
};

export function ButtonLink({ children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
