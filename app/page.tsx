import Link from "next/link";
import Image from "next/image";
import { areasByCounty } from "./data/areas-covered";

const faqs = [
  { q: "Do you supply pallets?", a: "Yes. We supply a wide range of pallets to businesses and individuals. If you can name it, we can supply it—from standard wooden pallets to specialist sizes and types. Contact us with your requirements and we'll do our best to source and deliver." },
  { q: "Do you buy or collect wooden pallets?", a: "Yes. We offer collection and purchase of your wooden pallets and wooden waste at an arranged surcharge. Get in touch with details of what you have (quantity, condition, type) and we can discuss a price and arrange collection." },
  { q: "What areas do you cover?", a: "We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We serve many towns and villages across these areas—see the Contact section for a full list. If you're not sure whether we cover your location, just ask." },
  { q: "How do I get a quote?", a: "There's no pricing or checkout on the website. Contact us by email, WhatsApp or phone with your requirements—whether you need pallets supplied or want to sell/dispose of pallets or wooden waste—and we'll discuss your needs and agree a price." },
  { q: "Do you collect wooden waste as well as pallets?", a: "Yes. We can arrange collection and purchase of wooden pallets and wooden waste. The price depends on volume and type, so get in touch and we'll talk you through it." },
  { q: "Are you a legitimate business?", a: "Yes. Harley Pallets LTD is a family-run business with decades of experience. We're a limited company and we take pride in offering a reliable, professional service to businesses and individuals across the South East." },
  { q: "How quickly can you deliver or collect?", a: "It depends on your location and our schedule. When you contact us, we'll discuss timing and try to arrange a date that suits you. We'll always be upfront about availability." },
];

export default function Home() {
  return (
    <div>
      {/* Section: Hero */}
      <section id="hero" className="relative overflow-hidden bg-slate-900 text-white" aria-label="Hero">
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
                <Link href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-700">
                  Get in touch <span aria-hidden>→</span>
                </Link>
                <Link href="/#products" className="inline-flex items-center rounded-lg border border-slate-500 px-5 py-3 font-medium text-white transition-colors hover:border-slate-400 hover:bg-slate-800">
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

      {/* Section: Areas we cover */}
      <section id="areas" className="border-b border-slate-200 bg-slate-50 py-8" aria-label="Areas we cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600">
            <strong>Areas we cover:</strong> Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We collect and deliver across the region.
          </p>
        </div>
      </section>

      {/* Section: About */}
      <section id="about" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32" aria-label="About us">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <span className="inline-block rounded-full bg-orange-600/10 px-4 py-1.5 text-sm font-semibold text-orange-400 ring-1 ring-inset ring-orange-600/20">About us</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About Harley Pallets LTD
            </h2>
            <p className="mt-4 text-lg text-slate-300 lg:text-xl">
              A family-run business you can trust for pallet supply and collection.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur">
                <h3 className="mb-4 text-2xl font-bold text-white">Family-run, with decades of experience</h3>
                <p className="mb-4 text-slate-300">
                  Harley Pallets LTD has been serving businesses and individuals across the South East for many years. As a family-run business, we take pride in building lasting relationships with our customers and delivering a reliable, personal service that larger operators often can&apos;t match.
                </p>
                <p className="text-slate-300">
                  We understand that when you need pallets—or when you have pallets or wooden waste to move—you need a supplier you can depend on. That&apos;s why we focus on quality, clear communication and getting the job done on time, every time.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur">
                <h3 className="mb-4 text-2xl font-bold text-white">What we stand for</h3>
                <p className="mb-4 text-slate-300">
                  We believe in straightforward, honest dealing: no hidden costs, no fuss. Whether you&apos;re a small business or a larger operation, we treat every enquiry with the same care and aim to provide a service that keeps you coming back.
                </p>
                <p className="text-slate-300">
                  Our experience in the industry means we can advise on the right type of pallets for your needs and handle collection and disposal of wooden pallets and waste in a responsible way. When you work with Harley Pallets LTD, you&apos;re working with a team that cares about getting it right.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-600/20 to-sky-500/20 blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image src="/images/3.jpg" alt="Wooden pallets in storage - Harley Pallets LTD" width={800} height={600} className="h-full w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Products */}
      <section id="products" className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-24 lg:py-32" aria-label="Products and services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <span className="inline-block rounded-full bg-sky-600/10 px-4 py-1.5 text-sm font-semibold text-sky-600 ring-1 ring-inset ring-sky-600/20">What we offer</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Products &amp; services</h2>
            <p className="mt-4 text-lg text-slate-600 lg:text-xl">Pallet supply, collection and wooden waste solutions.</p>
          </div>
          <div className="space-y-16 lg:space-y-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
                <Image src="/images/5.png" alt="Wide range of wooden and plastic pallets - Harley Pallets LTD" width={800} height={600} className="h-full w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg lg:p-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-orange-100 p-3 text-orange-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">Pallet supply</h3>
                <p className="mt-4 text-slate-600 lg:text-lg">We supply a wide range of pallets to businesses and individuals. If you can name it, we can supply it—from standard wooden pallets to specialist sizes and types. Tell us what you need and we&apos;ll do our best to source it and deliver to you.</p>
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg lg:order-1 lg:p-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-sky-100 p-3 text-sky-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">Collection &amp; purchase</h3>
                <p className="mt-4 text-slate-600 lg:text-lg">We offer collection and purchase of your wooden pallets and wooden waste at an arranged surcharge. If you have pallets or timber waste to clear, get in touch and we can discuss volume, condition and a fair price. We collect from sites across our coverage area.</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/5 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>
                <Image src="/images/4.jpg" alt="Coloured wooden pallets - we buy and collect pallets" width={800} height={600} className="h-full w-full object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600">Not sure what you need? We&apos;re happy to talk through your requirements.</p>
            <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">Contact us <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>

      {/* Section: How it works */}
      <section id="how-it-works" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32" aria-label="How it works">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <span className="inline-block rounded-full bg-orange-600/10 px-4 py-1.5 text-sm font-semibold text-orange-400 ring-1 ring-inset ring-orange-600/20">Simple process</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">How it works</h2>
            <p className="mt-4 text-lg text-slate-300 lg:text-xl">Get in touch—we&apos;ll take it from there.</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <p className="mb-12 text-center text-lg text-slate-300">We don&apos;t use an online checkout or fixed price list. Every job is different—whether you need pallets delivered or want to sell or dispose of wooden pallets and waste—so we prefer to talk it through and agree a price that works for both sides.</p>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="group relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur transition-all hover:border-orange-600/50 hover:shadow-xl hover:shadow-orange-600/10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-orange-600/20 p-3 text-orange-400 ring-1 ring-orange-600/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="mt-2 text-sm text-slate-400">Send us your requirements and we&apos;ll get back to you.</p>
              </div>
              <div className="group relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur transition-all hover:border-sky-600/50 hover:shadow-xl hover:shadow-sky-600/10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-sky-600/20 p-3 text-sky-400 ring-1 ring-sky-600/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                <p className="mt-2 text-sm text-slate-400">Quick and easy for photos, quantities and quick questions.</p>
              </div>
              <div className="group relative rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 backdrop-blur transition-all hover:border-green-600/50 hover:shadow-xl hover:shadow-green-600/10">
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-green-600/20 p-3 text-green-400 ring-1 ring-green-600/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
                <p className="mt-2 text-sm text-slate-400">Speak to us directly to discuss your needs.</p>
              </div>
            </div>
            <div className="mt-12 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/80 to-slate-800/40 p-8 text-center backdrop-blur">
              <p className="text-lg text-slate-300">Once you&apos;ve been in touch, we&apos;ll confirm what you need (supply, collection or both), agree a price and arrange a date that suits you.</p>
              <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">Go to contact <span aria-hidden>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Trusted by industry leaders */}
      <section id="clients-say" className="relative overflow-hidden py-16 sm:py-24" aria-label="Trusted by industry leaders">
        <div className="absolute inset-0">
          <Image src="/images/bg.jpeg" alt="Warehouse background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl lg:mb-16 lg:text-4xl">
            Trusted by industry leaders
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/biffa.svg" alt="Biffa" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/selco.svg" alt="Selco" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/amazon.svg" alt="Amazon" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/Tyco.svg" alt="Tyco" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/jordans.svg" alt="Jordans" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/arla.svg" alt="Arla" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/Visualy.svg" alt="Visualy" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/DHL.svg" alt="DHL" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/CocaCola.svg" alt="Coca Cola" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white/10 p-6 backdrop-blur transition-all hover:bg-white/20 hover:scale-105">
              <Image src="/images/companies/Costa.svg" alt="Costa" width={120} height={60} className="h-12 w-auto brightness-0 invert" />
            </div>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-24 lg:py-32" aria-label="FAQ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <span className="inline-block rounded-full bg-sky-600/10 px-4 py-1.5 text-sm font-semibold text-sky-600 ring-1 ring-inset ring-sky-600/20">FAQ</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-slate-600 lg:text-xl">Common questions about our pallet supply and collection services.</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <ul className="space-y-4">
              {faqs.map(({ q, a }, i) => (
                <li key={i} className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-orange-100 p-2 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 lg:text-xl">{q}</h3>
                      <p className="mt-3 text-slate-600 lg:text-lg">{a}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 text-center shadow-sm">
              <p className="text-lg text-slate-600">Can&apos;t find the answer you need?</p>
              <Link href="/#contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl">Contact us <span aria-hidden>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact */}
      <section id="contact" className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32" aria-label="Contact">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <span className="inline-block rounded-full bg-orange-600/10 px-4 py-1.5 text-sm font-semibold text-orange-400 ring-1 ring-inset ring-orange-600/20">Get in touch</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Contact us</h2>
            <p className="mt-4 text-lg text-slate-300 lg:text-xl">Get in touch for pallet supply, collection or wooden waste solutions.</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="group rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 text-center backdrop-blur transition-all hover:border-orange-600/50 hover:shadow-xl hover:shadow-orange-600/10">
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl bg-orange-600/20 p-3 text-orange-400 ring-1 ring-orange-600/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Email</h3>
                <a href="mailto:harleypalletsltd@gmail.com" className="text-sm text-slate-400 hover:text-orange-400">harleypalletsltd@gmail.com</a>
              </div>
              <div className="group rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 text-center backdrop-blur transition-all hover:border-sky-600/50 hover:shadow-xl hover:shadow-sky-600/10">
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl bg-sky-600/20 p-3 text-sky-400 ring-1 ring-sky-600/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">WhatsApp</h3>
                <p className="text-sm text-slate-400">Coming soon</p>
              </div>
              <div className="group rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 text-center backdrop-blur transition-all hover:border-green-600/50 hover:shadow-xl hover:shadow-green-600/10">
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl bg-green-600/20 p-3 text-green-400 ring-1 ring-green-600/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">Phone</h3>
                <p className="text-sm text-slate-400">New number coming soon</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-700/50 bg-slate-800/50 p-8 text-center backdrop-blur">
              <p className="text-slate-300">We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.</p>
              <p className="mt-2 text-sm text-slate-400">No business address listed yet—we&apos;ll update this when we have one.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-24" aria-label="Areas we cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">Areas we cover</h3>
            <p className="mt-4 text-lg text-slate-600">We serve businesses and individuals across the South East (and many more locations):</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(areasByCounty).map(([county, towns]) => (
              <div key={county} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
                <h4 className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">{county}</h4>
                <p className="text-sm leading-relaxed text-slate-600" role="list">{towns.slice(0, 25).join(", ")}{towns.length > 25 && ` and more ${county.toLowerCase()} locations.`}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600">If your town or village isn&apos;t listed, we may still be able to help—get in touch to ask.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
