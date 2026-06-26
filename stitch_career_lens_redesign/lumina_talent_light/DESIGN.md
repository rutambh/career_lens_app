---
name: Lumina Talent Light
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464554'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#b10e6b'
  on-tertiary: '#ffffff'
  tertiary-container: '#d23284'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system embodies a "High-End Professional Modernism" aesthetic, specifically tailored for the talent acquisition and executive search industry. It prioritizes clarity, speed of cognition, and a sense of premium reliability.

The visual style is a hybrid of **Minimalism** and **Modern Corporate**, utilizing expansive white space to reduce cognitive load while maintaining energy through vibrant accents. The UI evokes a sense of organized intelligence—feeling like a high-performance tool that is both approachable and authoritative. Interactions are characterized by smooth transitions and a lightweight, airy feel, avoiding heavy shadows or dense textures in favor of clean lines and subtle tonal shifts.

## Colors

The palette is anchored by a crisp **#F8FAFC** background, providing a sterile yet sophisticated canvas. 

- **Primary (#6366F1):** A vibrant Indigo used for calls to action, active states, and brand highlights. It provides high energy against the light background.
- **Secondary (#0F172A):** A deep Navy reserved for primary headings and critical UI text, ensuring maximum legibility and professional gravity.
- **Neutral/Surface:** We use **#FFFFFF** for elevated cards to create a "lift" effect, and **#F1F5F9** for nested containers or inactive UI regions.
- **Accents:** A tertiary pink/violet is used sparingly for data visualization or status indicators to maintain the "Lumina" energy without overwhelming the professional tone.

## Typography

This design system utilizes **Outfit** across all levels to maintain a geometric, clean, and optimistic feel. 

Headlines use Semi-Bold and Bold weights in **#0F172A** to create a strong information hierarchy. Body text is set in **#1E293B** for long-form readability, while labels and captions utilize **#64748B** to denote secondary importance. Vertical rhythm is strictly maintained using a 4px baseline grid, ensuring that line heights are always multiples of 4 or 8.

## Layout & Spacing

The layout follows a **Fluid Grid** model with fixed maximum widths for desktop viewing to prevent line-length fatigue. 

- **Desktop (1440px+):** 12-column grid, 24px gutters, 40px side margins.
- **Tablet (768px - 1439px):** 8-column grid, 20px gutters, 24px side margins.
- **Mobile (Up to 767px):** 4-column grid, 16px gutters, 16px side margins.

Internal component spacing relies on a strict 8px scaling system (8, 16, 24, 32, 48) to ensure visual harmony. Padding within cards should default to `md` (24px) to emphasize the airy, premium feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Soft Ambient Shadows** rather than harsh borders.

- **Level 0 (Background):** #F8FAFC. The base layer.
- **Level 1 (Subtle Inset):** #F1F5F9. Used for search bars or background sections. No shadow.
- **Level 2 (Standard Card):** #FFFFFF. Used for primary content. Shadow: `0 4px 12px rgba(15, 23, 42, 0.05)`.
- **Level 3 (Interactive/Hover):** #FFFFFF. Shadow: `0 12px 24px rgba(15, 23, 42, 0.08)`.
- **Overlays:** Full background blurs (12px) are used behind modals to maintain focus while preserving the light, ethereal quality of the system.

## Shapes

The design system utilizes a **Full Pill-Shape** (ROUND_FULL) philosophy. This softness counteracts the clinical nature of the light slate colors, making the talent platform feel inviting and human-centric.

- **Buttons & Inputs:** Always fully rounded (height/2) or `rounded-xl` (24px+).
- **Cards:** Use `rounded-xl` (24px) for a soft, containerized look.
- **Selection Indicators:** Use pill shapes for active states in navigation or tabs.

## Components

### Buttons
- **Primary:** Solid Primary Indigo (#6366F1) with White text. Fully rounded.
- **Secondary:** Surface Muted (#F1F5F9) with Secondary Navy text. No border.
- **Ghost:** Transparent background with Primary Indigo text.

### Input Fields
- **Default State:** Background #FFFFFF, border 1px solid #E2E8F0, fully rounded.
- **Focus State:** Border 2px solid #6366F1, subtle outer glow.
- **Typography:** Placeholder text in #94A3B8.

### Cards
- **Structure:** White background, 24px padding, 24px border radius.
- **Border:** A very subtle 1px border in #F1F5F9 is used to define edges on white backgrounds where shadows are insufficient.

### Chips & Badges
- **Style:** Small, fully rounded capsules.
- **Colors:** Light tints of the category color (e.g., Light Purple background with Dark Purple text) to ensure legibility without high-contrast jarring.

### Lists
- Dividers should be 1px wide using #F1F5F9. Interactive list items should use a #F8FAFC hover state with a 4px left-accent bar in Primary Indigo.