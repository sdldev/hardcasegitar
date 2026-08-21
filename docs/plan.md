# Plan: Copy & Refactor webcloning to hardcasegitar

## Goal
Copy content dari `/home/indatech/Documents/2026/dev/clone/webcloning` ke project `hardcasegitar`, refactor agar sesuai standard Astro.js, pastikan semua CSS pakai token Tailwind (no hardcoded CSS).

---

## Phase 1: Project Setup (Current Session)

### Task 1.1: Verify astro.config.mjs
- ✅ mdx, sitemap, tailwindcss plugins present
- ✅ Font config atkinson already there
- Check: no wrong integrations

### Task 1.2: Create src structure
```bash
mkdir -p src/{pages,layouts,components,styles}
mkdir -p public/{images,seo}
```

### Task 1.3: Copy files from webcloning
Copy all from webcloning/src → hardcasegitar/src
Copy images → public/images
Copy SEO assets → public/seo

---

## Phase 2: Astro Standard Refactoring

### Refactor Priority (High → Low)

#### A. astro.config.mjs
**Goal**: Remove astro-icon, keep only needed integrations
- Delete line: `import icon from 'astro-icon';`
- Delete line: `integrations: [icon()],`
- Add back: mdx(), sitemap() if missing
- Keep: tailwindcss @tailwindcss/vite

#### B. styles/global.css  
**Goal**: Token definition only, no inline style overrides
- Keep: @tailwindcss import
- Keep: :root CSS variables for design tokens
- Remove: @layer base typography overrides (use Tailwind instead)
- Move ALL @keyframes to global.css (marquee, modelScaleIn)
- Clean up unused color aliases

#### C. layouts/Base.astro
**Goal**: Clean page shell, no inline styling
- Remove: `<body class="min-h-screen bg-dark-blue text-creme">`
- Just use: `<body>`
- Let global.css handle body styling via @layer base

#### D. components/*.astro (all components)

**Pattern replacement:**
```astro
<!-- BEFORE (wrong) -->
<div class="px-[var(--spacing-section-x)] py-[var(--space-4)] bg-bg-secondary">

<!-- AFTER (Astro standard) -->
<div class="px-8 py-4 bg-secondary">
```

**Specific fixes per component:**

##### SiteHeader.astro
- Replace bare `<script>` with `<script client:load>`
- Mobile menu toggle logic moves to client directive

##### ProductsSection.astro
- Move `@keyframes marquee` from inline `<style>` to global.css
- Use Tailwind utilities for spacing/colors

##### LocationSection.astro
- Replace `bg-bg-secondary` → `bg-secondary`
- Replace `border-border-color` → `border-border`
- Fix button classes (whatsapp needs proper token)

##### FaqSection.astro  
- Move `details > summary` styles to global.css :where() selector
- Remove inline `<style is:global>`

##### Icons.astro
- Ensure named export: `export default function Icon({...})`
- Interface matches usage

##### HeroSection.astro
- Gradient glow: move to inline style (ok), not class
- All spacing/utilities use Tailwind

##### ServiceSection.astro
- Replace hover animations from inline <style> to global.css
- Use semantic color tokens

##### AboutSection.astro
- Basic structure, verify color classes

##### Footer.astro
- Fix social link hover states
- WhatsApp color token verification

##### SiteButton.astro
- Variant logic correct
- Color tokens validated

---

## Phase 3: Verification

### Build Test
```bash
npm run build
```
✅ Must complete without errors

### Preview Test
```bash
npm run preview
```
✅ Visual check:
- Header fixed top, mobile responsive
- Hero section gradient glow works
- Services zigzag layout correct
- Products marquee animates
- FAQ accordions open/close
- Location map embeds correctly
- Footer links work

### Content Integrity Check
Compare webcloning vs hardcasegitar output:
- Same text? ✅
- Same images? ✅
- Same links? ✅
- Same colors? ✅
- Same spacing? ✅

---

## Execution Notes

- **Worktree mode**: Start new worktree branch for safety
- **Model tier**: sonnet for most tasks, opus for complex refactors
- **Agent routing**: 
  - executor: file copy + basic edits
  - code-reviewer: final diff review
  - verifier: build + visual verification

- **Failure guard**: Before commit, verify zero content changes
- **Success criteria**: Build passes, preview matches webcloning pixel-for-pixel

---

## Estimated Effort

- File copy: 5 min
- Config refactor: 10 min
- CSS refactoring: 45-60 min (largest effort)
- JS cleanup: 10 min  
- Verification: 15 min

Total: ~90 min = 1.5 hours
