# Analysis: webcloning → hardcasegitar Migration

## Current State (webcloning)

### Problems Found

1. **astro.config.mjs uses wrong integrations**
   - Uses `icon()` from `astro-icon` instead of inlined SVG components
   - Missing `mdx()`, `sitemap` integrations that hardcasegitar has

2. **global.css issues**
   - Uses CSS custom properties directly (`var(--space-4)`) in class strings
   - Astro best practice: use Tailwind utility classes, only define tokens
   - Inline `<style>` blocks override inline styles (marquee animation in ProductsSection)

3. **Base.astro wrong attributes**
   ```astro
   <body class="min-h-screen bg-dark-blue text-creme">
   ```
   - Hardcoded wrong class names (`bg-dark-blue text-creme`)
   - Should rely on global.css for body styling

4. **SiteHeader.astro script inline**
   - JavaScript inline instead of using Astro client directive
   - Best practice: `<script client:load>` or isolated file

5. **Icons.astro interface mismatch**
   - Component name says `Icon` but file exports as default unnamed
   - SiteButton.astro imports incorrectly

6. **Inconsistent token usage**
   - Some sections use: `class="bg-bg-secondary"` (wrong)
   - Should be: `class="bg-secondary"` (using semantic alias only)
   - Or better: direct Tailwind utilities

## What Must Be Preserved

Content (FIXED — no changes to text):

### HeroSection
- Title: "Hardcase Guitar Indonesia"
- Subtitle: "Produsen custom hardcase gitar & bass Indonesia dengan kualitas premium"
- Button: "Lihat Katalog Kami"

### AboutSection  
- Title: "Instrumen Anda, Perlindungan Terbaik"
- Text: "Kami merancang dan membuat custom hardcase gitar & bass yang menjaga instrumen Anda tetap aman..."
- Image: Junaidi-Karo-Karo.webp

### ServiceSection (4 services)
1. Custom Presisi — "Setiap hardcase dibuat mengikuti dimensi gitar Anda..."
2. Material Kuat — "Rangka kokoh dengan lapisan luar tahan benturan..."
3. Perlengkapan Lengkap — "Interior empuk yang memeluk instrumen..."
4. Nyaman Dibawa — "Ringan, seimbang, ergonomis..."

### ProductsSection
- Title: "Produk Kami"
- Link: "Lihat Semua Produk →"
- 6 product categories (Elektrik, Akustik, Grand, Bass, Semi Hollow, Custom)
- Marquee animation preserved

### LocationSection
- Title: "Lokasi Workshop"
- Address: Jl. Semanan Pintu Air No.37, RT.7/RW.12, Duri Kosambi, Cengkareng, Jakarta Barat 11750
- Phone: 0877-4851-4337
- Google Maps embed preserved

### FaqSection (6 FAQs)
1. Pengerjaan: 7-14 hari kerja
2. Pre-order accepted
3. Dimension measurement guide
4. Color/material options
5. Warranty: 6 bulan pabrik, 3 bulan wearable parts
6. Custom requests open (lock, wheels, strap)
- WhatsApp CTA

### Footer
- Company info + social links
- Quick links
- Contact info
- Copyright footer

## Standard Astro.js Requirements

### Required Structure

```
src/
  pages/
    index.astro          ← main entry point
    products.astro       ← existing
    products/[slug].astro ← dynamic route
  layouts/
    Base.astro           ← page shell with meta tags
  components/            ← .astro files with PascalCase
    HeroSection.astro
    AboutSection.astro
    ...
  styles/
    global.css          ← Tailwind @import + tokens only
public/
  images/              ← assets
  seo/                 ← favicons, OG
```

### Token-to-Class Mapping Strategy

Current: `padding: var(--space-8)` ❌
Correct: `p-8` ✅ (or `px-[calc(1rem*8)]` if custom scale needed)

Better approach for this project:
1. Define design tokens in `@theme inline { }` block (CSS variables)
2. Use Tailwind arbitrary values OR extend theme in tailwind.config (if needed)
3. Replace ALL `var(--xxx)` in class strings with proper utilities

Example transformation:
```astro
<!-- BEFORE -->
<div class="p-[var(--spacing-card-pad)] bg-bg-secondary">

<!-- AFTER (two options) -->
<!-- Option A: Direct utilities -->
<div class="p-6 bg-gray-900">

<!-- Option B: Using CSS variables ONLY inside style="" not class="" -->
<div class="p-6 bg-secondary">
<style>
  :root { --secondary: #1a1b22; }
</style>
```

### Astro Best Practices Applied

1. **No inline `<style>` for animations** — move to global.css
2. **Client JS via directives**: `<script client:load>` instead of bare `<script>`
3. **Type-safe frontmatter interfaces** for all props
4. **Semantic HTML**: `<section>`, `<address>`, `<details>` used correctly
5. **Lazy loading** images where appropriate
6. **Accessibility**: aria-labels, semantic elements, contrast ratios

## Implementation Plan

Phase 1: Setup astro.config.mjs ✅
- Keep mdx, sitemap, tailwindcss plugins
- Remove astro-icon integration
- Keep font configuration

Phase 2: Refactor global.css ✅
- Convert all `var(--xxx)` usage patterns to Tailwind utilities
- Move ALL animations to global.css @keyframes
- Clean up unused color aliases

Phase 3: Fix components one-by-one ✅
- Base.astro: remove hardcoded body classes
- SiteHeader.astro: convert JS to `<script client:load>`
- All sections: replace `class="...var(--...)..."` with utilities
- Icons.astro: ensure correct named export

Phase 4: Verify build + preview ✅
- `npm run build` passes
- `npm run preview` shows content unchanged
- All pages render correctly

---

## Critical Notes

⚠️ CONTENT IS FIXED — NO TEXT CHANGES PERMITTED
✅ Only structural/CSS refactoring allowed
✅ Images, URLs, links must stay identical
✅ Animations preserved (marquee, modelScaleIn)
