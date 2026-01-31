import type { Metadata } from "next";
import Link from "next/link";
import { areasByCounty } from "../data/areas-covered";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Harley Pallets LTD by email, WhatsApp or phone for pallet supply and collection. We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact us</h1>
          <p className="mt-2 text-lg text-slate-600">
            Get in touch for pallet supply, collection or wooden waste solutions.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Harley Pallets LTD</h2>
            <p className="mt-4 text-slate-600">
              We&apos;re updating our contact details. Please check back soon for our phone number, or use the options below to get in touch.
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li><strong>Email:</strong> <a href="mailto:info@harleypallets.co.uk" className="text-orange-600 hover:underline">info@harleypallets.co.uk</a></li>
              <li><strong>WhatsApp:</strong> Contact details coming soon.</li>
              <li><strong>Phone:</strong> New number coming soon.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. No business address listed yet—we&apos;ll update this when we have one.
            </p>
          </div>
        </div>
      </section>

      {/* Areas covered - SEO */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16" aria-label="Areas we cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Areas we cover</h2>
          <p className="mt-2 text-slate-600">
            Harley Pallets LTD offers pallet supply, collection and wooden waste services across Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We serve businesses and individuals in the following areas (and many more):
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(areasByCounty).map(([county, towns]) => (
              <div key={county}>
                <h3 className="font-semibold text-slate-900">{county}</h3>
                <p className="mt-2 text-sm text-slate-600" role="list">
                  {towns.slice(0, 25).join(", ")}
                  {towns.length > 25 && ` and more ${county.toLowerCase()} locations.`}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-600">
            If your town or village isn&apos;t listed, we may still be able to help—get in touch to ask.
          </p>
          <Link
            href="/contact#"
            className="mt-4 inline-block font-medium text-orange-600 hover:text-orange-700"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
