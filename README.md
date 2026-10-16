<div align="center">

# 👟 SOLEVAULT — Sportswear & Sneaker Store

**A High-Performance, Editorial Streetwear & Sneaker E-Commerce Web Experience**

[![Live Demo](https://img.shields.io/badge/Demo-sportswear--sneaker--store.vercel.app-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://sportswear-sneaker-store.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.1-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<br />

### 🌐 [Explore Live Demo →](https://sportswear-sneaker-store.vercel.app/)

*Experience the responsive design, micro-animations, fast catalog filtering, interactive cart, and bilingual localization.*

</div>

---

## 📌 Overview

**SOLEVAULT** is a premier sneaker & sportswear e-commerce application engineered with modern web standards. Designed to evoke the feel of high-end streetwear boutiques and editorial lookbooks, it features instant client-side filtering, animated cart and wishlist flows, international size guides, localized Indonesian & English translations, dark mode aesthetics, and an effortless checkout simulation.

---

## 🚀 Key Highlights & Features

### 🛍️ Storefront & E-Commerce Flow
- **Interactive Hero Showcase**: Dynamic silhouette switcher with high-resolution imagery and micro-interactions.
- **Full Catalog & Smart Filtering (`/sneakers`)**: Instant debounced search, brand filter matrix (Nike, Jordan, Adidas, New Balance, ASICS, Puma, Converse), category tabs, shoe size picker, price range sliders, and dynamic sorting (Price, Newest, Popularity).
- **Interactive Cart Drawer (Slide-out Vault)**: Real-time quantity adjustment, item deletion, live subtotal/discounts calculation, and a dynamic **Free Express Shipping Progress Bar** ($200 threshold).
- **Working Promo Codes**: Test discounts instantly in checkout or cart drawer:
  - `VAULT10` — 10% Off Sitewide
  - `SOLE20` — 20% Off VIP Discount
  - `FIRSTDROP` — 15% Off Welcome Offer
- **Wishlist System (`/wishlist`)**: Persistent local storage bookmarking with one-click migration to bag.
- **Product Details (`/product/[slug]`)**: Multi-angle gallery zoom, scarcity stock indicators, size converter, and interactive accordion guides for materials and authentication.
- **Quick View Modal & International Size Guide**: Instant modal preview with US Men, US Women, UK, EU, and CM measurement charts.
- **Checkout Simulation (`/checkout`)**: Two-column layout with a **1-Click Demo Fill** button, shipping speed selector, and celebratory canvas confetti upon order completion.

### 🌐 Modern UX & Localization
- **Bilingual Internationalization (EN / ID)**: Full English and Bahasa Indonesia localization support switchable on the fly.
- **Global Theme & Locale Persistence**: Instant syncing across tabs and refreshes using Zustand store and local storage.
- **Command Menu & Search Overlay (`⌘K` / `Ctrl+K`)**: Fast keyboard-accessible global search with recent queries and trending tags.
- **Fluid Micro-Animations**: Built with Motion (Framer Motion) and custom CSS animations for responsive, tactile feedback.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) | Hybrid rendering, Turbopack, nested layouts, and SEO |
| **UI Library** | [React 19](https://react.dev/) | Modern concurrent primitives and component architecture |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type-safety across product catalogs, filters, and state |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation CSS engine with custom design tokens |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) | Lightweight, reactive state with local persistence |
| **Animations** | [Motion](https://motion.dev/) | Smooth page transitions, modal spring physics, and drawers |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible vector icons |
| **Effects** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) | Celebratory purchase feedback |
| **Deployment** | [Vercel](https://vercel.com/) | Edge-optimized zero-config global hosting |

---

## 📁 Repository Structure

```text
sportswear-sneaker-store/
├── public/                 # Static assets, SVG icons, and branding
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # Brand story and authentication manifesto
│   │   ├── brands/         # Brand history and showcase directory
│   │   ├── checkout/       # Interactive checkout simulation
│   │   ├── collections/    # Curated seasonal drops
│   │   ├── product/[slug]/ # Dynamic product detail views
│   │   ├── sneakers/       # Filterable catalog with sidebar
│   │   ├── wishlist/       # Saved items & quick-bag transfer
│   │   ├── globals.css     # Design system, theme tokens, & animations
│   │   ├── layout.tsx      # Root layout with providers & navbars
│   │   └── page.tsx        # Homepage editorial showcase
│   ├── components/
│   │   ├── catalog/        # CatalogFilters, ProductCard
│   │   ├── home/           # Hero, Drops, Trending, BrandStory, Newsletter
│   │   ├── layout/         # Navbar, CartDrawer, SearchOverlay, Footer
│   │   ├── product/        # ProductDetailView, image galleries
│   │   └── ui/             # Modals, ToastContainer, ImageWithFallback
│   ├── data/               # Product database, brands, collections mock data
│   ├── hooks/              # Custom React hooks (useTranslation, useIsMounted)
│   ├── lib/                # Multi-language translations dictionary
│   ├── store/              # Zustand global store (Cart, Wishlist, Theme, Locale)
│   └── types/              # TypeScript interfaces for catalog and orders
├── package.json
└── README.md
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js `18.18+` or `20+` (Recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/fallss/sportswear-sneaker-store.git
   cd sportswear-sneaker-store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm run start
```

---

## 🧪 Testing the Store

Want to explore the full e-commerce flow quickly?
1. Open the [Live Demo](https://sportswear-sneaker-store.vercel.app/).
2. Press `⌘K` or click the search bar to search for `"Jordan"`, `"Samba"`, or `"9060"`.
3. Filter by size or price on the `/sneakers` catalog.
4. Click any shoe to view the multi-angle gallery, test the **Size Guide Modal**, and add to bag.
5. In the cart drawer, apply promo code `SOLE20` or `VAULT10`.
6. Proceed to `/checkout` and click **"1-Click Demo Fill"** to test the order completion and confetti celebration!

---

## 📄 License & Disclaimer

- **License**: Released under the [MIT License](LICENSE).
- **Disclaimer**: *SOLEVAULT is a concept portfolio demonstration project. All shoe silhouettes, imagery, brand marks, and product data belong to their respective trademark owners and are presented strictly for portfolio and educational purposes.*

<div align="center">
  <sub>Crafted with passion by <a href="https://github.com/fallss">fallss</a></sub>
</div>
