# BM Design System

> A personal design language for bmurgic's projects — dark-mode native, amber-gold accented, Figtree-typeset. Inspired by Supabase.

---

## 1. Visual Theme & Atmosphere

The BM Design System is a dark-mode-native personal design language built for portfolios, web apps, dev tools, and creative experiments. It inherits the aesthetic philosophy of Supabase — deep black backgrounds (`#0f0f0f`, `#171717`) with a premium code-editor feel — but replaces the emerald green identity with **warm amber/gold** (`#f59e0b`, `#fbbf24`) and swaps Circular for **Figtree**, a free geometric sans-serif with nearly identical rounded terminals.

The result is a system that feels technical and refined, but warmer. Where Supabase reads "PostgreSQL-green open source," this system reads "precise, personal, crafted." Dank Mono replaces Source Code Pro for monospace contexts — its distinctive italic style adds character to code labels without disrupting the system's overall restraint.

Depth and hierarchy are created through **border color progressions** — never shadows. Amber appears sparingly: links, logo marks, and accent borders only. Everything else is built from a neutral dark gray scale.

**Key Characteristics:**
- Dark-mode primary: near-black backgrounds (`#0f0f0f`, `#171717`)
- Warm amber brand accent (`#f59e0b`, `#fbbf24`) — used sparingly as identity marker
- Figtree — geometric sans-serif with rounded terminals (free Circular alternative)
- Dank Mono — paid monospace with distinctive italics and ligatures
- HSL-based color token system with alpha channels for translucent layering
- Pill buttons (9999px) for primary CTAs, 6px radius for secondary
- Neutral gray scale from `#171717` through `#898989` to `#fafafa`
- Border system using dark grays (`#2e2e2e`, `#363636`, `#393939`)
- No shadows — depth through border contrast and transparency
- Radix color primitives (crimson, purple, violet, indigo, yellow, tomato, orange, slate)

---

## 2. Color Palette & Roles

### Brand
- **Amber** (`#f59e0b`): Primary brand color, logo mark, accent borders
- **Amber Link** (`#fbbf24`): Interactive amber for links and actions
- **Amber Border** (`rgba(245, 158, 11, 0.3)`): Subtle amber border accent

### Neutral Scale (Dark Mode)
- **Near Black** (`#0f0f0f`): Primary button background, deepest surface
- **Dark** (`#171717`): Page background, primary canvas
- **Dark Card** (`#1e1e1e`): Card background, elevated surface
- **Elevated** (`#252525`): Higher-elevation surface
- **Dark Border** (`#242424`): Horizontal rule, section dividers
- **Border Dark** (`#2e2e2e`): Card borders, tab borders
- **Mid Border** (`#363636`): Button borders, dividers
- **Border Light** (`#393939`): Secondary borders
- **Charcoal** (`#434343`): Tertiary borders, dark accents
- **Dark Gray** (`#4d4d4d`): Heavy secondary text
- **Mid Gray** (`#898989`): Muted text, link color
- **Light Gray** (`#b4b4b4`): Secondary link text
- **Near White** (`#efefef`): Light border, subtle surface
- **Off White** (`#fafafa`): Primary text, button text

### Radix Color Tokens (HSL-based)
- **Slate Scale**: `--colors-slate5` through `--colors-slateA12` — neutral progression
- **Purple**: `--colors-purple4`, `--colors-purple5`, `--colors-purpleA7` — accent spectrum
- **Violet**: `--colors-violet10` (`hsl(251, 63.2%, 63.2%)`) — vibrant accent
- **Crimson**: `--colors-crimson4`, `--colors-crimsonA9` — warm accent / alert
- **Indigo**: `--colors-indigoA2` — subtle blue wash
- **Yellow**: `--colors-yellowA7` — attention/warning
- **Tomato**: `--colors-tomatoA4` — error accent
- **Orange**: `--colors-orange6` — warm accent

### Surface & Overlay
- **Glass Dark** (`rgba(41, 41, 41, 0.84)`): Translucent dark overlay
- **Slate Alpha** (`hsla(210, 87.8%, 16.1%, 0.031)`): Ultra-subtle blue wash
- **Fixed Scale Alpha** (`hsla(200, 90.3%, 93.4%, 0.109)`): Light frost overlay

### Shadows
No shadows. Depth is created entirely through border contrast and surface color differences. Focus states use `rgba(0, 0, 0, 0.1) 0px 4px 12px` — minimal and functional only.

---

## 3. Typography Rules

### Font Families
- **Primary**: `Figtree`, with fallbacks: `DM Sans, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Monospace**: `Dank Mono`, with fallbacks: `JetBrains Mono, Fira Code, Menlo, monospace`

> **Note**: Dank Mono is a paid font. Ensure it is loaded via `@font-face` in each project. For projects where it is unavailable, JetBrains Mono is the fallback.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Figtree | 72px (4.50rem) | 400 | 1.00 (tight) | normal | Maximum density, zero waste |
| Section Heading | Figtree | 36px (2.25rem) | 400 | 1.25 (tight) | normal | Feature section titles |
| Card Title | Figtree | 24px (1.50rem) | 400 | 1.33 | -0.16px | Slight negative tracking |
| Sub-heading | Figtree | 18px (1.13rem) | 400 | 1.56 | normal | Secondary headings |
| Body | Figtree | 16px (1.00rem) | 400 | 1.50 | normal | Standard body text |
| Nav Link | Figtree | 14px (0.88rem) | 500 | 1.00–1.43 | normal | Navigation items |
| Button | Figtree | 14px (0.88rem) | 500 | 1.14 (tight) | normal | Button labels |
| Caption | Figtree | 14px (0.88rem) | 400–500 | 1.43 | normal | Metadata, tags |
| Small | Figtree | 12px (0.75rem) | 400 | 1.33 | normal | Fine print, footer links |
| Code Label | Dank Mono | 12px (0.75rem) | 400 | 1.33 | 1.2px | `text-transform: uppercase` |

### Principles
- **Weight restraint**: Nearly all text uses weight 400 (regular). Weight 500 appears only for navigation links and button labels. There is no bold (700) — hierarchy is created through size, not weight.
- **1.00 hero line-height**: The hero text is compressed to absolute zero leading. Dense, efficient, the defining typographic gesture.
- **Negative tracking on cards**: Card titles use -0.16px letter-spacing, a subtle tightening that differentiates them from body text.
- **Monospace as ritual**: Dank Mono in uppercase with 1.2px letter-spacing is the "developer console" voice — used sparingly for technical labels. Its distinctive italic style is reserved for inline code in prose.
- **Geometric personality**: Figtree's rounded terminals create warmth in what could otherwise be a cold, technical interface.

---

## 4. Component Stylings

### Buttons

**Primary Pill (Dark)**
- Background: `#0f0f0f`
- Text: `#fafafa`
- Padding: 8px 32px
- Radius: 9999px (full pill)
- Border: `1px solid #fafafa` (white border on dark)
- Focus shadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px`
- Use: Primary CTA

**Secondary Pill (Dark, Muted)**
- Background: `#0f0f0f`
- Text: `#fafafa`
- Padding: 8px 32px
- Radius: 9999px
- Border: `1px solid #2e2e2e` (dark border)
- Opacity: 0.8
- Use: Secondary CTA alongside primary

**Ghost Button**
- Background: transparent
- Text: `#fafafa`
- Padding: 8px
- Radius: 6px
- Border: `1px solid transparent`
- Use: Tertiary actions, icon buttons

### Cards & Containers
- Background: `#1e1e1e` (card) or `#171717` (flush)
- Border: `1px solid #2e2e2e` or `#363636`
- Radius: 8px–16px
- No visible shadows — borders define edges
- Internal padding: 16px–24px

### Tabs
- Border: `1px solid #2e2e2e`
- Radius: 9999px (pill tabs)
- Active: amber accent border or lighter surface
- Inactive: dark, muted

### Links
- **Amber**: `#fbbf24` — primary branded links
- **Primary Light**: `#fafafa` — standard links on dark
- **Secondary**: `#b4b4b4` — muted links
- **Muted**: `#898989` — tertiary links, footer

### Navigation
- Dark background matching page (`#171717`)
- Logo with amber identity mark
- Figtree 14px weight 500 for nav links
- Clean horizontal layout
- Amber-accent pill CTA for primary action
- Sticky header behavior

---

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 90px, 96px, 128px
- Notable large jumps: 48px → 90px → 96px → 128px for major section spacing

### Grid & Container
- Centered content with generous max-width
- Full-width dark sections with constrained inner content
- Feature grids: icon-based grids with consistent card sizes
- Footer: multi-column on dark background

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single column, stacked layout, condensed nav |
| Tablet | 640px–1024px | 2-column grids, partial layout |
| Desktop | > 1024px | Multi-column grids, full nav, expanded sections |

### Whitespace Philosophy
- **Dramatic section spacing**: 90px–128px between major sections. Each section is its own scene in the dark void.
- **Dense content blocks**: Within sections, spacing is tight (16px–24px), creating concentrated information clusters.
- **Border-defined space**: Thin borders on dark backgrounds — separation through line, not gap.

### Border Radius Scale
- Standard (6px): Ghost buttons, small elements
- Comfortable (8px): Cards, containers
- Medium (11px–12px): Mid-size panels
- Large (16px): Feature cards, major containers
- Pill (9999px): Primary buttons, tab indicators

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, border `#2e2e2e` | Default state, most surfaces |
| Subtle Border (Level 1) | Border `#363636` or `#393939` | Interactive elements, hover |
| Focus (Level 2) | `rgba(0, 0, 0, 0.1) 0px 4px 12px` | Focus states only |
| Amber Accent (Level 3) | Border `rgba(245, 158, 11, 0.3)` | Brand-highlighted elements |

**Shadow Philosophy**: No shadows. In dark-mode-native design, shadows are nearly invisible and serve no purpose. Depth is communicated through a border hierarchy — from `#242424` (barely visible) through `#2e2e2e` (standard) to `#393939` (prominent). The amber accent border (`rgba(245, 158, 11, 0.3)`) at 30% opacity is the "elevated" state — the brand color itself becomes the depth signal.

---

## 7. Do's and Don'ts

### Do
- Use near-black backgrounds (`#0f0f0f`, `#171717`) — depth comes from the gray border hierarchy
- Apply amber (`#f59e0b`, `#fbbf24`) sparingly — it's an identity marker, not a decoration
- Use Figtree at weight 400 for nearly everything — 500 only for buttons and nav
- Set hero text to 1.00 line-height — the zero-leading is the typographic signature
- Create depth through border color differences (`#242424` → `#2e2e2e` → `#363636`)
- Use pill shape (9999px) exclusively for primary CTAs and tabs
- Employ HSL-based colors with alpha for translucent layering effects
- Use Dank Mono uppercase labels for developer-context markers
- Use Dank Mono italics for inline code within prose

### Don't
- Don't add box-shadows — they're invisible on dark backgrounds and break the border-defined depth system
- Don't use bold (700) text weight — the system uses 400 and 500 only
- Don't apply amber to backgrounds or large surfaces — it's for borders, links, and small accents only
- Don't use warm colors (crimson, orange) as primary design elements — they exist as semantic tokens for states
- Don't increase hero line-height above 1.00 — the density is intentional
- Don't use large border radius (16px+) on buttons — pills (9999px) or standard (6px), nothing in between
- Don't lighten the background above `#1e1e1e` for primary surfaces — the darkness is structural
- Don't forget the translucent borders — `rgba` border colors are the layering mechanism

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single column, stacked features, condensed nav |
| Tablet | 640px–1024px | 2-column grids, partial nav, medium density |
| Desktop | > 1024px | Multi-column grids, full nav, expanded sections |

### Collapsing Strategy
- Hero: 72px → scales down proportionally (use `clamp(40px, 8vw, 72px)` when needed)
- Feature grids: 3-col → 2-col (tablet) → 1-col (mobile)
- Navigation: full → condensed (tablet) → hamburger (mobile)
- Section spacing: 90–128px → 64–80px (tablet) → 48–64px (mobile)
- Buttons: inline → full-width stacked (mobile)

---

## 9. Agent Prompt Guide

### Quick Color Reference
```
Background:   #171717 (page),  #1e1e1e (card),  #0f0f0f (button)
Text:         #fafafa (primary), #b4b4b4 (secondary), #898989 (muted)
Accent:       #f59e0b (brand),  #fbbf24 (links)
Borders:      #242424 (subtle), #2e2e2e (standard), #363636 (prominent)
Amber border: rgba(245,158,11,0.3)
```

### Example Component Prompts

**Hero Section**
> "Create a hero section on `#171717` background. Headline at 72px Figtree weight 400, line-height 1.00, `#fafafa` text. Sub-text at 16px Figtree weight 400, line-height 1.50, `#b4b4b4`. Pill CTA button (`#0f0f0f` bg, `#fafafa` text, 9999px radius, 8px 32px padding, `1px solid #fafafa` border)."

**Feature Card**
> "Design a feature card: `#1e1e1e` background, `1px solid #2e2e2e` border, 16px radius. Title at 24px Figtree weight 400, letter-spacing -0.16px. Body at 14px weight 400, `#898989` text."

**Navigation Bar**
> "Build navigation bar: `#171717` background. Figtree 14px weight 500 for links, `#fafafa` text. Logo with amber mark left-aligned. Amber-accent pill CTA right-aligned."

**Code Label**
> "Create a technical label: Dank Mono 12px, uppercase, letter-spacing 1.2px, `#898989` text."

**Amber Accent Element**
> "Design a highlighted card: `#1e1e1e` background, `1px solid rgba(245,158,11,0.3)` amber border, 8px radius. Amber link `#fbbf24` in body text."

### Iteration Guide
1. Start with `#171717` background — everything is dark-mode-native
2. Amber is the identity marker — links, logo marks, and accent borders only
3. Depth comes from borders (`#242424` → `#2e2e2e` → `#363636`), not shadows
4. Weight 400 is the default for everything — 500 only for interactive elements (nav, buttons)
5. Hero line-height of 1.00 is the signature typographic move — never increase it
6. Pill (9999px) for primary actions, 6px for secondary, 8–16px for cards
7. HSL with alpha channels creates the sophisticated translucent layering
8. Three breakpoints: mobile (<640px), tablet (640–1024px), desktop (>1024px)
9. Figtree is the primary humanizing element — its rounded geometry softens the technical interface
10. Dank Mono uppercase labels are the "developer console" voice — use sparingly
