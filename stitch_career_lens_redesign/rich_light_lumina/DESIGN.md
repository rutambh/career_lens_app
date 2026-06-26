---
name: Rich Light Lumina
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#464555'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#95002b'
  on-tertiary: '#ffffff'
  tertiary-container: '#bf0f3c'
  on-tertiary-container: '#ffd0d2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
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
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
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
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style
This design system embodies a "Rich Light" aesthetic, merging the precision of high-growth SaaS with the editorial sophistication of a premium lifestyle brand. The brand personality is tech-forward, energetic, and authoritative. 

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive white space and high-quality typography to ensure clarity, while employing subtle translucent layers and indigo-tinted surfaces to create a sense of depth and luxury. The goal is to evoke a feeling of professional excellence and modern innovation, making the talent platform feel like a high-end workspace rather than a utility.

## Colors
The palette is anchored by **Deep Indigo**, providing a stable and professional foundation. **Electric Violet** serves as a secondary accent for interactive elements and state changes, while **Soft Rose** is used sparingly for high-impact call-outs or status indicators.

The canvas is a warm, clean neutral (#FAFAFA) which prevents the interface from feeling clinical. Glassmorphic elements use a specific tinted surface (#F5F3FF) at low opacity (approx. 70-80%) to maintain a cohesive color story even within translucent components. Semantic colors for success, warning, and error should be derived from the tertiary rose and adjusted indigo tones to maintain palette harmony.

## Typography
The typography system uses **Outfit** exclusively to maintain a sleek, geometric, and tech-forward appearance. To achieve the "rich" editorial look, heading weights are pushed to Bold (700) and SemiBold (600), creating a strong visual hierarchy against the lighter body text.

Large display type utilizes slight negative letter spacing to feel more compact and impactful on desktop. Body text remains airy with generous line heights to ensure readability in data-heavy talent profiles. Label styles are slightly tracked out and set in SemiBold to ensure they stand out as functional UI markers.

## Layout & Spacing
The design system employs a **fluid grid** centered within a 1280px max-width container for desktop. It follows an 8px rhythmic scale for all margins, paddings, and component heights.

- **Desktop:** 12-column grid with 24px gutters and 40px side margins.
- **Tablet:** 8-column grid with 20px gutters and 24px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing should be generous between sections (using `xl`) to maintain the premium, "un-crowded" feel. Components like cards and modals should favor `lg` (24px) internal padding to reinforce the high-end editorial aesthetic.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and **Ambient Shadows**. Instead of traditional grey shadows, the design system uses highly diffused, low-opacity shadows tinted with Deep Indigo (#4F46E5) to keep the "Rich Light" feel.

- **Surface Level 0:** The main background (#FAFAFA).
- **Surface Level 1 (Cards):** Indigo-tinted glass (#F5F3FF) with a 12px backdrop blur and a 1px semi-transparent white inner border to simulate a glass edge.
- **Surface Level 2 (Modals/Popovers):** Solid white or tinted surface with a more pronounced ambient shadow (20% opacity Indigo tint, 30px blur).
- **Interactive Depth:** On hover, cards should subtly lift by increasing shadow spread and slightly decreasing the opacity of the glass tint.

## Shapes
The shape language is defined by **ROUND_EIGHT (0.5rem)**, providing a modern and approachable character that isn't overly bubbly. 

- **Standard Elements:** 0.5rem (8px) for buttons, inputs, and small widgets.
- **Large Elements:** 1rem (16px) for cards, modals, and containers.
- **Interactive Accents:** Chips and tags may use the `rounded-xl` (1.5rem/24px) setting to create a "pill" look that contrasts with the more structured rectangular cards.

## Components
- **Buttons:** Primary buttons use a solid Deep Indigo fill with white text. Secondary buttons use a transparent background with an Indigo border and text. High-action buttons may use an Electric Violet to Deep Indigo gradient.
- **Cards:** These are the centerpiece. Use the tinted glass surface (#F5F3FF) with 12px blur. Ensure a 1px stroke (#FFFFFF at 40% opacity) for a crisp, high-end feel.
- **Input Fields:** Use a clean white background with a subtle Deep Indigo border (1px). On focus, the border thickens or transitions to Electric Violet with a soft outer glow.
- **Chips/Badges:** Use Soft Rose for high-priority status and Electric Violet for general categorization. Use low-opacity fills (10%) with full-opacity text for a sophisticated look.
- **Lists:** Clean, borderless rows with subtle Indigo-tinted hover states. Use the bold Outfit weights for primary list items.
- **Navigation:** Top navigation should be a persistent glass bar with a slight bottom border to separate it from the main content.