---
name: Luminous Tech-Forward Mobile
colors:
  surface: '#0a141d'
  surface-dim: '#0a141d'
  surface-bright: '#303a44'
  surface-container-lowest: '#050f17'
  surface-container-low: '#121d25'
  surface-container: '#162129'
  surface-container-high: '#212b34'
  surface-container-highest: '#2c363f'
  on-surface: '#d9e4f0'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d9e4f0'
  inverse-on-surface: '#27323b'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#0a141d'
  on-background: '#d9e4f0'
  surface-variant: '#2c363f'
typography:
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  margin-mobile: 20px
  gutter-mobile: 12px
---

## Brand & Style

The design system is centered on a high-precision, tech-forward aesthetic tailored for high-stakes professional environments. It targets a mobile-first user base that values speed, clarity, and a premium digital feel. 

The style is a hybrid of **Minimalism** and **Glassmorphism**. By utilizing a deep, near-black canvas with high-contrast accents, the UI recedes into the background to let data and interactions shine. We move away from heavy structural elements, instead using light, color, and depth to guide the user's eye. The emotional response is one of calm authority, modern efficiency, and technological sophistication.

## Colors

This design system utilizes a deep-sea dark mode palette. 

- **Primary Canvas:** The background uses a specific deep black (#010810) to maximize OLED efficiency and contrast.
- **Accents:** Vibrant Blue (#3B82F6) serves as the primary action color, providing a high-energy "glow" against the dark background.
- **Surface Layers:** Secondary containers use a slightly lighter navy (#0F172A) to create a subtle sense of hierarchy without needing heavy borders.
- **Typography:** Pure whites and soft grays ensure legibility while maintaining the sophisticated dark-mode atmosphere.

## Typography

The system utilizes **Outfit** across all roles to maintain a cohesive, geometric, and modern feel. 

- **Headlines:** Use heavy weights (600-700) with tight letter-spacing to create a strong visual anchor.
- **Body:** Standardized at 16px for optimal readability on mobile devices.
- **Hierarchy:** Contrast is achieved through weight transitions rather than extreme size changes, ensuring the UI remains balanced on smaller screens.
- **Labels:** Small-caps or increased letter-spacing should be used for secondary metadata to differentiate it from body text.

## Layout & Spacing

This design system follows a **fluid-width philosophy** for mobile, centered on a 4px baseline grid.

- **Margins:** A generous 20px side margin is required for all mobile screens to prevent content from feeling cramped.
- **Vertical Spacing:** Use 24px (lg) or 32px (xl) between major sections to emphasize the "clean and airy" brand promise.
- **Grid:** Use a simple 4-column layout for mobile cards and inputs, with 12px gutters.
- **Touch Targets:** All interactive elements must maintain a minimum height of 48px, regardless of their visual footprint.

## Elevation & Depth

Elevation is communicated through **translucency and blurs** rather than traditional drop shadows.

- **Surface Treatment:** Use "Glassmorphism" for floating elements. Apply a 20px Backdrop Blur with a 10% white tint to create a frosted glass effect.
- **Borders:** Borders are reduced to 1px width with very low opacity (10-15%). They should act as a subtle hint of a container edge rather than a structural wall.
- **Layering:** Level 0 is the background (#010810). Level 1 is the surface card (#0F172A). Level 2 is the floating modal or menu which uses the blur effect.
- **Interaction:** Upon press, elements should slightly scale down (e.g., 98%) rather than changing shadow depth, reinforcing a tactile, responsive feel.

## Shapes

The shape language is characterized by **soft, approachable geometry**. 

Consistent use of `rounded-lg` (12px on mobile) for all primary containers and buttons creates a friendly, ergonomic feel that mirrors hardware industrial design. 
- **Buttons and Inputs:** Should consistently use the 12px radius.
- **Small Components:** Elements like tags or chips can use a higher radius (Pill-shaped) to distinguish them from structural containers.
- **Outer vs Inner:** When nesting elements, ensure the inner radius is 4-8px smaller than the outer radius to maintain geometric harmony.

## Components

- **Buttons:** Primary buttons are solid vibrant blue (#3B82F6) with white text. Secondary buttons use a subtle ghost style with a 1px border.
- **Inputs:** Fields should have a background color of #0F172A and a 1px border that glows (increased opacity) when focused.
- **Cards:** Cards are the primary organizational unit. They should have no shadow, instead relying on the #0F172A surface color against the #010810 background to define their bounds.
- **Chips:** Small, pill-shaped indicators with a 10% primary color tint and 100% primary color text.
- **Lists:** Use 16px of vertical padding between items and a subtle separator line (1px, 5% white opacity).
- **Navigation:** Bottom bars should use a strong backdrop blur effect to allow content to scroll behind them, maintaining a sense of depth.