@AGENTS.md

# Park Avenue — Men's Clothing Website

## Project Overview
Frontend mockup for Park Avenue, a men's clothing boutique. Built to showcase the site to the shop owner before committing to a full backend build.

**Current phase:** Frontend mockup only — all data is static, no backend.

## Stack
- **Next.js 16** (App Router)
- **Tailwind CSS v4** — colors defined via `@theme` in `app/globals.css`, NOT a config file
- **TypeScript**
- **Mock data** in `lib/data.ts` — products, blog posts, lookbook entries

## Brand
- Shop name: **Park Avenue**
- Primary: `#8B5E30` (walnut) → Tailwind class: `bg-walnut`, `text-walnut`
- Light accent: `#C4893D` (golden oak) → `bg-walnut-light`
- Dark accent: `#5C3317` (dark walnut) → `bg-walnut-dark`
- Darkest: `#1A0E06` → `bg-walnut-darker`
- Background: `#FAF7F2` (cream) → `bg-cream`
- Fonts: Playfair Display (headings, `font-serif`), Inter (body, `font-sans`)

## Structure
```
app/                    ← Next.js App Router pages
  layout.tsx            ← Root layout (Navbar + Footer)
  page.tsx              ← Homepage
  shop/page.tsx         ← Product grid
  shop/[slug]/page.tsx  ← Product detail
  lookbook/page.tsx     ← Lookbook grid
  blog/page.tsx         ← Blog listing
  blog/[slug]/page.tsx  ← Blog post
components/
  layout/Navbar.tsx
  layout/Footer.tsx
  shop/ProductCard.tsx
  ui/                   ← Shared UI primitives
lib/
  data.ts               ← All mock data (products, blog, lookbook)
```

## Dev Commands
```bash
cd site
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
```

## Phase 2 (deferred)
When the owner approves the mockup, Phase 2 will add:
- Prisma + PostgreSQL
- Stripe checkout
- NextAuth.js customer accounts
- Cloudinary image hosting
- Admin dashboard
Do NOT scaffold any of this until the user says Phase 2 is starting.
