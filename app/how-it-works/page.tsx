import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Contact Harley Pallets LTD by email, WhatsApp or phone for pallet supply, collection or wooden waste disposal. We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.",
};

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">How it works</h1>
          <p className="mt-2 text-lg text-slate-600">
            Get in touch—we&apos;ll take it from there.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600">
            We don&apos;t use an online checkout or fixed price list. Every job is different—whether you need pallets delivered or want to sell or dispose of wooden pallets and waste—so we prefer to talk it through and agree a price that works for both sides.
          </p>
          <h2 className="mt-10 text-xl font-bold text-slate-900">Contact us</h2>
          <p className="mt-2 text-slate-600">
            You can reach us by:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-slate-600">
            <li><strong>Email</strong> — send us your requirements and we&apos;ll get back to you.</li>
            <li><strong>WhatsApp</strong> — quick and easy for photos, quantities and quick questions.</li>
            <li><strong>Phone</strong> — speak to us directly to discuss your needs.</li>
          </ul>
          <p className="mt-6 text-slate-600">
            Once you&apos;ve been in touch, we&apos;ll confirm what you need (supply, collection or both), agree a price and arrange a date that suits you. We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Go to contact
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
