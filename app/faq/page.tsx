import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Harley Pallets LTD—pallet supply, collection, wooden waste, areas covered and how to get a quote.",
};

const faqs = [
  {
    q: "Do you supply pallets?",
    a: "Yes. We supply a wide range of pallets to businesses and individuals. If you can name it, we can supply it—from standard wooden pallets to specialist sizes and types. Contact us with your requirements and we'll do our best to source and deliver.",
  },
  {
    q: "Do you buy or collect wooden pallets?",
    a: "Yes. We offer collection and purchase of your wooden pallets and wooden waste at an arranged surcharge. Get in touch with details of what you have (quantity, condition, type) and we can discuss a price and arrange collection.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We serve many towns and villages across these areas—see our Contact page for a full list. If you're not sure whether we cover your location, just ask.",
  },
  {
    q: "How do I get a quote?",
    a: "There's no pricing or checkout on the website. Contact us by email, WhatsApp or phone with your requirements—whether you need pallets supplied or want to sell/dispose of pallets or wooden waste—and we'll discuss your needs and agree a price.",
  },
  {
    q: "Do you collect wooden waste as well as pallets?",
    a: "Yes. We can arrange collection and purchase of wooden pallets and wooden waste. The price depends on volume and type, so get in touch and we'll talk you through it.",
  },
  {
    q: "Are you a legitimate business?",
    a: "Yes. Harley Pallets LTD is a family-run business with decades of experience. We're a limited company and we take pride in offering a reliable, professional service to businesses and individuals across the South East.",
  },
  {
    q: "How quickly can you deliver or collect?",
    a: "It depends on your location and our schedule. When you contact us, we'll discuss timing and try to arrange a date that suits you. We'll always be upfront about availability.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Frequently asked questions</h1>
          <p className="mt-2 text-lg text-slate-600">
            Common questions about our pallet supply and collection services.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-8">
            {faqs.map(({ q, a }, i) => (
              <li key={i} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                <h2 className="text-lg font-semibold text-slate-900">{q}</h2>
                <p className="mt-2 text-slate-600">{a}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-slate-600">
            Can&apos;t find the answer you need? <Link href="/contact" className="font-medium text-orange-600 hover:underline">Contact us</Link> and we&apos;ll get back to you.
          </p>
        </div>
      </section>
    </div>
  );
}
