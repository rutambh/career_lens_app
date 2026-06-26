---
name: Lumina Talent
colors:
  surface: '#121127'
  surface-dim: '#121127'
  surface-bright: '#38374f'
  surface-container-lowest: '#0c0b21'
  surface-container-low: '#1a1930'
  surface-container: '#1e1d34'
  surface-container-high: '#29283f'
  surface-container-highest: '#33324a'
  on-surface: '#e3dffe'
  on-surface-variant: '#c9c4d8'
  inverse-surface: '#e3dffe'
  inverse-on-surface: '#2f2e46'
  outline: '#938ea1'
  outline-variant: '#484555'
  surface-tint: '#cabeff'
  primary: '#cabeff'
  on-primary: '#31009a'
  primary-container: '#937dff'
  on-primary-container: '#2a0088'
  inverse-primary: '#603de2'
  secondary: '#a6e6ff'
  on-secondary: '#003543'
  secondary-container: '#14d1ff'
  on-secondary-container: '#00566b'
  tertiary: '#ffb1c6'
  on-tertiary: '#650031'
  tertiary-container: '#f65592'
  on-tertiary-container: '#59002a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cabeff'
  on-primary-fixed: '#1c0062'
  on-primary-fixed-variant: '#4717ca'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#4cd6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#ffb1c6'
  on-tertiary-fixed: '#3f001c'
  on-tertiary-fixed-variant: '#8e0048'
  background: '#121127'
  on-background: '#e3dffe'
  surface-variant: '#33324a'
  surface-deep: '#080716'
  surface-glass: rgba(255, 255, 255, 0.05)
  neon-glow: '#B388FF'
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
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  card-padding: 20px
---

## Brand & Style

This design system is built for a premium, high-end job-seeking experience. It targets creative professionals and tech-savvy talent who value aesthetics as much as functionality. The style is **Modern / Glassmorphic**, blending a sophisticated dark-mode environment with vibrant, neon-inflected highlights. 

The emotional response should be one of "effortless discovery"—where the UI feels like a high-end physical object made of dark glass and light. By utilizing deep atmospheric purples and blues, the design moves away from the flat, sterile nature of traditional enterprise tools and toward an immersive, tactile experience.

## Colors

The palette is anchored by a deep midnight navy (`#0D0C22`) which serves as the primary canvas. The primary brand color is a vibrant electric purple, supported by a secondary cyan that provides a "neon" contrast for interactive elements.

- **Primary (`#7C5DFF`):** Used for primary actions, active states, and brand-heavy components.
- **Secondary (`#00D1FF`):** Used for accents, success indicators, and to draw attention to specific job tags.
- **Tertiary (`#EA4C89`):** A nod to the Dribbble-inspired pink, used sparingly for "hot" job labels or high-priority notifications.
- **Neutral:** The background relies on layered shades of deep navy to create a sense of infinite depth.

## Typography

The typography system uses a dual-font approach to balance personality with extreme readability. **Outfit** is used for headings to provide a geometric, modern flair with high-end character. **Lexend** is utilized for body text and labels; its hyper-legible, rounded design ensures that even long job descriptions are easy to digest on dark backgrounds.

Headlines should utilize tighter letter-spacing to feel more "designed" and editorial. Body text maintains standard tracking to preserve readability in low-light environments.

## Layout & Spacing

This design system employs a **Fluid Grid** philosophy with a generous 8px base rhythm. Layouts should feel spacious and breathable, avoiding the cramped feeling of traditional job boards.

- **Mobile:** 4-column grid with 24px side margins. Elements are primarily stacked.
- **Tablet:** 8-column grid with 32px side margins. Sidebar navigation may be introduced.
- **Desktop:** 12-column grid with a max-width container of 1440px. 

Spacing between cards should be consistent at 16px or 24px to allow the "glow" of elevation to be visible between elements.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Glassmorphism**. Rather than traditional black shadows, this system uses ambient glows and semi-transparent fills.

1.  **Level 0 (Background):** Deepest color (`#080716`).
2.  **Level 1 (Default Surface):** Slightly lighter navy with a 1px low-opacity border (White 10%) to define edges.
3.  **Level 2 (Cards/Modals):** Glassmorphic surfaces using `backdrop-filter: blur(20px)` and a subtle linear gradient from top-left (White 8%) to bottom-right (White 2%).
4.  **Interactive Glow:** Primary buttons and active cards should emit a soft, diffused outer glow using the primary purple (`rgba(124, 93, 255, 0.3)`) with a 30px blur radius.

## Shapes

The shape language is overtly **Pill-shaped** and friendly. Large corner radii are mandatory to maintain the "high-end app" feel. 

- **Primary Containers:** 24px to 32px radius.
- **Buttons & Inputs:** Fully rounded (pill) or 16px minimum.
- **Images/Avatars:** Circular or 12px radius.

Borders should be kept thin (1px) and used only to separate glass layers from the background, never as high-contrast separators.

## Components

### Buttons
Primary buttons use a vibrant gradient (Primary to Secondary) with white text. Secondary buttons should be glassmorphic with a 1px border. Hover states should increase the "glow" elevation rather than changing the background color significantly.

### Cards
Job cards are the centerpiece. They must feature a subtle glass effect, large corner radii (24px), and internal padding of at least 20px. Use a small, high-contrast company logo as the anchor point.

### Chips & Tags
Used for job categories (e.g., "Full-time", "Remote"). These should have a low-opacity background of the primary color with the text in the full-saturation primary color.

### Input Fields
Inputs are dark-filled with a subtle border. On focus, the border should glow with the Secondary Cyan color and the text should remain white for maximum contrast.

### List Items
List items should feature "hover-lift" animations, where the item slightly scales (1.02x) and the glass blur intensifies, creating a tactile response.

### Progress Indicators
For application tracking, use "Neon-line" indicators—thin, 4px tall bars with a gradient fill and an outer glow.