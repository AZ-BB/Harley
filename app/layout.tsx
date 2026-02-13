import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { metaDescriptionAreas } from "./data/areas-covered";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.harleypalletsltd.co.uk";
const defaultTitle = "Harley Pallets LTD | Wooden Pallets Supply & Collection";
const defaultDescription = `Family-run pallet supply and collection across ${metaDescriptionAreas}. We buy and collect wooden pallets and wooden waste, and supply a wide range of pallets. Contact us for a quote.`;
const ogImage = `${siteUrl}/images/1.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Harley Pallets LTD",
  },
  description: defaultDescription,
  keywords: [
    "wooden pallets",
    "pallet supply",
    "pallet collection",
    "pallet recycling",
    "pallets Bedfordshire",
    "pallets Hertfordshire",
    "pallets Buckinghamshire",
    "pallets Oxfordshire",
    "pallets London",
    "Harley Pallets",
    "buy pallets",
    "sell pallets",
    "pallet collection UK",
    "wooden waste collection",
  ],
  authors: [{ name: "Harley Pallets LTD", url: siteUrl }],
  creator: "Harley Pallets LTD",
  publisher: "Harley Pallets LTD",
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Harley Pallets LTD",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Harley Pallets LTD - Wooden pallets supply and collection across the South East",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `${siteUrl}/`,
  },
  verification: {
    google: "2e3fd2454dd1dc63",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col`}>
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
