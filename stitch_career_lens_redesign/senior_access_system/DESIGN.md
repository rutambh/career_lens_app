---
name: Senior Access System
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#4ae176'
  primary: '#4be277'
  on-primary: '#003915'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#006e2f'
  secondary: '#ffb3ad'
  on-secondary: '#68000a'
  secondary-container: '#a40217'
  on-secondary-container: '#ffaea8'
  tertiary: '#afc7ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#82abff'
  on-tertiary-container: '#003d88'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  headline-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
  label-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 22px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  touch-target-min: 56px
  gutter-page: 24px
  stack-lg: 32px
  stack-xl: 48px
  inset-container: 24px
---

## Brand & Style
The design system is engineered for maximum legibility and cognitive ease, specifically tailored for senior citizens. The brand personality is **Trustworthy, Clear, and Effortless**, prioritizing functional utility over decorative trends.

The design style is a hybrid of **High-Contrast Bold** and **Tactile** design. It eschews all forms of visual ambiguity—such as subtle gradients, transparency, or thin lines—in favor of rock-solid clarity. Every interface element is designed to look like a physical, interactable object with high affordance, ensuring users feel confident in their navigation and actions.

## Colors
The palette is strictly optimized for **WCAG AAA compliance**. It utilizes a pure black background (#000000) to eliminate backlight bleed and maximize the contrast ratio for aging eyes.

- **Primary (Safe Green):** Used for positive actions, "Go," and "Confirm." It provides a high-energy signal of safety.
- **Secondary (Clear Red):** Reserved strictly for destructive actions, "Stop," and "Error" states.
- **Tertiary (Action Blue):** Used for links and secondary navigation elements to distinguish them from primary completion tasks.
- **Neutral:** Pure white (#FFFFFF) is used for all primary body text and icons to ensure the sharpest possible edge definition.
- **Surface:** A high-contrast dark gray (#262626) is used only when necessary to group related items, maintaining a high contrast ratio against the black base.

## Typography
This design system utilizes **Atkinson Hyperlegible Next**, a typeface specifically designed to increase character recognition and improve legibility for readers with low vision. 

The minimum font size is set to **18px** for all body text. Headings use heavy weights (700-800) to create a clear visual hierarchy. Avoid using any font weight below 400. Text should never be justified; use left-aligned text to maintain consistent word spacing, which aids in readability for users with cognitive impairments or visual fatigue.

## Layout & Spacing
The layout follows a **Fluid Grid** model with significantly exaggerated gutters and margins to prevent accidental taps (fat-finger errors). 

- **Touch Targets:** No interactive element should be smaller than 56x56px.
- **Vertical Rhythm:** Use a generous 8px base unit. Stack elements with at least 32px (stack-lg) of vertical breathing room to separate distinct functional areas.
- **Safe Areas:** Maintain a minimum 24px margin on mobile devices to ensure interactive elements are not too close to the screen edges or hardware bezels.
- **Reflow:** On desktop, content should never span the full width of the screen; cap the readable text measure at 700px to prevent eye strain during horizontal scanning.

## Elevation & Depth
Elevation is communicated through **Bold Borders** and **High-Contrast Insets** rather than soft shadows. 

To indicate that a component is "raised" or interactive, use a 2px or 3px solid white border. To indicate a "pressed" or "active" state, invert the colors (Primary background with Black text). Avoid all blurs or low-contrast shadows; the hierarchy must be structural and visible even on screens with low brightness settings.

## Shapes
The design system uses a **Rounded** (12px / 0.75rem) corner radius for all primary containers and buttons. This creates a "friendly" and approachable interface that avoids the clinical feel of sharp corners while maintaining more structural integrity than pill shapes. 

Large containers (cards) should use `rounded-xl` (24px) to create a clear nesting relationship when smaller `rounded-md` buttons are placed inside them.

## Components

- **Buttons:** Must be full-width on mobile. Use a minimum height of 64px. Labels must be bold and centered. Primary buttons use the Safe Green background with Black text for maximum punch.
- **Input Fields:** Use 3px solid white borders. Labels must always be visible (never use floating labels or placeholder-only labels). The active state must use a 5px high-contrast "focus" border in Action Blue.
- **Cards:** High-contrast containers with 2px solid gray (#404040) borders against the pure black background. Do not use shadows.
- **Lists:** Items must have a minimum height of 72px with a visible divider (1px white, 30% opacity) between rows.
- **Icons:** Use "Line" style with a minimum stroke weight of 2.5px. All icons must be accompanied by a text label; never rely on an icon alone for navigation or actions.
- **Checkboxes/Radios:** Oversized (32x32px) to ensure easy selection. Use the Primary Color for the "Checked" state to provide immediate visual feedback.