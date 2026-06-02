# Elian Nathaniel — Portfolio

Personal portfolio website for **Elian Nathaniel**, Full Stack Developer.
Single-page, scroll-based site with a dark theme and a muted-teal accent.

## Stack

- **React** + **Vite**
- **React Router v6**
- **Custom CSS** (no UI framework)
- Deploy-ready for **Vercel**

## Sections

- **Hero** — name, title, one-liner, and CTAs with a CSS-only animated background
- **About** — short bio and a skills grid
- **Projects** — featured *Serai AI Concierge Chatbot* card + a "coming soon" placeholder
- **Contact** — email / LinkedIn / GitHub links

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying to Vercel

Push the repo and import it into Vercel. The included `vercel.json` rewrites all
routes to `index.html` so client-side routing works on refresh/deep links.

- Build command: `npm run build`
- Output directory: `dist`

## Customizing

A few placeholders are left in the source to fill in later:

- Contact email — `src/components/Contact.jsx` (`email@email.com`)
- LinkedIn / GitHub URLs — `src/components/Contact.jsx` (`#`)
- Project GitHub URL — `src/components/Projects.jsx` (`#`)
