# Vilashin LLC — vilashin.com

Website of Vilashin LLC (ООО «ВИЛАШИН», «ՎԻԼԱՇԻՆ» ՍՊԸ), Kapan, Armenia.
Created with the support of M.A.R.S. COMPANION LLC — https://company.teduza.com
React + Vite + Tailwind, published as a static multi-language site on GitHub Pages.

## Language pages

Each language is a separate static page in its own folder:

| URL                          | Source file      | Language |
|------------------------------|------------------|----------|
| https://vilashin.com/        | `index.html`     | English (root) |
| https://vilashin.com/hy/     | `hy/index.html`  | Armenian |
| https://vilashin.com/ru/     | `ru/index.html`  | Russian  |

- The page language comes from `<html lang="…">` in each HTML file.
- The language switcher uses normal links, so switching language loads the new page from the top.
- Each HTML file has its own `<title>`, description, canonical URL and `hreflang` links for search engines.
- All visible text lives in `src/data/translations.ts`. If you change a page title or description there, update the matching `<head>` in `index.html`, `hy/index.html` or `ru/index.html` too.

## Run locally (Windows)

Double-click `start-dev.bat`, then open http://localhost:5173 (also `/hy/` and `/ru/`).

Or from a terminal:

```
npm install --legacy-peer-deps
npm run dev
```

To check the production build exactly as it will be published, double-click `preview.bat` and open http://localhost:4173.

## Deploy (GitHub Pages)

1. Repository: https://github.com/gagora67/vilashin (branch `main`). The workflow is `.github/workflows/deploy.yml`.
2. Push changes to `main` — on Windows just double-click `publish-to-github.bat` (needs Git for Windows; the first time it asks you to sign in to GitHub). Do not commit `node_modules/` or `dist/` (already in `.gitignore`).
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` runs the workflow, which builds the site and publishes `dist/`.
5. The custom domain comes from `public/CNAME` (`vilashin.com`). Point the domain's DNS to GitHub Pages and enable **Enforce HTTPS** in Settings → Pages.

`--legacy-peer-deps` is needed because `@tailwindcss/vite` does not yet declare support for Vite 8.

## Brand assets

- `public/brand/` — Vilashin logo (512 px for schema.org, 192 px app icon, 96 px navbar mark, 1200×800 full logo).
- `public/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `site.webmanifest` — browser/phone icons.
- `public/og-image.jpg` — 1200×630 preview image for links shared in messengers and social networks.
