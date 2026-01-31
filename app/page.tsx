import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <Image
                src="/images/harley_pallets_logo_high_quality.png"
                alt="Harley Pallets LTD"
                width={400}
                height={120}
                className="mb-6 w-full max-w-sm object-contain object-left sm:max-w-md lg:max-w-lg"
                priority
              />
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Reliable pallet supply &amp; collection across the South East
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Family-run for decades, Harley Pallets LTD offers collection and purchase of your wooden pallets and wooden waste, plus a wide range of pallets to buy. If you can name it, we can supply it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
                >
                  Get in touch
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center rounded-lg border border-slate-500 px-5 py-3 font-medium text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
                >
                  Our services
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-square">
              <Image
                src="/images/1.jpg"
                alt="Stacked wooden pallets - Harley Pallets LTD supply and collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600">
            <strong>Areas we cover:</strong> Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We collect and deliver across the region.
          </p>
        </div>
      </section>

      {/* How it works teaser */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to get started</h2>
          <p className="mt-2 text-slate-600">
            Contact us by email, WhatsApp or phone. We&apos;ll discuss your needs—whether you need pallets supplied or want to sell or dispose of wooden pallets and waste—and arrange collection or delivery at a time that suits you.
          </p>
          <Link
            href="/how-it-works"
            className="mt-4 inline-block font-medium text-orange-600 hover:text-orange-700"
          >
            How it works →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold sm:text-2xl">Need pallets or want to sell yours?</h2>
          <p className="mt-2 text-slate-300">Get in touch for a no-obligation chat.</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Contact us
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
