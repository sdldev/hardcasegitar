# Astro.js & Tailwind CSS Best Practices - Hardcase Guitar Indonesia

## 1. CSS Architecture

### ✅ Token Strategy (Tailwind v4 + CSS Variables)

**Design Tokens (global.css)**
```css
/* Define once in :root */
--bg-primary, --bg-secondary
--text-primary, --text-secondary, --text-muted
--primary, --secondary
--space-*, --radius-*

/* Use @theme inline for typography scale */
@theme inline {
  --text-heading-1, --text-body-md, etc...
}
```

**Usage Pattern**
- ❌ **DON'T**: `class="px-[var(--spacing-section-x)]"`
- ✅ **DO**: `class="px-8"` or arbitrary value `class="px-[clamp(1.5rem,4vw,3rem)]"`
- ✅ **DO**: Semantic classes `.container`, `.section` defined in `@layer components`

### Color Classes

Use semantic aliases from utilities layer:
- `bg-primary`, `bg-secondary`
- `text-primary`, `text-foreground`, `text-muted`

---

## 2. Component Structure

### Frontmatter Rules

```astro
--- // Single-line comment describing section
interface Props {
  propName?: type;
}

const { 
  propName = defaultValue,
  anotherProp 
} = Astro.props;
---
```

**Rules:**
1. Remove all unused props (don't declare `?` if never used)
2. No inline data inside components — use interfaces
3. Keep frontmatter minimal (<20 lines max)

### Script Directives

**Pattern: Client-side JS**
```astro
<!-- ✅ CORRECT -->
<script client:load>
  // Initialization code
</script>
```

**Rules:**
- Always use `client:load` for DOM manipulation
- Never bare `<script>` tags
- Wrap logic in IIFE if >3 lines

---

## 3. Accessibility Checklist

Each interactive element needs:
- [ ] `aria-label` for icon-only buttons
- [ ] `aria-hidden="true"` for decorative icons
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Focus states visible (Tailwind `focus:*`)
- [ ] Contrast ratio ≥ 4.5:1 (WCAG AA)

---

## 4. Typography Hierarchy

Use semantic HTML, don't override with inline styles:

```astro
<h1 class="text-heading-1 font-black tracking-tight">Title</h1>
<h2 class="text-heading-2 font-semibold">Section</h2>
<h3 class="text-heading-3">Subsection</h3>
<p class="text-body-md leading-relaxed">Body text</p>
<span class="text-body-sm">Caption</span>
```

**Spacing rules:**
- Heading margins: `mb-[var(--space-6)]`, `mb-[var(--space-8)]`
- Paragraph spacing: `mb-[var(--space-4)]`, `mb-[var(--space-6)]`
- Section padding: `py-[var(--spacing-section-y)]`

---

## 5. Animations

**In global.css only**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-marquee { animation: marquee 30s linear infinite; }

@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
```

**Component usage:**
```astro
<div class="animate-marquee">Content</div>
```

**Never inline `<style>` blocks in components.**

---

## 6. Icons Pattern

**Centralized component (Icons.astro)**
```astro
<Icon name="whatsapp" size={32} class="w-5 h-5" />
```

**Available icons:**
- Social: instagram, facebook, youtube, whatsapp
- UI: phone, location, message-circle, navigate, chevron-down

**No inline SVG paths outside Icons component.**

---

## 7. Images

**Optimization attributes:**
```astro
<img
  src="/images/product.webp"
  alt="Descriptive alt text"
  class="object-cover rounded-xl"
  loading="lazy"
  decoding="async"
/>
```

**Responsive images:**
```astro
<picture>
  <source srcset="/images/image.webp" type="image/webp">
  <img src="/images/image.jpg" alt="..." />
</picture>
```

---

## 8. Responsive Patterns

**Mobile-first approach:**

```astro
<!-- Default: mobile -->
<div class="flex flex-col gap-4">

<!-- Tablet+ -->
<div class="hidden md:flex md:flex-row md:gap-8">

<!-- Desktop -->
<div class="lg:grid lg:grid-cols-2 lg:gap-12">
```

**Spacing scale:**
- Mobile: Use smaller spacing (`gap-2`, `p-4`)
- Tablet+: Increase (`md:gap-6`, `md:p-6`)
- Desktop: Max spacing (`lg:gap-12`, `lg:p-8`)

---

## 9. Navigation

**Fixed header pattern:**
```astro
<header class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border-color">
  <!-- Content -->
</header>
```

**Add scroll offset for page content:**
```astro
<body class="pt-[72px]"> {/* Header height + buffer */}
```

---

## 10. SEO & Meta

**Page-level meta:**
```astro
<Base title="Page Title | Site Name" description="Description">
  <head>
    <link rel="canonical" href={Astro.url.href} />
  </head>
</Base>
```

**Open Graph defaults in Base layout:**
- og:title, og:description, og:image
- twitter:card

---

## 11. Code Organization

```
src/
  layouts/
    Base.astro          ← Page shell with meta tags
  pages/
    index.astro         ← Homepage
    products.astro      ← Products listing
    products/[slug].astro ← Dynamic product page
  components/
    *.astro             ← Reusable components (PascalCase)
    Icons.astro         ← Centralized icon system
  styles/
    global.css          ← Tailwind + design tokens
  assets/
    fonts/              ← Custom webfonts
    images/             ← Static images
public/
  seo/                  ← Favicons, OG images
  images/               ← Copy-on-deploy assets
```

---

## 12. Common Anti-Patterns

❌ **Inline styling:**
```astro
<div style="padding: 1rem;">Bad</div>
```

✅ **Use Tailwind or token classes:**
```astro
<div class="p-4">Good</div>
```

❌ **Duplicate SVG paths:**
```astro
<!-- In multiple files -->
<svg viewBox="0 0 24 24"><path d="..." /></svg>
```

✅ **Use Icon component:**
```astro
<Icon name="phone" />
```

❌ **Inline animations:**
```astro
<style>@keyframes move {}</style>
```

✅ **Move to global.css:**
```css
/* global.css */
@keyframes move {}
.animate-move { animation: move 30s linear infinite; }
```

---

## Quick Reference

| Pattern | Class Example | Notes |
|---------|---------------|-------|
| Container | `.container` | Defined in global.css |
| Section | `.section` | Padding y: 6rem |
| Button primary | `bg-primary text-white` | Rounded-full |
| Link hover | `.underline-link:hover` | No default underline |
| Icon size | `size={32} class="w-5 h-5"` | Use consistent sizes |
| Image lazy | `loading="lazy"` | All non-critical images |
| Gradient | Tailwind `from-orange-500 to-red-500` | Avoid inline style |
