import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Harley Pallets LTD is a family-run business with decades of experience in wooden pallet supply, collection and recycling across Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">About Harley Pallets LTD</h1>
          <p className="mt-2 text-lg text-slate-600">
            A family-run business you can trust for pallet supply and collection.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600">
              <h2 className="text-2xl font-bold text-slate-900">Family-run, with decades of experience</h2>
              <p>
                Harley Pallets LTD has been serving businesses and individuals across the South East for many years. As a family-run business, we take pride in building lasting relationships with our customers and delivering a reliable, personal service that larger operators often can&apos;t match.
              </p>
              <p>
                We understand that when you need pallets—or when you have pallets or wooden waste to move—you need a supplier you can depend on. That&apos;s why we focus on quality, clear communication and getting the job done on time, every time.
              </p>
              <h2 className="mt-10 text-2xl font-bold text-slate-900">What we stand for</h2>
              <p>
                We believe in straightforward, honest dealing: no hidden costs, no fuss. Whether you&apos;re a small business or a larger operation, we treat every enquiry with the same care and aim to provide a service that keeps you coming back.
              </p>
              <p>
                Our experience in the industry means we can advise on the right type of pallets for your needs and handle collection and disposal of wooden pallets and waste in a responsible way. When you work with Harley Pallets LTD, you&apos;re working with a team that cares about getting it right.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/3.jpg"
                alt="Wooden pallets in storage - Harley Pallets LTD"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
