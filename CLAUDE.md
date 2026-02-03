# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Manon Ruivo is a Next.js 15 web application for a wellness and Access Bars® coaching platform. It features a multilingual marketing site with a Sanity CMS-powered blog.

**Tech Stack:** Next.js 15.1.7, React 19, TypeScript, Sanity.io, Tailwind CSS, GSAP, next-intl

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Routing Structure
- **App Router** with dynamic locale segments: `src/app/[locale]/`
- **Supported locales:** English (en), Portuguese (pt), Spanish (es)
- **Sanity Studio** mounted at `/studio` route

### Key Directories
- `src/app/[locale]/` - Page routes with locale-based routing
- `src/components/` - React components (mostly client components with animations)
- `src/sanity/` - Sanity CMS configuration, schemas, and GROQ queries
- `src/i18n/` - Internationalization setup (next-intl)
- `messages/` - Translation JSON files (en.json, pt.json, es.json)

### Data Flow
- Server components fetch data via GROQ queries from `src/sanity/lib/client.ts`
- Translations accessed via `useTranslations('namespace')` hook
- Blog content is multilingual with locale-specific slugs in Sanity schema

### Sanity Schema Pattern
Multilingual content uses nested locale objects:
```typescript
slug: {
  pt: { current: "slug-pt" },
  en: { current: "slug-en" },
  es: { current: "slug-es" }
}
```

## Key Patterns

### Client Components
Most components use `'use client'` directive for interactivity. GSAP animations are heavily used via `useGSAP` hook with `useRef` for DOM targeting.

### Internationalization
- All user-facing text uses `useTranslations()` from next-intl
- Locale detection in `src/i18n/request.ts` parses browser Accept-Language headers
- URL structure: `/{locale}/path` (e.g., `/pt/blog`)

### Styling
- Primary: Tailwind CSS with custom colors (lilac, green, foregroundBlack, backgroundWhite)
- Secondary: Styled Components for dynamic styling
- Animations: GSAP for performance-critical effects

## Environment

Required environment variables are in `.env`:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

## Content Security Policy

CSP headers are configured in `next.config.ts` with Sanity API and WebSocket endpoints whitelisted.
