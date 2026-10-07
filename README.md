# 🏗️ SL Roofing Landing Page — Developer & Reseller Guide

This project is a **Next.js landing page system** built to be reused and customized for multiple local service clients (like roofing, construction, etc.) — without rebuilding anything from scratch.

Everything is designed so you can change **one config file**, update some images, and launch a new client site instantly.

--- 

## 🧩 1. Project Overview
 
* **Framework:** Next.js + TypeScript + Tailwind CSS
* **CMS / Database:** None — all content is static and controlled by a single config file
* **Hosting:** Works on any platform (Vercel, Netlify, etc.)
* **Goal:** Build high-converting service pages that can be cloned for new clients with zero technical hassle.

---

## 🧱 2. Folder Structure (Simplified)

```
/app
  /components     → Shared UI components (hero, testimonials, etc.)
  /layout.tsx     → Uses global siteConfig for SEO + layout data
/data
  /SiteConfig.ts        → 🔥 The only file you change per client
/public
  /images         → Replace with the client's photos & logo
/lib
  /types.ts        → Type definitions for siteConfig
```

---

## ⚙️ 3. How It Works

Everything public (company name, images, contact info, reviews, etc.) comes from `/data/site.ts`.

Example:

```ts
export const siteConfig = {
  companyName: "Roofex LTD",
  phoneNumber: "+44 1234 567890",
  emailAddress: "info@roofexltd.co.uk",
  guaranteeYears: "10-Year Guarantee",
  jobsCompleted: "250+ Jobs Completed",
  heroImage: "/images/hero.jpg",
  faqData: [
    { q: "Are you insured?", a: "Yes, fully insured with a 10-year warranty." },
  ],
  seo: {
    title: "SL Roofing | Trusted Roofers in Cheshire, Manchester, North Wales and Liverpool.",
    description:
      "Professional roofing, repairs, and guttering services. Trusted locally with 10-year guarantees.",
    ogImage: "/images/og.jpg",
  },
};
```

That's it. No `.env` juggling for each client — just edit this file and redeploy.

---

## 🪄 4. How to Create a New Client Site

1. **Duplicate the repo** (or use the same project).
2. Copy `/data/site.ts` → rename it (e.g., `/data/john-roofing.ts`).
3. Update:

   * Texts (company name, reviews, etc.)
   * Images in `/public/images`
   * SEO fields under `seo`
4. Change the active site in `.env.local`:

   ```
   NEXT_PUBLIC_SITE=john-roofing
   ```
5. Redeploy.

→ Boom, a new branded landing page is live.

---

## 💡 5. SEO & Meta Tags (Automatic)

The `<Layout>` component automatically pulls:

* `title`
* `description`
* `og:image`
* `companyName`

from the `siteConfig.seo` section.

No need to touch `<head>` tags manually.
Change once in `/data/site.ts` — it updates site-wide.

---

## 🧠 6. Reusability Features

* **Single Source of Truth** → all branding + content in one file.
* **Type Safety** → if you forget a required field, TypeScript warns you.
* **Multi-Site Ready** → just drop in multiple configs and switch via env.
* **Static by Design** → fast, secure, and deploys anywhere.
* **Clean Layout System** → each component reads from `siteConfig`, not hardcoded text.

---

## 🖼️ 7. Assets & Branding

All images live in `/public/images`.
Replace them with the client's assets (logo, hero image, gallery, etc.).
Just keep the same filenames or update their paths in `siteConfig`.

---

## 🧾 8. Environment Variables

Only for global scripts (not client data).

Example `.env.local`:

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXX
NEXT_PUBLIC_SITE=sl-building
```

You almost never need to touch these except for analytics.

---

## 🧰 9. Tech Stack Summary

* **Next.js 14+ (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Lucide Icons**

Everything is production-ready, minimal, and easy to extend.

---

## 🚀 10. Deployment

This repo can be deployed directly to:

* [Vercel](https://vercel.com) — recommended (1-click Next.js setup)
* [Netlify](https://netlify.com)
* Or any static host that supports Next.js

---

## 🧭 11. Quick Reference

| Task                | File / Folder                   | Notes                            |
| ------------------- | ------------------------------- | -------------------------------- |
| Change company info | `/data/SiteConfig.ts`           | Update all fields                |
| Change images       | `/public/images`                | Replace or rename                |
| Change SEO          | `/data/SiteConfig.ts` → `seo`   | Title, description, og image     |
| Add FAQs            | `/data/SiteConfig.ts` → `faqData`     | Add new objects                  |
| Change colors       | `/data/SiteConfig.ts` → `brand`       | Update primary/secondary hex     |
| Add a new client    | Duplicate config file           | Set `NEXT_PUBLIC_SITE` in `.env` |

---

## 💬 12. Summary

This is not just one website — it's a **template system**.
Change one file, rebrand it, and deploy a new site in minutes.

You get:

* Consistent design
* Instant customization
* No database, no CMS, no headaches

---

## 🚀 Getting Started (Development)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
