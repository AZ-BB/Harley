import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { metaDescriptionAreas } from "./data/areas-covered";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harley Pallets LTD | Wooden Pallets Supply & Collection",
    template: "%s | Harley Pallets LTD",
  },
  description: `Family-run pallet supply and collection across ${metaDescriptionAreas}. We buy and collect wooden pallets and wooden waste, and supply a wide range of pallets. Contact us for a quote.`,
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
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
  },
  robots: "index, follow",
  alternates: { canonical: "https://harleypallets.co.uk" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
