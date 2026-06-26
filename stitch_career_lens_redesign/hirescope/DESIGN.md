---
name: HireScope
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c0c6d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#8b91a0'
  outline-variant: '#414754'
  surface-tint: '#aac7ff'
  primary: '#aac7ff'
  on-primary: '#003064'
  primary-container: '#3e90ff'
  on-primary-container: '#002957'
  inverse-primary: '#005db8'
  secondary: '#c3c5d8'
  on-secondary: '#2c303e'
  secondary-container: '#454858'
  on-secondary-container: '#b5b7ca'
  tertiary: '#b9c3ff'
  on-tertiary: '#00228a'
  tertiary-container: '#6f88ff'
  on-tertiary-container: '#001d7a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00468d'
  secondary-fixed: '#dfe1f5'
  secondary-fixed-dim: '#c3c5d8'
  on-secondary-fixed: '#171b29'
  on-secondary-fixed-variant: '#424655'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#b9c3ff'
  on-tertiary-fixed: '#001257'
  on-tertiary-fixed-variant: '#0033c1'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  stat-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-bold:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: '0'
  label-caps:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 16px
  gutter: 16px
  max-width: 480px
---

## Brand & Style

The design system is engineered for a premium, data-driven recruitment intelligence platform. The brand personality is professional, authoritative, and high-tech, evoking a sense of analytical depth and clarity. The visual direction is a hybrid of **Minimalism** and **Glassmorphism**, designed to feel like a high-end lens scanning through complex data.

The user interface should feel like a "Career Lens"—precise, transparent, and sophisticated. Key visual characteristics include:
- **Optical Depth:** Use of frosted glass effects and layered surfaces to represent layers of data.
- **High-Tech Precision:** Sharp, geometric typography combined with vibrant, glowing accents against deep, immersive backgrounds.
- **Visual Hygiene:** A strict focus on high-contrast readability and uncompromised whitespace to prevent information overload.
- **Tactile Modernism:** Large touch targets with soft, rounded geometry that feels approachable yet professional.

## Colors

The color system utilizes a dual-mode semantic palette. The primary anchor is **Cosmos Deep Navy**, providing an immersive, high-tech foundation. 

- **Primary (Electric Tech-Blue):** Used for interactive elements and key highlights. In dark mode, it is optimized for "glow" effects.
- **Secondary (Deep Navy):** The structural core of the identity.
- **Neutral (Slate Hierarchy):** A range of slates (50 to 800) used to manage content hierarchy and surface layering.

**Color Mode Usage:**
- **Dark Mode (Default):** Deep Navy background with Rich Slate surfaces. This mode prioritizes reduced eye strain for data-heavy monitoring.
- **Light Mode:** Polar Slate-50 background with Pure White surfaces. This mode provides a clinical, editorial aesthetic for long-form reading and reporting.

## Typography

This design system uses a two-tier typography strategy to balance brand personality with functional legibility.

- **Outfit (Headings & Metrics):** Chosen for its geometric, tech-forward character. It is used for all display-level content and numeric data to convey modern sophistication.
- **Inter (Body & UI):** A utilitarian sans-serif used for all functional text, descriptions, and tabular data. It ensures high readability on small mobile screens.

**Mobile Scaling:**
Headlines larger than 32px must scale down on mobile devices (use `headline-lg-mobile`). Display headings use tighter letter spacing for impact, while small labels use expanded tracking to ensure clarity at small scales.

## Layout & Spacing

The layout is built on a strict **8px baseline grid** with a fluid grid model for mobile components.

- **Grid Model:** A 12-column flexbox grid is used for desktop/tablet, while mobile relies on safe margins and a single-column reflow for cards.
- **Mobile Margins:** Use a constant 16px (md) margin on the screen edges.
- **Spacing Rhythm:** Use 16px (md) for standard padding between components and 24px (lg) for section spacing.
- **Constraints:** Mobile layouts are optimized for a 375pt width but should stretch up to a 480px maximum container width before centering.

## Elevation & Depth

This design system conveys hierarchy through **Glassmorphism** and tonal layering rather than traditional heavy shadows.

- **Surface Tiering:** Surfaces in Dark Mode use `Rich Slate` (#0F172A) at various opacities (70-90%) over the `Deep Navy` background.
- **The Lens Effect:** Primary cards must utilize a `20px` backdrop blur. This creates a "frosted glass" look that allows background colors to bleed through subtly.
- **Hairline Borders:** Instead of shadows, use 1px borders with low opacity (40% for dark mode, 60% for light mode) to define element edges.
- **Ambient Glow:** For primary interactive elements (like active stat cards), use a very diffused, low-opacity color tint (`#0A84FF` at 10%) as an "outer glow" instead of a black shadow.

## Shapes

The shape language is modern and "friendly-tech," utilizing generous corner radii to offset the coldness of high-tech data.

- **Standard Radius:** 0.5rem (8px) for buttons and inputs.
- **Container Radius:** 1.5rem (24px) for primary cards and glass panels.
- **Pill Shapes:** Used exclusively for status tags and category chips to differentiate them from interactive buttons.

## Components

### Buttons
- **Primary:** 52px height, `rounded-lg`, bold text. High contrast with the background.
- **Interactions:** Use a `150ms` ease-out transition. Apply a `scale(0.98)` transform on active press to provide tactile feedback.

### Cards & Analytical Containers
- **Visuals:** Must feature the "Lens" effect (backdrop blur + translucent background + hairline border).
- **Padding:** 24px internal padding for large containers; 16px for smaller list items.

### Inputs & Forms
- **Style:** 48px height, `rounded-md`, 1.5px border.
- **Focus State:** Border color changes to `Vibrant Tech-Blue` with a subtle 4px glow.
- **Labels:** Use `label-caps` typography placed 6px above the input field.

### Status Indicators
- **Chips:** Small, pill-shaped tags with `label-caps` text. 
- **Colors:** Use functional success/error/warning colors with 15% opacity backgrounds and 100% opacity text for maximum legibility.

### Bottom Navigation
- **Visuals:** A floating glass bar with a 30px backdrop blur. 
- **Active State:** The active icon features a small 4px glowing dot indicator directly beneath it.