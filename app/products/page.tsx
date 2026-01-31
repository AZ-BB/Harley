import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products & services",
  description:
    "Harley Pallets LTD offers collection and purchase of wooden pallets and wooden waste at an arranged price, plus supply of a wide range of pallets. If you can name it, we can supply it. Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire, London.",
};

export default function ProductsPage() {
  return (
    <div>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Products &amp; services</h1>
          <p className="mt-2 text-lg text-slate-600">
            Pallet supply, collection and wooden waste solutions.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/5.png"
                alt="Wide range of wooden and plastic pallets - Harley Pallets LTD"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Pallet supply</h2>
              <p className="mt-3 text-slate-600">
                We supply a wide range of pallets to businesses and individuals. If you can name it, we can supply it—from standard wooden pallets to specialist sizes and types. Tell us what you need and we&apos;ll do our best to source it and deliver to you.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-slate-900">Collection &amp; purchase of your pallets</h2>
              <p className="mt-3 text-slate-600">
                We offer collection and purchase of your wooden pallets and wooden waste at an arranged surcharge. If you have pallets or timber waste to clear, get in touch and we can discuss volume, condition and a fair price. We collect from sites across our coverage area.
              </p>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
              <Image
                src="/images/4.jpg"
                alt="Coloured wooden pallets - we buy and collect pallets"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600">Not sure what you need? We&apos;re happy to talk through your requirements.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Contact us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
