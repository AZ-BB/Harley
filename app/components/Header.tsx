import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/10 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/harley_pallets_logo_high_quality.png"
            alt="Harley Pallets LTD - Wooden pallets supply and collection"
            width={160}
            height={48}
            className="h-10 w-auto object-contain sm:h-12"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
        >
          Contact us
          <span aria-hidden>→</span>
        </Link>
      </div>
      {/* Mobile nav - simple dropdown or hamburger could be added later */}
      <nav className="flex flex-wrap justify-center gap-3 border-t border-slate-700/50 px-4 py-3 md:hidden" aria-label="Mobile navigation">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm text-slate-400 hover:text-white"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
