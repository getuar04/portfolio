# Getuar Jakupi — Portfolio

Modern, bilingual (EN/SQ) React portfolio with Tailwind CSS.

## Setup

```bash
npm install
npm start
```

## Build for production

```bash
npm run build
```

## Folder structure

```
src/
  context/
    LanguageContext.js     ← All translations (EN + SQ) + language toggle
  data/
    projects.js            ← All projects data (add/edit here)
    skills.js              ← Skills groups (add/edit here)
    certificates.js        ← Certificates list (add/edit here)
  hooks/
    useScrollReveal.js     ← Scroll animation hook
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Projects.jsx           ← Includes modal + filter
    Skills.jsx
    CV.jsx
    Certificates.jsx
    Contact.jsx
    Footer.jsx             ← Footer + ScrollToTop
  styles/
    globals.css            ← All custom CSS + animations
  App.js
  index.js

public/
  cv/
    Getuar-Jakupi-CV.pdf   ← Place your CV here
  certificates/
    cert1.png ... cert5.png
    Getuar Jakupi.pdf ...  ← Place certificates here
```

## How to update content

- **Projects**: Edit `src/data/projects.js` — add `github`, `live`, `screenshots` links
- **Skills**: Edit `src/data/skills.js` — add/remove items per group
- **Certificates**: Edit `src/data/certificates.js` — update labels, issuers, years
- **Translations**: Edit `src/context/LanguageContext.js` — both EN and SQ

## Language toggle

Click the flag button in the navbar (🇦🇱 / 🇬🇧) to switch between English and Albanian.
All text content switches instantly without page reload.

## SEO and deployment

The app uses React 18 and Create React App (`react-scripts` 5.0.1), with one
public page at `https://getuarjakupi.com/`. Navigation uses section fragments;
English and Albanian share this URL, so there are no separate language routes.

`public/index.html` owns the title, description, canonical, social metadata and
Person/WebSite JSON-LD. `public/sitemap.xml` and `public/robots.txt` are static
files copied into the build. `src/data/profile.js` owns application profile URLs.
Keep these production URLs consistent; do not substitute preview-host URLs.
`PUBLIC_URL` affects asset URLs, not canonical or sitemap URLs. For deployment
at the production domain root, leave `PUBLIC_URL` unset (and do not set a
subdirectory `homepage` in package.json).

`npm run build` compiles the client and runs `scripts/prerender.cjs`, using the
existing CRA compiler and React server renderer to put the English page into
`build/index.html`. React hydrates this markup and then restores saved language,
theme and motion preferences. The no-JavaScript stylesheet reveals the existing
content. Future components must remain safe to render without browser globals.
No runtime Node server or additional dependency is required.

Validate the actual generated artifacts and production bundle:

```bash
npm test -- --watchAll=false --runInBand
npm run build
node scripts/verify-seo.cjs
```

The SEO verifier checks metadata, schema, sitemap XML, robots, headings, local
links and files, and hydration with different saved preferences using the DOM
test tools already installed by CRA. It does not measure real browser layout,
Core Web Vitals, external link availability or production HTTP headers.

Deploy the **contents of the newly generated `build/` directory**, including
`index.html`, `robots.txt`, `sitemap.xml`, `static/`, icons, CV and certificates.
If using CRA's `BUILD_PATH`, both SEO scripts use that same output directory.
Do not upload `public/` alone or invoke `react-scripts build` directly, since
that skips prerendering. Purge any cached homepage, sitemap and robots files.

After deployment:

1. Check `/`, `/sitemap.xml` and `/robots.txt` return HTTP 200, without login or
   bot challenges; the XML/text files must not return the app HTML fallback.
2. Confirm the sitemap lists only `https://getuarjakupi.com/` and robots references
   `https://getuarjakupi.com/sitemap.xml`. Check that Cloudflare managed robots
   does not replace the deployed rules or omit the sitemap reference.
3. View the homepage source to confirm one production canonical, Person/WebSite
   JSON-LD and visible portfolio content inside `#root` before JavaScript runs.
4. Confirm there is no `X-Robots-Tag: noindex`, blocked homepage or redirect loop.
   Configure host-level permanent redirects from HTTP and www to the official
   HTTPS domain; configure www DNS and TLS before adding its redirect.
   If you control a previous domain, redirect its pages permanently
   to their matching current URLs.
5. Confirm unknown paths return a real 404, and test navigation, language, theme,
   project controls and mobile layout. Header/redirect rules belong to the host;
   this repository has no provider-specific deployment configuration.
6. In the verified Google Search Console property, submit
   `https://getuarjakupi.com/sitemap.xml`, inspect `https://getuarjakupi.com/`,
   run the live test and request indexing if appropriate.

There is no dedicated social preview image in the project. The Twitter card
uses `summary` without a fabricated image URL or account handle. Existing icons
are retained; no web app manifest is required for this non-PWA portfolio.