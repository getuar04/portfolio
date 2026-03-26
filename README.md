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
