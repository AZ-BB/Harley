/**
 * JSON-LD structured data for SEO (LocalBusiness + FAQPage).
 * Helps search engines understand the business and show rich results.
 */
const siteUrl = "https://www.harleypalletsltd.co.uk";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Harley Pallets LTD",
  description:
    "Family-run pallet supply and collection across Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We buy and collect wooden pallets and wooden waste, and supply a wide range of pallets.",
  url: siteUrl,
  image: `${siteUrl}/images/harley_pallets_logo_high_quality.png`,
  areaServed: [
    { "@type": "State", name: "Bedfordshire" },
    { "@type": "State", name: "Hertfordshire" },
    { "@type": "State", name: "Buckinghamshire" },
    { "@type": "State", name: "Oxfordshire" },
    { "@type": "City", name: "London" },
  ],
  serviceType: [
    "Pallet supply",
    "Pallet collection",
    "Wooden pallet recycling",
    "Wooden waste collection",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+44-1296-252347",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "harleypalletsltd@gmail.com",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      url: "https://wa.me/447301584674",
      contactType: "customer service",
      availableLanguage: "English",
    },
  ],
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you supply pallets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply a wide range of pallets to businesses and individuals. If you can name it, we can supply it—from standard wooden pallets to specialist sizes and types. Contact us with your requirements and we'll do our best to source and deliver.",
      },
    },
    {
      "@type": "Question",
      name: "Do you buy or collect wooden pallets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer collection and purchase of your wooden pallets and wooden waste at an arranged surcharge. Get in touch with details of what you have (quantity, condition, type) and we can discuss a price and arrange collection.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London. We serve many towns and villages across these areas. If you're not sure whether we cover your location, just ask.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us by email, WhatsApp or phone with your requirements—whether you need pallets supplied or want to sell/dispose of pallets or wooden waste—and we'll discuss your needs and agree a price.",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
