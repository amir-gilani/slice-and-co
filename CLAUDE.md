# Slice&Co — Pizza Hero Site

## Project overview

A single-page, **fully full-screen** website for a pizza brand called "Slice&Co". Build it with **React + Vite**, using an up-to-date, modern tooling stack (see below). Do not use any downloaded image files (jpg/png/svg); the pizza and its toppings are built entirely with CSS (gradients) and emoji.

Read this file fully and implement the project end-to-end — the project structure, the styling, the interaction logic, and the fix for the bug described in the "Current transition bug" section below.

## Tech stack

- **Vite** (latest version, `npm create vite@latest` with the `react` template)
- **React 18/19** (whatever is current at scaffold time) — function components + hooks, no TypeScript, `.jsx` files
- **Tailwind CSS v4** (latest) via the official `@tailwindcss/vite` plugin — use utility classes directly in JSX for layout/spacing/typography; keep only the pizza-drawing CSS (gradients, keyframes, the transition classes described below) in a small `src/index.css`, since those aren't practical as utility classes
- No routing (react-router) — just a single page
- Use current, actively maintained package versions — don't pin to old majors on purpose. Run `npm create vite@latest` fresh so you get whatever is current, then add Tailwind on top per its latest official Vite setup guide

### Tailwind setup notes

- Install: `npm install tailwindcss @tailwindcss/vite`
- In `vite.config.js`, add the `@tailwindcss/vite` plugin
- In `src/index.css`, start with `@import "tailwindcss";` then add the custom CSS described in this doc below it
- Define the design tokens (colors, fonts) from the "Visual design" section as CSS custom properties (or Tailwind's `@theme` block in v4) so they're reusable both as Tailwind utilities (e.g. `bg-[var(--bg)]`, or proper `@theme` tokens like `bg-ink`) and inside the custom pizza CSS
- Everything that's just box layout, spacing, flex/grid, typography, colors, borders, radii → do with Tailwind utility classes in JSX
- Everything that's the pizza itself (crust/sauce/cheese radial-gradients, topping positioning, the slide transition classes, the floating-emoji keyframes) → plain CSS in `index.css`, since Tailwind utilities aren't a good fit for those

## File structure

```
src/
  main.jsx
  App.jsx
  index.css
  data.js                     # array of pizzas (name + topping layout)
  components/
    PizzaSlider.jsx            # carousel/transition logic + < > buttons
    Pizza.jsx                  # visual rendering of one pizza (crust/sauce/cheese/toppings)
    Footer.jsx
index.html
vite.config.js
package.json
```

## Page spec (top to bottom)

1. **Nav** — top of the page, full width edge-to-edge:
   - Left: "Slice&Co" text logo (italic serif font, accent color red-orange `#e0432c`)
   - Right: two circular icon buttons (Account and Cart) with a thin border

2. **Hero** — fills the rest of the page's height (`flex:1` inside a flex column that fills the page top to bottom):
   - A few floating emoji with a slow "bob" animation (basil leaf, olive, tomato, mushroom) in the corners of the hero
   - Small uppercase eyebrow text: "Wood-fired & fresh daily"
   - Large serif headline: "Your delicious *pizza* starts here" (the word "pizza" italic and in the accent color)
   - A short description paragraph
   - A rounded red CTA button: "View Our Menu"
   - **The pizza slider** (full details in the next section)

3. **Footer** — a thin line with a copyright notice, separated by a top border.

## Visual design (design tokens)

```css
--bg: #ffffff;          /* fully white background, NOT cream! */
--card: #ffffff;
--ink: #241b17;
--ink-soft: #6b5f56;
--line: #ece6dc;
--accent: #e0432c;
--accent-ink: #fff8f3;
--crust: #dba03e;
```

- Display font: **Fraunces** (a serif with character) from Google Fonts — for the headline and logo
- Body font: **Work Sans** from Google Fonts
- The whole page must be full-bleed: `html, body, #root { margin:0; padding:0; width:100%; height:100% }` and both `.stage`/`.card` should be `min-height: 100vh` — **there must be no grey or cream margin visible around the page**, the background should be the flat white `--bg` edge to edge.
- (Optional but nice) dark mode support via `@media (prefers-color-scheme: dark)` and an override with `[data-theme="dark"]` — pick the dark tokens yourself, keeping harmony with the light palette.

## Pizza slider (the most important part)

The pizza is shown **half-cropped** from the bottom by a crop container (`.pizza-crop { overflow:hidden; height: less than the pizza's width }`) — only the top half of the pizza circle is visible, as if the pizza is emerging from the bottom edge of the crop box.

Horizontal layout: `[prev button] [half pizza] [next button]` — the buttons sit **right next to the pizza** (using `display:flex; gap`), not pinned to the corners of the screen.

There are three pizzas: Margherita Classic, Pepperoni Supreme, Garden Veggie — each with 6 toppings arranged symmetrically (a hexagon pattern, alternating) on the pizza circle.

### Current transition bug (make sure to avoid repeating this while implementing)

The previous version of this project had a subtle transition bug that you must be careful to avoid:

**The problem:** To make the next slide animate in from off-screen (e.g. from the right), you first have to move it to the "off-screen" position (e.g. `translateX(140%)`) **silently, with no animation**, and only on the next frame add the `active` class so the real animation plays. If `.pizza` already has a `transition` defined and you simply swap classes, that initial jump to the off-screen position gets animated too — and because the `active` class gets applied again very soon after (on the next frame), that first animation hasn't finished yet, so the pizza never actually reaches the true off-screen position. The result: the entrance animation has almost no visible movement (it looks like the transition is "broken" or "not working").

**The correct fix:**
1. Define a helper class `.no-transition { transition: none !important; }`.
2. When preparing the incoming slide: add both the `no-transition` class and the off-screen position class (e.g. `enter-right`) at the same time, and call `void element.offsetWidth` to force a reflow — this sets the position **instantly**, with no animation.
3. Then, on the next tick — using two nested `requestAnimationFrame` calls (or separate state in React) — remove `no-transition` and add `active`. Now, since the transition is enabled again and the starting position has genuinely been committed as "off-screen," the animation plays correctly and fully.
4. At the same time the new slide enters, the outgoing slide should get the `leave-left`/`leave-right` class so it animates away (this one does NOT need `no-transition`, since it starts from the already-`active`, transition-enabled state).

The direction of motion must be **horizontal**: clicking `>` (next) should send the current pizza out to the **left** while the next pizza comes in from the **right**. Clicking `<` (prev) should be the reverse — the current pizza goes out to the right, and the previous pizza comes in from the left.

Suggested CSS classes on `.pizza`:
```css
.pizza.leave-left   { transform: translateX(-140%); opacity: 0; }
.pizza.leave-right  { transform: translateX(140%);  opacity: 0; }
.pizza.enter-left   { transform: translateX(-140%); opacity: 0; }
.pizza.enter-right  { transform: translateX(140%);  opacity: 0; }
.pizza.no-transition{ transition: none !important; }
```

### Transition test checklist (run this and confirm each item)

- [ ] Clicking `>` repeatedly: each click must show real, full horizontal movement (from the right into the center), not a jump or no movement at all.
- [ ] Clicking `<` must be the exact mirror (from the left).
- [ ] Rapidly clicking the buttons in a row must not break the state or cause weird behavior (i.e. while one transition is in progress, a new click should be ignored until it finishes — keep a `busy`/`transitioning` flag).
- [ ] The pizza name tag (above the pizza) must change exactly when the new pizza reaches the active position, not earlier and not later.
- [ ] In DevTools → Performance, or just by eye, confirm the motion is smooth (not jumpy/choppy) — use something like `cubic-bezier(.4,0,.2,1)` for the transform and `ease` for opacity, with a duration around 500ms.

## What you need to do (0 to 100)

1. Scaffold the Vite+React project from scratch (or, if a folder already exists, restructure it to match the layout above).
2. Write every component (`App`, `PizzaSlider`, `Pizza`, `Footer`) and `data.js`.
3. Set up Tailwind CSS v4 via `@tailwindcss/vite`, define the design tokens as reusable theme values, use Tailwind utility classes for layout/typography/spacing in the JSX, and write the remaining pizza-drawing CSS (gradients, toppings, transition classes, keyframes) in `index.css` — matching the tokens and spec above (also link the Google Fonts in `index.html`).
4. Make sure the page is **truly full-screen** (no margin anywhere around the page, a single flat white background).
5. Implement the pizza slider transition exactly per the "correct fix" above, using the `no-transition` class + double `requestAnimationFrame` technique — this is the most important part, please test carefully that the motion is a real, full horizontal slide, not partial or broken.
6. Run `npm run dev` and confirm it starts with no console errors.
7. Go through the transition test checklist above one more time and debug/fix anything that fails.
8. If the transition still isn't landing correctly for any reason, don't guess at random fixes — step through the `.pizza` element's classes in DevTools (Elements tab) at the moment you click the button, and see exactly which class is applied at which moment, and where it diverges from the explanation above.
