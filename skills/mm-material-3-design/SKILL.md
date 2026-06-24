---
name: mm-material-3-design
description: "MM Design Systems premium package for Google Material Design 3 (M3) principles for spacing, typography, color, layout, shape, and states to guide all UI/UX and architectural design decisions."
risk: safe
---

# MM Design Systems: Material Design 3 (M3) Foundations

> [!NOTE]
> **MM Signature Edition:** This skill is part of the MM Design Systems package. Always apply these guidelines with the premium quality, precise adaptivity, and polished execution expected in MM projects.

## Overview

Use these comprehensive principles from Google's Material Design 3 (M3) to guide all spacing, typography, color, hierarchy, layout, shape, and state decisions when building user interfaces and web applications. M3 represents a shift towards dynamic, accessible, and highly adaptive design.

---

## 1. Spacing & Grid System
*Source: https://m3.material.io/foundations/layout/understanding-layout*

M3 relies on a structured baseline grid to establish rhythm and alignment across all interfaces.

### The 8dp & 4dp Grid
- **Base-8 Grid:** The overarching grid for layouts, component dimensions, and spacing between macro-elements. Values must be multiples of 8 (e.g., `8, 16, 24, 32, 40, 48, 64`).
- **Base-4 Grid:** Used for micro-spacing, tighter alignments, and padding within components (e.g., text inside a button, spacing between a trailing icon and text). Values must be multiples of 4 (e.g., `4, 12, 20, 28`).

### Standard Spacing Tokens
- `space-0`: 0dp
- `space-1`: 4dp (tight grouping)
- `space-2`: 8dp (standard element spacing)
- `space-3`: 12dp
- `space-4`: 16dp (standard margin/padding)
- `space-5`: 24dp (section spacing/gutters)
- `space-6`: 32dp (macro-section spacing)
- `space-7`: 40dp
- `space-8`: 48dp (touch target minimum size)
- `space-9`: 64dp
- `space-10`: 80dp+ (page-level spacing)

---

## 2. Typography
*Source: https://m3.material.io/styles/typography/overview*

M3's typography is grouped into five primary roles, each offering Large (L), Medium (M), and Small (S) sizes.

### Font Stack
- Default to **Roboto** for Android/Web, or a modern system font stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`).

### Type Scale (Size / Line-Height / Weight)
1. **Display:** Used sparingly for the largest text on the screen (e.g., hero banners).
   - **Large:** 57px / 64px line-height / Regular (400)
   - **Medium:** 45px / 52px line-height / Regular (400)
   - **Small:** 36px / 44px line-height / Regular (400)
2. **Headline:** High-emphasis short text for defining primary page or modal structures.
   - **Large:** 32px / 40px line-height / Regular (400)
   - **Medium:** 28px / 36px line-height / Regular (400)
   - **Small:** 24px / 32px line-height / Regular (400)
3. **Title:** Medium-emphasis text used in app bars, section headers, or card titles.
   - **Large:** 22px / 28px line-height / Regular (400)
   - **Medium:** 16px / 24px line-height / Medium (500)
   - **Small:** 14px / 20px line-height / Medium (500)
4. **Body:** Primary text for reading long-form content. Prioritizes legibility.
   - **Large:** 16px / 24px line-height / Regular (400)
   - **Medium:** 14px / 20px line-height / Regular (400)
   - **Small:** 12px / 16px line-height / Regular (400)
5. **Label:** Utilitarian, small text used for buttons, chips, tooltips, and captions.
   - **Large:** 14px / 20px line-height / Medium (500)
   - **Medium:** 12px / 16px line-height / Medium (500)
   - **Small:** 11px / 16px line-height / Medium (500)

---

## 3. Color System & Elevation
*Source: https://m3.material.io/styles/color/system/how-the-system-works*

M3 does away with static hex codes in favor of **Dynamic Color** and **Tonal Palettes** (0-100 luminosity scale). All design must use relative color roles.

### Key Color Roles & Mapping
- **Primary:** Highest emphasis components (e.g., FABs, filled buttons, active states).
  - *Variants:* `Primary Container` (soft background), `On-Primary` (text/icon on primary), `On-Primary Container`.
- **Secondary:** Less prominent components (e.g., filter chips, secondary actions).
  - *Variants:* `Secondary Container`, `On-Secondary`, `On-Secondary Container`.
- **Tertiary:** Accents to balance primary/secondary, or to draw attention to specific UI elements (e.g., illustrations, highlighted text).
  - *Variants:* `Tertiary Container`, `On-Tertiary`, `On-Tertiary Container`.
- **Error:** Destructive actions, validation errors, or critical states.
  - *Variants:* `Error Container`, `On-Error`, `On-Error Container`.

### Surfaces & Elevation
M3 replaces heavy drop-shadows with **Tonal Surface Elevation**. Higher elevation surfaces are lighter in Dark Mode and slightly tinted in Light Mode.
- **Surface:** The standard background.
- **Surface Dim / Surface Bright:** Alternative base backgrounds.
- **Surface Container Lowest:** Flat, recessed areas.
- **Surface Container Low:** Level 1 (e.g., cards).
- **Surface Container:** Level 2 (e.g., dialog backgrounds).
- **Surface Container High:** Level 3 (e.g., menus, bottom sheets).
- **Surface Container Highest:** Level 4 (e.g., floating action buttons background layers).

### Outlines
- **Outline:** Strong borders (e.g., text field outlines).
- **Outline Variant:** Subtle borders (e.g., dividers, decorative card borders).

---

## 4. Layout & Breakpoints
*Source: https://m3.material.io/foundations/layout/applying-layout/window-size-classes*

M3 embraces **Window Size Classes** to ensure UI dynamically adapts to any screen.

### Window Size Classes & Grids
1. **Compact (0 – 599dp):** Phones.
   - **Columns:** 4
   - **Margins:** 16dp
   - **Gutters:** 16dp
   - **Behavior:** Stacked content, Bottom Navigation, Modal drawers.
2. **Medium (600 – 839dp):** Tablets & Foldables.
   - **Columns:** 8
   - **Margins:** 24dp
   - **Gutters:** 24dp
   - **Behavior:** Navigation Rail, side-by-side components when appropriate.
3. **Expanded (840 – 1199dp):** Small Desktops/Laptops.
   - **Columns:** 12
   - **Margins:** 24dp
   - **Gutters:** 24dp
   - **Behavior:** Standard Navigation Drawer, multi-column layouts (e.g., List-Detail view).
4. **Large (1200 – 1599dp) & Extra-Large (1600dp+):** Large Monitors.
   - **Columns:** 12
   - **Margins:** Flexible (content usually capped at a max-width, e.g., 1040dp or 1200dp, centered on screen).
   - **Gutters:** 24dp or 32dp.

### Canonical Layouts
When building complex screens, use these M3 standard patterns:
- **List-Detail:** A list pane on the left, detail pane on the right (collapses to full-screen panes on Compact).
- **Feed:** A single scrolling column of cards, constrained in width for readability.
- **Supporting Panel:** Main content area with an adjacent panel for filters, properties, or contextual info.

---

## 5. Shape & States (Interaction)

### Shape Scale
M3 standardizes border radiuses (corners) into families to convey hierarchy:
- **None:** 0dp (full screen elements).
- **Extra Small:** 4dp (snackbars, text fields, tooltips).
- **Small:** 8dp (rich tooltips, standard images).
- **Medium:** 12dp (cards, small dialogs).
- **Large:** 16dp (navigation drawers, medium dialogs).
- **Extra Large:** 28dp (large floating action buttons, bottom sheets, large dialogs).
- **Full:** Pill-shaped / 9999px (standard buttons, chips, FABs).

### State Layers
Visual feedback is provided via a semi-transparent overlay of the `On-` color (e.g., black on white, primary on primary-container) applied over the component.
- **Hover:** 8% opacity overlay.
- **Focus:** 12% opacity overlay.
- **Pressed:** 12% opacity overlay.
- **Dragged:** 16% opacity overlay.
- **Disabled:** Backgrounds at 12% opacity, Text/Icons at 38% opacity of the `On-Surface` color.

---

## Instructions for Agents
1. **MM Excellence:** Apply Material 3 guidelines while ensuring the polished presentation of MM Design Systems.
2. **Strictly adhere to M3 Token logic:** Never use arbitrary pixel values for colors. Always map colors to M3 semantic roles (`primary`, `surface-container`, `on-surface-variant`, etc.).
3. **Spacing Discipline:** Only use values derived from the 4dp/8dp system. Never use arbitrary margins like 15px or 27px.
4. **Typography:** Stick strictly to the M3 scale. Do not invent arbitrary font sizes; map content to the nearest appropriate role (e.g., Title Medium instead of "18px bold").
5. **Adaptive First:** Ensure all layouts scale gracefully across Compact, Medium, and Expanded breakpoints using standard M3 column counts and margins.
6. **Elevation by Color:** Do not default to heavy drop shadows. Rely on `Surface Container` layers for elevation.
