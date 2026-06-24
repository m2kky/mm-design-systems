---
name: mm-liquid-glass-design
description: "MM Design Systems premium package for Liquid Glass (Glassmorphism & Fluid UI) principles for creating highly modern, translucent, and organic interfaces with deep visual richness."
risk: safe
---

# MM Design Systems: Liquid Glass Foundations

> [!NOTE]
> **MM Signature Edition:** This skill is part of the MM Design Systems package. Always apply these guidelines with the premium quality, depth, and polished execution expected in MM projects.

## Overview

Use these comprehensive principles to create "Liquid Glass" interfaces. This design language combines the structural depth of **Glassmorphism** (frosted glass) with the organic, moving nature of **Liquid/Fluid UI**. It is characterized by heavy use of `backdrop-filter`, vibrant underlying mesh gradients, light-capturing borders, and smooth, organic animations.

---

## 1. The Glass Material (Translucency & Blur)
The core of the system relies on physical material simulation—making digital panels look like frosted glass hovering over a colorful environment.

### The Frosting (Backdrop Filter)
- **Blur:** Use strong `backdrop-filter: blur()` to distort the background. Typical values range from `10px` to `40px` depending on the desired thickness of the glass.
- **Background Fill:** The panel itself must be largely transparent.
  - *Light Glass:* `background: rgba(255, 255, 255, 0.05)` to `rgba(255, 255, 255, 0.25)`.
  - *Dark Glass:* `background: rgba(0, 0, 0, 0.1)` to `rgba(0, 0, 0, 0.4)`.

### Edge Lighting (The "Glass Edge")
Glass naturally catches light on its edges. You must simulate this using semi-transparent borders.
- **Top/Left Highlights:** Add a `1px` border to simulate a light source coming from the top-left.
  - *Example:* `border: 1px solid rgba(255, 255, 255, 0.18);`
  - *Alternative:* Use an inner box-shadow: `box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);`
- **Inner Noise (Optional but Premium):** For ultra-realism, mix in a faint SVG noise/grain texture on the glass background layer to give it a physical, frosted texture.

---

## 2. Vibrant Environments (The Underlay)
Glassmorphism fails if the background is a solid, dull color. The magic comes from what is placed *behind* the glass.

### Mesh Gradients & Blobs
- **Vivid Colors:** Use highly saturated, vibrant colors (e.g., neon purples, hot pinks, electric blues, warm oranges).
- **Organic Shapes:** Place glowing, blurred, or morphing blob shapes behind the glass panels.
- **Mesh Gradients:** Use complex CSS radial gradients or Canvas-based mesh gradients to create a deep, colorful environment.

---

## 3. Shadows & Floating Depth
Glass panels must feel lifted off the background.

### Diffused Shadows
- Avoid harsh, opaque shadows. Shadows must be soft, large, and diffused to indicate that light is passing through a translucent object.
- **Standard Glass Shadow:** `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);`
- **Colored Shadows:** For a highly stylized look, tint the shadow slightly with the dominant background color (e.g., a faint purple shadow over a purple background).

---

## 4. Liquid & Organic Motion
"Liquid" means the UI feels alive. Interactions should feel fluid rather than rigid.

### Morphing Shapes
- Instead of strict rectangles, utilize organic SVG blob shapes or deeply rounded corners (e.g., `border-radius: 20px` to `50%`).
- Animate `border-radius` values on hover or continuously in the background (e.g., animating `border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%` to create a liquid wobble effect).

### Micro-Interactions
- **Ripple/Liquid Hover:** When hovering over buttons, the background or border should fluidly expand or ripple.
- **Spring Animations:** Use physics-based spring animations (via Framer Motion, Anime.js, or CSS `transition-timing-function: cubic-bezier(0.25, 1.5, 0.5, 1)`) so panels "bounce" liquidly into place rather than moving linearly.

---

## 5. Typography & Contrast
Because the background is complex and the glass is translucent, typography must be explicitly clear.

### High Contrast
- **Text Color:** Usually pure white (`#FFFFFF`) on dark/vibrant backgrounds, or deep slate (`#1A1A24`) on very light backgrounds.
- **Font Weight:** Lean toward slightly heavier weights (Medium, Semi-Bold) for readability over blurred backgrounds.
- **Text Glow (Optional):** For a cyberpunk/neon liquid feel, add a very faint text-shadow to headings.

---

## 6. Implementation Blueprint (CSS Pattern)

Whenever generating a liquid glass component, utilize this standard CSS baseline:

```css
.liquid-glass-panel {
  /* Translucency */
  background: rgba(255, 255, 255, 0.1); /* Adjust alpha based on dark/light mode */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px); /* Safari support */
  
  /* Edge Lighting */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Less light on bottom */
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  
  /* Depth */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  
  /* Organic Shape */
  border-radius: 24px; /* Or use organic morphing border-radius */
  
  /* Smooth Liquid Transitions */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.liquid-glass-panel:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.25);
}
```

## Instructions for Agents
1. **MM Excellence:** Ensure all elements embody the MM premium liquid aesthetic with depth and fluid motion.
2. **Always verify the background:** Never apply a liquid glass panel on a solid white or solid black background; ensure a mesh gradient, image, or animated blobs exist behind it.
3. **Apply Edge Lighting:** Always include the semi-transparent 1px border. It is what separates "bad opacity" from "realistic glass".
4. **Use Fluid Easing:** Never use `linear` or standard `ease` transitions. Always use spring-based or custom cubic-bezier curves to give motion a liquid, organic feel.
5. **Prioritize Legibility:** Ensure text passes accessibility checks; if the background behind the glass is too bright, increase the opacity or lower the lightness of the glass background fill.
