import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, site } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button-link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_.7fr_.8fr] lg:px-8">
        <div>
          <Link href="/" className="font-heading text-2xl font-bold text-white">
            Om Prakash
          </Link>
          <p className="mt-4 max-w-md leading-7 text-white/60">
            AI marketing strategy, automation, content, SEO, and digital growth consulting for businesses ready to scale intelligently.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact">Book Consultation</ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">Navigate</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/60 hover:text-cyan">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</h2>
          <div className="mt-5 grid gap-4 text-sm text-white/65">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-cyan">
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 hover:text-cyan">
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
            <span className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              {site.location}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/45">
        Copyright {new Date().getFullYear()} Om Prakash. All rights reserved.
      </div>
    </footer>
  );
}
