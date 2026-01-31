import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/harley_pallets_logo_high_quality.png"
                alt="Harley Pallets LTD"
                width={140}
                height={42}
                className="h-9 w-auto object-contain opacity-90"
              />
            </Link>
            <p className="mt-3 text-sm">
              Family-run pallet supply and collection across Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick links</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <p className="mt-3 text-sm">
              Get in touch for pallet supply, collection or waste solutions.
            </p>
            <Link
              href="/#contact"
              className="mt-3 inline-block text-sm font-medium text-orange-400 hover:text-orange-300"
            >
              Contact us →
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Harley Pallets LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
