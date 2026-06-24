---
name: mm-atlassian-design
description: "MM Design Systems premium package for Atlassian Design System principles for spacing, typography, color, and layout to guide all UI and design decisions."
risk: safe
---

# MM Design Systems: Atlassian Foundations

> [!NOTE]
> **MM Signature Edition:** This skill is part of the MM Design Systems package. Always apply these guidelines with the premium quality, focus on productivity, and polished execution expected in MM projects.

## Overview

Use these principles from Atlassian's Design System as a guide for every spacing, typography, color, hierarchy, and layout decision when building user interfaces and web apps.

## 1. Spacing (Base-8 System)
*Source: https://atlassian.design/foundations/spacing*

**Principles:**
- **Base-8 Grid:** All spacing and sizing should be a multiple of 8px (e.g., 8, 16, 24, 32, 40, 48, 64).
- **Half-step:** A 4px half-step is used for tight spacing needs (e.g., between an icon and text, or tightly coupled components).
- **Rhythm & Hierarchy:** Use larger spacing multiples to group related macro-sections and smaller spacing for micro-elements. Consistent spacing creates a natural vertical and horizontal rhythm.

**Common Spacing Scale:**
- `space-025`: 2px (rare use)
- `space-050`: 4px
- `space-100`: 8px (baseline)
- `space-150`: 12px
- `space-200`: 16px
- `space-300`: 24px
- `space-400`: 32px
- `space-500`: 40px

## 2. Typography
*Source: https://atlassian.design/foundations/typography*

**Principles:**
- **Readability first:** Typography should prioritize legibility. Maintain adequate line height (typically 1.4 to 1.5 for body text).
- **Hierarchy:** Establish a clear visual hierarchy using size, weight, and color. Headings should clearly stand out from body copy.
- **Font Stack:** If Atlassian fonts (Charlie Display, Atlassian Sans) are unavailable, default to a robust, modern system sans-serif stack (e.g., `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`).
- **Weights:** Use Regular (400) for body copy, Medium (500) or SemiBold (600) for headings and emphasis. Avoid overly thin or extremely bold weights unless for specific brand moments.

## 3. Color
*Source: https://atlassian.design/foundations/color*

**Principles:**
- **Purposeful Color:** Color should be used to communicate meaning, not just for decoration.
- **Semantic Meaning:**
  - **Brand/Primary (Blue):** Used for primary actions, links, and active states.
  - **Success (Green):** Indicates positive actions, completion, or success.
  - **Warning (Yellow/Orange):** Indicates caution or non-critical errors.
  - **Danger (Red):** Indicates destructive actions, errors, or critical failures.
  - **Discovery (Purple):** Used for new features, highlights, or educational moments.
  - **Neutrals (Gray/Slate):** Used for text, backgrounds, borders, and subtle structural elements.
- **Accessibility:** Ensure high contrast between text and background. Aim for WCAG AA compliance (4.5:1 for normal text, 3:1 for large text).
- **Dark Mode Support:** Always consider how colors map to dark mode, relying on semantic tokens rather than hardcoded hex values where possible.

## 4. Layout & Grid
*Source: https://atlassian.design/foundations/layout*

**Principles:**
- **12-Column Grid:** Use a standard 12-column responsive grid for page layouts. This allows for flexible combinations (e.g., halves, thirds, quarters).
- **Gutters & Margins:** Use consistent gutters (space between columns, usually 16px or 24px) and page margins (outer spacing, scaling up on larger screens).
- **Alignment:** Elements should align strictly to the grid to maintain visual order.
- **Max Width:** Define a maximum width for content containers to ensure readability on ultra-wide screens.
- **Responsive Design:** Reflow layouts gracefully on smaller screens, moving from multi-column to single-column layouts for mobile devices.

## Instructions for Agents
- **MM Standard:** Ensure all outputs align with MM's standard of precision and professionalism.
- When tasked with creating or updating UI, ALWAYS reference this skill.
- Do not use arbitrary values for padding, margins, or sizes; round them to the nearest multiple of 4 or 8.
- Maintain strict typographic hierarchy and use semantic colors appropriately.
