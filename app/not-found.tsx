import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] px-4 pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan">404</p>
        <h1 className="mt-4 font-heading text-5xl font-bold">This signal is not online.</h1>
        <p className="mx-auto mt-5 max-w-xl text-white/65">
          The page may have moved, but the strategy room is still open.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="primary">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
