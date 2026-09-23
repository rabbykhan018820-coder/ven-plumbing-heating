# Premium Four-Section Refinement

## Scope
Keep the navbar, hero, brand, process, emergency callout, contact, and footer unchanged. Rework only Services and Reels, then insert Before & After and Work Gallery between the reels and the existing process.

## Build
- **Services:** Replace the current rows with an asymmetric eight-service editorial composition. A large active feature panel pairs with a numbered selector; hover, focus, and tap update and smoothly expand the active service. Mobile becomes a touch-friendly accordion.
- **Our Reel:** Replace the wide placeholder with four empty 9:16 reel frames. Use staggered vertical positions, slight rotations, depth, shimmer, lift, and mobile horizontal snapping. No video or embed will be added; each frame stays clearly marked for later replacement in code.
- **Before & After:** Add a glossy interactive comparison with two clearly labelled replaceable visual placeholders, a draggable divider, keyboard-accessible range control, glowing handle, and restrained depth motion.
- **Work Gallery:** Add a nine-item cinematic composition driven by one simple image array. One featured image and eight surrounding images remain visible; Previous/Next changes the featured image with smooth repositioning, rotation, and spring-like motion. Existing project imagery will be reused as replaceable placeholders rather than inventing client work.
- **Motion and accessibility:** Use transform/opacity-based reveals, responsive transitions, keyboard controls, touch support, reduced-motion fallbacks, and semantic labels.

## Responsive verification
Check 1280px desktop and 375px mobile directly in the running site, including interactions, overflow, visibility, and console errors. CSS will explicitly support the requested intermediate and large breakpoints.

## Technical details
- Add focused React components for the two new sections.
- Keep visual colors and typography within the existing ink/ivory/copper design tokens.
- Use React state, pointer events, and spring-like CSS easing as the Framer Motion equivalent, avoiding a new runtime dependency.
- Update the home page assembly only to place the new sections.
