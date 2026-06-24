---
name: mm-hig-design
description: "MM Design Systems premium package for Apple Human Interface Guidelines (HIG) principles guiding iOS and macOS typography, color, layout, materials, and interaction."
risk: safe
---

# MM Design Systems: Apple HIG Foundations

> [!NOTE]
> **MM Signature Edition:** This skill is part of the MM Design Systems package. Always apply these guidelines with the premium quality, attention to detail, and polished execution expected in MM projects.

## Overview

Use these comprehensive principles from Apple's Human Interface Guidelines (HIG) to guide typography, color, hierarchy, layout, depth, and interaction decisions when building iOS, iPadOS, macOS, and Apple-aligned web applications. Apple's design language prioritizes clarity, deference to content, and depth.

---

## 1. Typography (San Francisco & Dynamic Type)
*Source: https://developer.apple.com/design/human-interface-guidelines/typography*

Apple relies on the San Francisco (SF) font family and a strict, semantic typographic scale called **Dynamic Type**, which ensures legibility and accessibility scaling.

### Font Stack
- **System Fonts:** SF Pro (iOS/macOS), SF Compact (watchOS), New York (Serif).
- **Web Fallback:** `font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`

### Dynamic Type Scale (Default Large Size)
Apple uses specific semantic text styles. Never use arbitrary font sizes; map to these roles:
- **Large Title:** 34pt / Regular (400) / Leading: 41pt
- **Title 1:** 28pt / Regular (400) / Leading: 34pt
- **Title 2:** 22pt / Regular (400) / Leading: 28pt
- **Title 3:** 20pt / Regular (400) / Leading: 25pt
- **Headline:** 17pt / Semi-Bold (600) / Leading: 22pt (Used to anchor content)
- **Body:** 17pt / Regular (400) / Leading: 22pt (Primary reading text)
- **Callout:** 16pt / Regular (400) / Leading: 21pt
- **Subhead:** 15pt / Regular (400) / Leading: 20pt
- **Footnote:** 13pt / Regular (400) / Leading: 18pt
- **Caption 1:** 12pt / Regular (400) / Leading: 16pt
- **Caption 2:** 11pt / Regular (400) / Leading: 13pt

*Note: Tracking (letter-spacing) is dynamic in Apple's system—tighter for larger text, looser for smaller text.*

---

## 2. Color System
*Source: https://developer.apple.com/design/human-interface-guidelines/color*

Apple uses **Semantic Colors** that automatically adapt to Light Mode, Dark Mode, and accessibility settings (like Increased Contrast).

### UI Element Colors (Hierarchical text and fills)
- **Text Labels:**
  - `Label`: Primary text (Black in Light, White in Dark).
  - `Secondary Label`: Subtitles, less important text (Greyed out).
  - `Tertiary Label`: Placeholder text.
  - `Quaternary Label`: Disabled text.
- **Fills (Buttons/Controls):**
  - `System Fill`, `Secondary System Fill`, `Tertiary System Fill`, `Quaternary System Fill`.
- **Separators:**
  - `Separator`, `Opaque Separator`.

### Background Colors (Depth & Grouping)
Apple uses two sets of backgrounds depending on the UI style (Standard vs Grouped/Settings style).
- **Standard Backgrounds:**
  - `System Background`: Base layer.
  - `Secondary System Background`: Layering over the base.
  - `Tertiary System Background`: Third layer.
- **Grouped Backgrounds (For Tables/Forms):**
  - `System Grouped Background`: Used for the overarching view.
  - `Secondary System Grouped Background`: Used for the cells/cards within the group.

### Tint Color (Accent Color)
- Apps should define a single primary **Tint Color** (e.g., Blue, Orange, Pink) used consistently to indicate interactivity and active states (links, selected tabs, filled buttons). 

---

## 3. Materials, Vibrancy, and Depth
*Source: https://developer.apple.com/design/human-interface-guidelines/materials*

Apple communicates hierarchy through translucency and blur, allowing content to bleed through background layers to provide a sense of context.

### Blur Materials
- **Ultra Thin, Thin, Regular, Thick:** varying degrees of blur applied to backgrounds of Navigation Bars, Toolbars, Tab Bars, and Sidebars.
- Never use a flat gray for a modal background or header; use a translucent material.

### Vibrancy
- Text and icons placed on top of materials should use **Vibrancy** (blending modes that pull color from the background blur) rather than flat opacity, to ensure they remain legible and feel integrated into the material.

---

## 4. Layout, Spacing, and Safe Areas
*Source: https://developer.apple.com/design/human-interface-guidelines/layout*

### Safe Areas & Margins
- **Safe Area:** Always inset content so it doesn't overlap with the notch, Dynamic Island, status bar, or home indicator.
- **Standard Margins:** Standard horizontal margins are typically `16pt` on smaller iPhones and `20pt` on larger iPhones/iPads.
- **Readable Width:** Long-form text should be constrained to readable widths (approx. 60-75 characters per line).

### Touch Targets
- **Minimum 44x44pt:** Every interactive element must have a minimum hit area of 44x44 points, regardless of its visual size. 
- **Spacing:** Provide ample padding (at least 8pt) between interactive elements to prevent accidental taps.

### Corner Radius & Continuous Curves
- Apple does not use standard circular arcs for border radiuses; they use **Continuous Curves** (Squircles). Visually, this means rounding starts earlier and is smoother.
- **Concentric Radii:** When nesting a rounded element inside another (e.g., a button inside a card), the inner radius should equal the outer radius minus the padding between them (`R_inner = R_outer - Padding`).

---

## 5. Navigation & Components
*Source: https://developer.apple.com/design/human-interface-guidelines/components*

- **Navigation Bar:** Anchors the top of the screen. Often uses Large Titles that shrink to inline titles when scrolling.
- **Tab Bar:** Anchors the bottom of the screen. Maximum 5 tabs. Always use filled icons for the active state and outlined icons for inactive states.
- **Modals (Sheets):** Used for non-linear tasks. 
  - **Page Sheet:** A card that slides up but leaves the parent view visible and dimmed in the background. Can be dismissed by swiping down.
  - **Full Screen:** Used for immersive tasks like camera or media viewing.
- **Context Menus:** Use iOS-style context menus with a blurred background when long-pressing elements.

---

## Instructions for Agents
1. **MM Excellence:** Ensure all HIG principles are applied with an eye for the MM premium standard of design.
2. **Semantic Typography:** Never invent font sizes. Map all text strictly to Apple's Dynamic Type scale (Large Title, Headline, Body, Footnote, etc.). Remember that `Headline` is Semibold, while `Body` is Regular, though both are 17pt.
3. **System Colors over Hex Codes:** Avoid hardcoded hex colors. Use the semantic naming conventions (Label, Secondary Label, System Background) to ensure perfect dark mode and accessibility compliance.
4. **Materials over Opacity:** When creating floating headers, sidebars, or modals, use backdrop-filters/blurs rather than flat transparent hex colors.
5. **Touch Targets & Spacing:** Enforce the 44x44pt minimum touch target rule ruthlessly. Use 16pt or 20pt standard layout margins.
6. **Corner Matching:** Ensure nested rounded corners mathematically align (`Inner Radius = Outer Radius - Padding`).
