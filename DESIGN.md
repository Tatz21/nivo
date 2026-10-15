# Design System & Motion Direction — Nivó

## 1. Design intent

Nivó should feel like a premium, futuristic education and recruitment brand. Use cosmic atmosphere and strong editorial design, not a generic dashboard aesthetic.

## 2. Brand tokens

Initial palette:
- Midnight: `#11111B`
- Deep Navy: `#19172B`
- Brand Violet: `#6554F5`
- Electric Purple: `#A78BFA`
- Warm White: `#FAF9F6`
- White: `#FFFFFF`
- Lime Accent: `#D8FF75`
- Muted Grey: `#8C8B9A`

Use semantic CSS variables so colours can be adjusted centrally.

## 3. Typography

- Primary: Manrope.
- UI fallback/alternative: Inter.
- Use fluid sizing with `clamp()`.
- Large, editorial headlines; readable body widths; clear label hierarchy.
- Do not render important copy as images.

## 4. Layout language

Prefer:
- Asymmetry and open space.
- Large typography.
- Full-bleed sections.
- Overlapping imagery.
- Curved or masked transitions.
- Organic shapes.
- Selective glass effects.
- Strong visual rhythm between dark and light sections.

Avoid:
- Repeated identical card grids.
- Heavy borders around everything.
- Excessive shadows.
- Excessive pills and rounded boxes.
- Decorative motion that competes with content.

## 5. Cursor system

### Desktop
- Small centre dot.
- Smooth outer ring.
- Subtle violet glow.
- Hover-specific expansion/colour changes.
- Optional short fading trail with strict particle caps.
- Cursor follows pointer using animation frames/motion values, not React state updates on every event.
- `pointer-events:none`; preserve native click, drag and text-selection behaviour.

### Interaction states
- Buttons: slightly larger ring and subtle magnetic movement.
- Links: compact ring and focused glow.
- Images: optional radial highlight.
- Interactive visuals: small tilt only where useful.
- Text inputs and text selection: use native cursor.
- Disabled controls: do not imply interactivity.

### Mobile/touch
Do not show a fake cursor. Disable magnetic effects and trails.

## 6. Animated backgrounds

### Cosmic
Slow gradients, low-density particles, soft noise and pointer-responsive radial light.

### Black hole
Dark central core, luminous accretion ring, violet/indigo light, subtle gravitational distortion and controlled particles.

### Aurora
Soft flowing colour fields for selected service sections.

### Minimal
Static or very slow gradients for content-heavy pages.

### Resume Studio
Very restrained background; the document preview and controls remain the visual focus.

## 7. Black-hole scene

- Original Nivó visual, not a direct copy of another site.
- Lazy-load heavy rendering.
- CSS/SVG first; Canvas for particles; Three.js only if real 3D meaningfully improves the result.
- Keep text and CTAs visually separate from the brightest areas.
- Provide static fallback for unsupported or reduced-motion contexts.

## 8. Motion rules

- Prefer transforms and opacity.
- Short, purposeful transitions.
- No scroll-jacking.
- No essential content hidden until an animation completes.
- Do not animate every paragraph/card.
- Avoid flashing or rapidly oscillating effects.
- Pause/reduce off-screen animation where feasible.
- Respect `prefers-reduced-motion: reduce`.

## 9. Accessibility

Target WCAG 2.2 AA:
- Keyboard operability.
- Visible focus indicators.
- Contrast.
- Semantic headings.
- Form labels and error announcements.
- Reduced-motion support.
- No hover-only information.
- Decorative layers are hidden from assistive technology where appropriate.

## 10. Resume Studio UI

Use a focused three-region desktop editor where practical:
- Left: section navigation and fields.
- Centre: live document preview.
- Right or top: template/settings controls depending on viewport.

On mobile, use a simple step-based layout with preview toggle. Avoid heavy cursor and background effects inside the editor.
