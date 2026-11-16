# DialBack

**Bringing Tomorrow's Intelligence Back to Yesterday's Technology.**

DialBack is a USSD-inspired web experience exploring how familiar numbered menus can be combined with plain-language guidance, accessible design and offline-aware information.

> **Demo transparency:** This is a hackathon demonstration. It simulates USSD interactions in a web app; it is not connected to telecom networks, banks, utility providers or emergency dispatch. The included assistant uses local intent matching and does not call a remote generative AI model. Directory entries are illustrative guides, not verified providers.

## Features

- Responsive landing page and workspace dashboard.
- Interactive numbered-menu USSD simulation with back, home, validation and session navigation.
- Local intent-matching assistant for service discovery and product guidance.
- Searchable, filterable service directory with local favourites.
- Local activity history and preferences.
- Connectivity status and PWA setup for offline app-shell caching.
- Cached informational content designed to remain available after the app has been loaded.
- Keyboard-friendly controls, semantic elements and reduced-motion support.

## Technology

React 18, Vite, JavaScript/JSX, React Router, Framer Motion, Lucide React and `vite-plugin-pwa`.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Offline behaviour

The PWA plugin generates a service worker that precaches the production app shell and static assets. The service directory and local assistant knowledge are bundled with the app. Offline behaviour should be tested from a production build served over localhost or HTTPS: load the app once, then disconnect the network and reload. External font loading may fall back to system fonts offline. Live AI, remote listings and any future external integrations require connectivity.

## Environment

The `.env.example` file documents optional Supabase variables for future backend integration. This version does not require Supabase credentials and does not pretend to persist data remotely. Local demo preferences and activity are stored in browser localStorage.

Never commit real credentials. Any future privileged API key must be kept on a trusted server, not in Vite client-side environment variables.

## Deployment

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- This is a Vite SPA; the PWA plugin provides the app shell fallback. If your hosting setup needs explicit SPA rewrites, add a redirect from `/*` to `/index.html` with status `200`.

### GitHub

Create a new public repository, then from this project directory:

```bash
git init
git add .
git commit -m "Build DialBack demo application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Review staged files before pushing and ensure `.env` and other secrets are not included.

## Kiro competition workflow

The `.kiro/` directory contains starter project documentation. Use Kiro itself to review and adapt the requirements, design, steering and hooks to the actual workflow used. Keep truthful evidence of Kiro's contribution; do not claim tools, hooks or agents that were not used.

## Current limitations

- No telecom USSD gateway or real mobile network integration.
- No remote LLM integration; the assistant is a transparent local intent-matching demo.
- No Supabase backend or authentication configured.
- No live provider listings, transactions, payment processing or push notifications.
- Voice input is a progressive enhancement and depends on browser support.

## Licence

MIT. Review third-party dependency and asset licences before distribution.
