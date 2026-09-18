# Slice&Co

A pizza and fast-food restaurant website built with **React**, **Vite** and **Tailwind CSS v4**. It includes a hero pizza slider, a full menu split into categories, a page for every item, and a working cart.

![Slice&Co home page](docs/preview.png)

## Demo

<!-- Add your GIF at docs/demo.gif and it will show up here. -->
![Slice&Co demo](docs/demo.gif)

## Features

- **Hero pizza slider**: a half-cropped pizza that slides in horizontally, with an arc of pizza names, a size picker (10" / 12" / 14") with live pricing, and floating ingredients
- **Full menu**: 39 items in 8 categories: Pizza, Burgers, Fried, Falafel & Wraps, Cold Plates, Sides, Drinks and Sweets
- **Item detail pages**: a photo, description, ingredients and a builder for customizing each item
- **Cart**: add, remove and change quantities, saved in `localStorage` so it survives a reload
- **Reviews**: each review links to the item it's about and uses that category's color
- **Pages**: Home, Menu, About, Contact, and a 404 page
- **Motion**: smooth `cubic-bezier` transitions that respect `prefers-reduced-motion`

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev) | UI with function components and hooks |
| [Vite](https://vite.dev) | Dev server and build |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling through `@tailwindcss/vite` |
| [React Router 7](https://reactrouter.com) | Client-side routing |
| [oxlint](https://oxc.rs) | Linting |

## Getting started

You need Node.js 20 or newer.

```bash
git clone https://github.com/amir-gilani/slice-and-co.git
cd slice-and-co
npm install
npm run dev
```

Then open http://localhost:5173.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the project with oxlint |

## Project structure

```
src/
  main.jsx            # entry point
  App.jsx             # routes
  data.js             # menu, categories, pizzas, reviews
  cart.jsx            # cart context
  cart-store.js       # cart persistence (localStorage)
  index.css           # Tailwind import, design tokens, custom CSS
  assets/             # food photography (.webp)
  components/         # Nav, Footer, PizzaSlider, Pizza, ItemCard, Reviews, ...
  pages/              # Home, Menu, ItemDetail, Cart, About, Contact, NotFound
```

## Design

| Token | Value |
| --- | --- |
| Accent | `#e0432c` |
| Ink | `#241b17` |
| Background | `#ffffff` |
| Crust | `#dba03e` |

Headings use **Fraunces** and body text uses **Work Sans**, both from Google Fonts.
