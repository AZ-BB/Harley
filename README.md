# Harley Pallets LTD – Website

A Next.js website for Harley Pallets LTD: pallet supply and collection across Bedfordshire, Hertfordshire, Buckinghamshire, Oxfordshire and London.

## Features

- **SEO-friendly**: Metadata, sitemap, semantic HTML, areas-covered content for local search
- **Pages**: Home, About, Products, How it works, FAQ, Reviews, Contact
- **No pricing or checkout**: Contact-only (email, WhatsApp, phone placeholders)
- **Assets**: Logo and pallet images in `public/images/` (from `Harley/` folder)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Customisation

- **Contact details**: Update email, WhatsApp and phone in `app/contact/page.tsx` when you have your new number.
- **Canonical URL**: Change `alternates.canonical` in `app/layout.tsx` and `baseUrl` in `app/sitemap.ts` to your live domain (e.g. `https://harleypallets.co.uk`).
- **Reviews**: Replace the placeholder content in `app/reviews/page.tsx` when you have customer reviews.
- **Areas covered**: Edit `app/data/areas-covered.ts` to add or change towns/villages for SEO.

## Tech

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
