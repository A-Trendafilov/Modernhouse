# Modernhouse Project

## Overview
Bulgarian construction company website (Модерн Хаус) — prefab houses, modular houses, containers, and joinery.
Deployed to GitHub Pages at: https://A-trendafilov.github.io/Modernhouse

## Tech Stack
- **React 19** + **TypeScript** (strict mode)
- **Vite 8** (build tool)
- **Tailwind CSS v4** with custom utilities (glass, glow-brass, bg-grid, text-gradient, font-display)
- **shadcn/ui** components (button, card, sheet, input, textarea, dialog, separator, badge, navigation-menu)
- **Framer Motion** for animations (page transitions, scroll reveals, hover effects)
- **Embla Carousel** for hero slider (replaced react-slick)
- **react-i18next** for translations (Bulgarian, ready for English)
- **Zod** + **react-hook-form** + **libphonenumber-js** for contact form validation
- **Sonner** for toast notifications
- **Lucide React** for icons

## Design System
- **Theme**: "Industrial Luxury" — dark blue backgrounds (#0a0e1a) with brass/gold accents (hsl 38 60% 56%)
- **Fonts**: Bebas Neue (display/headings via `font-display` class) + Plus Jakarta Sans (body)
- **Glass effects**: `glass` and `glass-strong` utility classes for glassmorphism
- **Glow effects**: `glow-brass` and `glow-brass-strong` for golden glow shadows
- **Background patterns**: `bg-grid`, `bg-grid-brass`, `bg-dots` utilities
- **Text gradient**: `text-gradient` for brass gradient text on headings
- **Grain overlay**: SVG noise texture on body::before
- **Logo**: Original PNG with `brightness-0 invert` CSS filter to make it white

## Project Structure
```
src/
├── components/
│   ├── ui/           — shadcn/ui components (auto-generated)
│   ├── icons/        — Custom SVG icons (FacebookIcon, InstagramIcon)
│   ├── layout/       — Header, Footer, Layout, Logo, NavItems, MapSection, Copyright, HorizontalDivider
│   ├── sections/     — HeroSection, HeroSlider, HeroSlide, HeroContent, CardSection, CardComponent,
│   │                   ImgGallery, ImageCard, ImageLightbox, FilterButtons, ContactForm, FormField,
│   │                   ContactInfo, InfoList, SocialIcons, ProjectCard, ServicePage
│   └── utils/        — Loading, LazyLoad, ErrorBoundary, AnimatedText, ScrollToTop, ScrollToTopButton
├── pages/
│   ├── Home, About, Contact, Gallery, Container, Project, ProjectDetail, NotFound
│   ├── House/        — SipHouse, MetalHouse, ModularHouse, TinyHouse
│   └── Joinery/      — PvcJoinery, АluminumJoinery (note: А is Cyrillic in filename)
├── data/             — navData, footerData, cardData, heroSectionImg, salesData, galleryImg, projectData
├── types/            — Shared TypeScript interfaces (single source of truth)
├── i18n/
│   ├── index.ts      — i18next config
│   └── locales/
│       └── bg.json   — All Bulgarian strings (~150+ keys)
├── lib/              — cn() utility (tailwind-merge + clsx)
└── index.css         — Tailwind config, custom utilities, theme variables
```

## Key Patterns
- **Data files store translation KEYS** (not raw strings) — components call `t(key)` when rendering
- **ServicePage** is a reusable component used by all service pages (SipHouse, MetalHouse, etc.)
- **Types are centralized** in `src/types/index.ts` — imported as `@/types`
- **Path alias** `@/` maps to `src/` (configured in tsconfig.json and vite.config.ts)
- **Page transitions** via Framer Motion AnimatePresence in Layout
- **Lazy loading** with React.lazy() for all pages + LazyLoad component for scroll reveals

## Translation System
- All UI strings in `src/i18n/locales/bg.json`
- Organized by section: nav, hero, cards, footer, gallery, contact, validation, pages, common
- To add English: create `en.json` with same keys, add to i18n/index.ts resources
- Class components (ErrorBoundary) use `i18next.t()` directly instead of hook

## Deployment
- GitHub Actions workflow at `.github/workflows/deploy.yml`
- Deploys on push to main via `actions/deploy-pages`
- Requires: GitHub repo Settings → Pages → Source → "GitHub Actions"
- `vite.config.ts` has `base: '/Modernhouse/'` for GitHub Pages subdirectory

## Current State / TODO
- All pages have content (service pages, about, projects with gallery)
- 6 projects with detail pages, specs, features, and image galleries
- Mobile responsive but may need further refinement on smaller screens
- Form submits to https://submit-form.com/HRKZbYxa
- No tests yet (consider Vitest + React Testing Library)
- TypeScript strict mode enabled but `tsc --noEmit` not in build script yet (add back when types are clean)
- Consider adding real photos for service page hero backgrounds
