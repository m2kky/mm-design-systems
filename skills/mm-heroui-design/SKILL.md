---
name: mm-heroui-design
description: "MM Design Systems premium package for HeroUI (formerly NextUI) principles for building modern, fast, and highly customizable React interfaces."
risk: safe
---

# MM Design Systems: HeroUI Foundations

> [!NOTE]
> **MM Signature Edition:** This skill is part of the MM Design Systems package. Always apply these guidelines with the premium quality, attention to modern aesthetics, and polished execution expected in MM projects.

## Overview

Use these comprehensive principles from **HeroUI (formerly NextUI)** to guide design, styling, and component architecture decisions. HeroUI is characterized by its deep integration with Tailwind CSS, focus on modern aesthetics (glassmorphism, soft shadows, rounded corners), fluid animations via Framer Motion, and robust accessibility via React Aria.

---

## 1. Aesthetic & Vibe (Modern & Playful)

HeroUI stands out by moving away from strictly flat or rigid enterprise designs.
- **Soft Geometry:** Extensive use of rounded corners. The default `border-radius` (especially `radius="lg"` or `radius="full"`) gives interfaces a friendly, approachable feel.
- **Glassmorphism Built-in:** Native support for blurred, translucent backgrounds (e.g., in Navbars or Cards) using the `isBlurred` prop or Tailwind's `backdrop-blur` utilities.
- **Depth & Shadows:** Use of soft, colorful drop shadows (e.g., `shadow="md"`, `shadow="lg"`) that often match the component's primary color, creating a glowing effect.

---

## 2. Component Variants & Styling

HeroUI components (Buttons, Chips, Cards) share a unified API for visual variants. Instead of writing custom CSS for every state, rely on these semantic variants:

- **Solid:** The default, high-contrast filled state.
- **Faded:** A very light background with a subtle border (great for secondary actions).
- **Bordered:** Transparent background with a solid colored border.
- **Light / Flat:** Transparent background that gains a soft, opaque colored background on hover.
- **Ghost:** Bordered by default, but fills with solid color on hover.
- **Shadow:** Solid background with a glowing drop shadow of the exact same color.

*Rule for Agents:* Always leverage these `variant="[type]"` props before attempting to write custom Tailwind utility classes for buttons or interactive elements.

---

## 3. Semantic Color System (Tailwind Plugin)
*Source: https://www.heroui.com/docs/customization/colors*

HeroUI uses a semantic color palette that automatically adapts to Light and Dark modes.

### Base Colors
- `primary`: The main brand color (default is a vibrant blue/purple).
- `secondary`: A complementary color (often pink/purple).
- `success`: Green (positive actions).
- `warning`: Yellow/Orange (caution).
- `danger`: Red (destructive actions).

### Foreground / Content Colors
- `default`: Base background and text colors.
- HeroUI automatically generates `[color]-100` through `[color]-900` palettes.
- It also uses `-foreground` suffixes (e.g., `text-primary-foreground`) to guarantee readable text contrast on top of semantic backgrounds.

*Rule for Agents:* Never hardcode hex colors. Always use Tailwind classes mapped to HeroUI's semantic tokens (e.g., `bg-primary`, `text-success`, `border-danger-200`).

---

## 4. Accessibility & Interaction (React Aria)

HeroUI is built on Adobe's React Aria.
- **Keyboard Navigation:** Out-of-the-box support for arrow key navigation, `Tab` cycling, and `Space/Enter` selection.
- **Focus Rings:** HeroUI provides a very distinct, beautiful animated focus ring when navigating via keyboard. Do not disable outlines or focus states.
- **State Management:** Leverage the `isDisabled`, `isLoading`, and `isInvalid` props on form components. HeroUI automatically handles the ARIA attributes and visual styling for these states.

---

## 5. Animation & Motion (Framer Motion)

HeroUI relies on Framer Motion under the hood for micro-interactions.
- **Fluid Transitions:** Popovers, Modals, and Dropdowns slide and scale into view smoothly.
- **Ripple Effects:** Buttons and interactive elements often have subtle press animations (scale down slightly) or ripple effects.
- *Rule for Agents:* Avoid overriding standard component transition speeds unless specifically requested. Trust the default Framer Motion springs and easings provided by the library.

---

## 6. Layout & Sizing

### Sizing Scale
Components almost always support `size="sm"`, `size="md"`, and `size="lg"`.
- Use `sm` for dense data tables or tight navigation bars.
- Use `md` (default) for standard application UI.
- Use `lg` for landing pages, marketing sites, or prominent Call-To-Action sections.

### Structure (Tailwind)
Since HeroUI doesn't enforce a rigid grid component (like Bootstrap), use standard Tailwind CSS flexbox and grid utilities (`flex`, `grid`, `gap-4`, `grid-cols-12`) to structure the layout around HeroUI components.

---

## Instructions for Agents
1. **MM Excellence:** Apply HeroUI patterns conforming to the premium standards expected in MM projects.
2. **Prop-First Styling:** Before adding Tailwind utility classes to a HeroUI component, check if a prop exists for it (e.g., use `color="danger" variant="flat"` instead of `className="bg-red-100 text-red-500"`).
3. **Embrace the Vibe:** Use `radius="lg"` and `shadow="sm"` to maintain the modern, soft aesthetic of the library.
4. **Respect Dark Mode:** Rely entirely on the HeroUI Tailwind plugin's dynamic colors so the app transitions flawlessly between light and dark themes.
5. **Use the `isBlurred` prop:** Whenever implementing floating elements like sticky Navbars or bottom sheets, enable the blur effect for a premium glassmorphic feel.
