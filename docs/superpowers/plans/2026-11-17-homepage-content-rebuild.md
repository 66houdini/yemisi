# Homepage and Bio Content Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Put Oluwayemisi Adebayo's new copy, logo and photos on the homepage and Bio page, add Testimonials and Gallery pages, and simplify the navigation, on the PR #2 branch.

**Architecture:** All copy and image URLs live in one content module (`src/content/site.ts`) that the pages import, so the client's later wording changes touch one file. Pages stay plain React components using Tailwind, matching the existing code. New routes are added to `src/App.tsx`.

**Tech Stack:** React 18, Vite 5, Tailwind 3, react-router-dom 6, @headlessui/react Popover.

**Spec:** `docs/superpowers/specs/2026-11-17-homepage-content-rebuild-design.md`

## Global Constraints

- Work on branch `homepage-redesign` (PR #2). Never push to `main`, never merge.
- Theme: black background, white text, purple accents (`primary` #481367 fills, `primary-light` #a855f7 text and borders).
- Tagline, exactly: `Strategist | Academic | Entrepreneur & Investor | Coach`
- Calendly link: `https://calendly.com/oluwayemisiadebayo/15min`
- No prices, no phone numbers anywhere.
- Edit files only with the Write/Edit tools. Never rewrite source through Windows PowerShell `Get-Content`/`Set-Content` (it corrupted UTF-8 characters last time).
- The project has no test runner. "Test" in this plan means: `npm run build` must pass, and the browser check script for the task, run with the Browser `javascript_tool` against the dev server (`preview_start {name: "dev"}`, port 5173), must return `{ pass: true }`.

## Review Focus

1. **Phone width (375px):** no sideways page scroll on any changed page; nav menu opens from the hamburger and both dropdowns work inside it. Test in Task 2 and Task 7.
2. **Cloudinary images:** each of the 8 new asset URLs returns HTTP 200 and every `<img>` has non-empty `alt`. Test in Task 1 and Task 7.
3. **Long statements:** each statement renders as separate paragraphs at her paragraph breaks, never one wall of text. Test in Task 3 and Task 4.
4. **Hash links from other pages:** clicking Podcast or News from the homepage lands on `/media` at that section. Test in Task 2.
5. **Curly apostrophes:** "Here’s" and "Let’s" render correctly, with no `Â`, `â€` or `�` anywhere. Test in Task 7.

---

### Task 1: Content module

**Files:**
- Create: `src/content/site.ts`

**Interfaces:**
- Produces (all `export const`):
  - `logos: { white: string; black: string; blackJpg: string }`
  - `images: { stage: string; strategist: string; lecturer: string; bng04797: string; bng05141: string }`
  - `tagline: string`, `calendlyUrl: string`
  - `firstStatement: string[]`, `secondStatement: { title: string; paragraphs: string[] }`, `shortStatement: string[]`
  - `roleCards: { title: string; text: string; img: string }[]` (6 items, order below)
  - `beyondTheWork: { title: string; paragraphs: string[] }`
  - `testimonials: { name: string; quote: string }[]` (moved from `IndexPage.tsx`, same 3 items)
  - `bio: { intro: string; paragraphs: string[] }`
  - `galleryImages: { src: string; alt: string }[]`

- [ ] **Step 1: Check the new asset URLs exist**

Run in the Browser `javascript_tool` (any page):
```js
const urls = ["LC_z4hky5.png","Strategist_oeb8qs.png","BNG04797_idifjd.jpg","Stage_Picture_pdheqc.jpg","BNG05141_zmgwcb.jpg"].map(f=>`https://res.cloudinary.com/dador6eng/image/upload/yemisi/${f}`)
  .concat(["Logo_jpeg_black_adtb06.jpg","logo_png_white_ldxbyv.png","logo_png_black_ptnbfp.png"].map(f=>`https://res.cloudinary.com/dador6eng/image/upload/yemisi/${f}`));
const r = await Promise.all(urls.map(u => new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(u); i.src = u; })));
({ pass: r.every(x => x === true), failed: r.filter(x => x !== true) })
```
Expected: `{ pass: true, failed: [] }`. If any fail, use the exact versioned URLs from the user's message (`.../upload/v1794934xxx/yemisi/...`) instead; those are the URLs `site.ts` must use either way.

- [ ] **Step 2: Write `src/content/site.ts`**

Use the exact versioned URLs from the spec's Assets section / user message. Values:
- `images.stage` = Stage_Picture_pdheqc.jpg, `strategist` = Strategist_oeb8qs.png, `lecturer` = LC_z4hky5.png, `bng04797` = BNG04797_idifjd.jpg, `bng05141` = BNG05141_zmgwcb.jpg.
- `roleCards` in this order, `text` copied verbatim from the spec: Strategist (`images.strategist`), Entrepreneur (`images.bng04797`), Lecturer (`images.lecturer`), Investor (`https://res.cloudinary.com/dador6eng/image/upload/v1727245918/yemisi/2_yf9z5n.jpg`), Coach (`images.bng05141`), Disciple of God (`https://res.cloudinary.com/dador6eng/image/upload/v1727245897/yemisi/2-copy_wixqpm.jpg`).
- `firstStatement`: her 1st statement, 3 paragraphs, split at her line breaks, verbatim.
- `secondStatement.title` = `Here’s what makes the work interesting`; `paragraphs`: her 2nd statement, 2 paragraphs, verbatim.
- `shortStatement`: 4 strings, verbatim, ending with `Let’s move beyond ideas and turn possibilities into impact?`
- `beyondTheWork.title` = `Beyond The Work`; one paragraph built only from her own words: "Oluwayemisi is the founder of TTS Initiative Foundation, a youth-focused organisation committed to empowering the next generation through education, mentorship and opportunity, reaching thousands of young people."
- `bio.intro`: her Bio first paragraph ("Oluwayemisi Adebayo is a multifaceted business expert whose work sits..."); `bio.paragraphs`: the remaining 8 Bio paragraphs ("A strategist by mindset..." through "Oluwayemisi's ambition extends..."), verbatim.
- `testimonials`: cut the `testimonials` array out of `src/pages/IndexPage.tsx` unchanged.
- `galleryImages`: the 5 `images` entries, then the 5 photos currently in the Gallery block of `src/pages/About.tsx` (lines 116-135), each with a short descriptive `alt`.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: ends with `✓ built in`, no TS errors. (`IndexPage.tsx` must import `testimonials` from `../content/site` now.)

- [ ] **Step 4: Commit**

```bash
git add src/content/site.ts src/pages/IndexPage.tsx
git commit -m "Add site content module with new copy and assets"
```

---

### Task 2: Header, navigation and footer

**Files:**
- Modify: `src/pages/IndexPage.tsx` (the `PersonalizedHeader` export, lines 1-70)
- Modify: `src/pages/components/Dropdown.tsx:5-12` (the `solutions` array)
- Modify: `src/pages/components/MediaDropdown.tsx:5-9`
- Modify: `src/pages/components/Footer.tsx:8-24` (links column)

**Interfaces:**
- Consumes: `logos.white`, `tagline` from Task 1.
- Produces: routes `/testimonials` and `/gallery` are linked here (created in Tasks 5 and 6).

- [ ] **Step 1: Write the check script** (save it in the task notes; it fails now)

```js
const q = s => [...document.querySelectorAll(s)];
const logo = q('header img, div.z-30 img').find(i => i.src.includes('logo_png_white'));
const top = q('div.z-30 a, div.z-30 button').map(e => e.innerText.trim()).filter(Boolean);
q('div.z-30 button').find(b => b.innerText.includes('ABOUT'))?.click(); await new Promise(r=>setTimeout(r,400));
const about = q('[id^="headlessui-popover-panel"] a').map(a => a.getAttribute('href'));
q('div.z-30 button').find(b => b.innerText.includes('ABOUT'))?.click();
q('div.z-30 button').find(b => b.innerText.includes('MEDIA'))?.click(); await new Promise(r=>setTimeout(r,400));
const media = q('[id^="headlessui-popover-panel"] a').map(a => a.getAttribute('href'));
const footer = q('footer a, div.bg-black a').map(a => a.getAttribute('href'));
({ pass: !!logo && top.includes('HOME') && top.includes('CONTACT') && !top.includes('CONSULTING')
   && JSON.stringify(about) === JSON.stringify(['/about','/projects','/testimonials'])
   && JSON.stringify(media) === JSON.stringify(['/media#podcast','/media#news','/gallery'])
   && ['/consulting','/coaching','/certifications'].every(h => footer.includes(h)), top, about, media })
```

- [ ] **Step 2: Run it on `/` and confirm it fails**

Expected: `pass: false` (no logo, no HOME, old dropdown items).

- [ ] **Step 3: Implement**
- `PersonalizedHeader`: replace the `OLUWAYEMISI ADEBAYO` text with `<img src={logos.white} alt="Oluwayemisi Adebayo logo">` (height ~40px desktop, ~32px mobile) and put `tagline` under it in small text on md+ screens. Nav order: HOME (`/`), ABOUT dropdown, MEDIA dropdown, CONTACT (`/contact`), then the existing social icons. Keep the mobile hamburger behaviour.
- `Dropdown.tsx` items: BIO `/about`, PROJECTS `/projects`, TESTIMONIALS `/testimonials`.
- `MediaDropdown.tsx` items: PODCAST `/media#podcast`, NEWS `/media#news`, GALLERY `/gallery`.
- `Footer.tsx` links column: Home, About, Consulting, Coaching, Certifications, Projects, Testimonials, Gallery.

- [ ] **Step 4: Run `npm run build` and the check script on `/`**

Expected: build passes; script returns `pass: true`.

- [ ] **Step 5: Phone-width and hash-link checks**

`resize_window {preset: "mobile"}`, reload `/`, open the hamburger, open ABOUT then MEDIA: both lists show. Run `document.documentElement.scrollWidth <= innerWidth` → `true`. Click PODCAST: URL becomes `/media#podcast` and `document.getElementById('podcast').getBoundingClientRect().top` is within `[-50, innerHeight]`. Reset with `resize_window {preset: "desktop"}`.

- [ ] **Step 6: Commit**

```bash
git add src/pages/IndexPage.tsx src/pages/components/Dropdown.tsx src/pages/components/MediaDropdown.tsx src/pages/components/Footer.tsx
git commit -m "Use logo and new navigation, move service pages to footer"
```

---

### Task 3: Homepage sections

**Files:**
- Modify: `src/pages/IndexPage.tsx` (the default export `IndexPage`; remove `credentialLogos`, `categoryCards` and the sections that used them; keep `PersonalizedHeader`, the newsletter section and the Podcasts & News section's TTS news items)

**Interfaces:**
- Consumes: `images`, `tagline`, `calendlyUrl`, `firstStatement`, `secondStatement`, `shortStatement`, `roleCards`, `beyondTheWork`, `testimonials` (Task 1); `HorizontalScroller` from `src/pages/components/HorizontalScroller.tsx` (existing, props `{ children, className? }`).

- [ ] **Step 1: Write the check script**

```js
const h = [...document.querySelectorAll('main h1, main h2')].map(e => e.innerText.trim().toUpperCase());
const order = ['OLUWAYEMISI','HERE’S WHAT MAKES THE WORK INTERESTING','STRATEGIST','BEYOND THE WORK','WHAT PEOPLE SAY'];
const idx = order.map(t => h.findIndex(x => x.includes(t)));
const cards = [...document.querySelectorAll('[data-role-card]')].map(c => c.querySelector('h3').innerText.trim().toUpperCase());
const cta = [...document.querySelectorAll('a')].find(a => a.innerText.trim().toUpperCase() === 'CONTACT OLUWAYEMISI ADEBAYO');
const heroImg = document.querySelector('#intro img');
const paras = document.querySelectorAll('[data-statement="first"] p').length;
({ pass: idx.every((v,i) => v >= 0 && (i === 0 || v > idx[i-1]))
   && JSON.stringify(cards) === JSON.stringify(['STRATEGIST','ENTREPRENEUR','LECTURER','INVESTOR','COACH','DISCIPLE OF GOD'])
   && cta?.href === 'https://calendly.com/oluwayemisiadebayo/15min'
   && heroImg?.src.includes('Stage_Picture') && paras === 3
   && document.querySelectorAll('[data-statement="second"] p').length === 2
   && document.body.innerText.includes('Strategist | Academic | Entrepreneur & Investor | Coach'), idx, cards, paras })
```

- [ ] **Step 2: Run it on `/` and confirm it fails**

Expected: `pass: false`.

- [ ] **Step 3: Implement, sections in this order**
1. `#intro` hero: `images.stage` as the layered background (keep the existing z-10 image / z-20 text stacking and gradient), name `Oluwayemisi Adebayo` as the `h1`, `tagline` beneath it, the purple "Scroll Down" link to `#statement`.
2. `section#statement[data-statement="first"]`: `firstStatement` as 3 `<p>`.
3. `section[data-statement="second"]`: `h2` = `secondStatement.title`, its 2 paragraphs as `<p>`, beside the existing lecturing photo `https://res.cloudinary.com/dador6eng/image/upload/v1728423689/yemisi/PSX_20241008_210120_ak59qj.jpg` (two columns on md+, stacked on mobile).
4. Short statement: each `shortStatement` line large and bold, then the `CONTACT OLUWAYEMISI ADEBAYO` button linking to `calendlyUrl`.
5. Role cards: an `h2` above the grid reading `Strategist | Entrepreneur | Lecturer | Investor | Coach | Disciple of God` (purple, small caps-style), then a grid (1 column mobile, 2 sm, 3 lg) of 6 cards, each `<div data-role-card>` with the image, an `h3` title and the text.
6. Beyond The Work: `h2` = `beyondTheWork.title`, its paragraph, then the two existing TTS news items (keep their current images and text).
7. What People Say: `h2` `What people say`, `testimonials` in `HorizontalScroller` (keep current card markup).
8. Existing podcast embed, then newsletter section, unchanged.

- [ ] **Step 4: Run `npm run build` and the check script on `/`**

Expected: build passes; `pass: true`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/IndexPage.tsx
git commit -m "Rebuild homepage with new statements and role cards"
```

---

### Task 4: Bio page

**Files:**
- Modify: `src/pages/About.tsx` (replace the whole body below the header; remove the old Consultation/Coaching CTA block and the Gallery block, which moves to Task 6)

**Interfaces:**
- Consumes: `logos.white`, `tagline`, `bio`, `images.bng04797` (Task 1); `PersonalizedHeader` (Task 2).

- [ ] **Step 1: Write the check script**

```js
const t = document.body.innerText;
({ pass: !!document.querySelector('img[data-bio-logo][src*="logo_png_white"]')
   && t.includes('Strategist | Academic | Entrepreneur & Investor | Coach')
   && document.querySelectorAll('[data-bio] p').length === 9
   && t.includes('strategy without execution remains an idea')
   && !t.includes('Welcome to my corner of the web') && !/Book Me|Consultation\s+Coaching/.test(t) })
```

- [ ] **Step 2: Run it on `/about` and confirm it fails**

- [ ] **Step 3: Implement**

Black page wrapped in `<main>`: `PersonalizedHeader bg="bg-black"`; a top block with the white logo (large, centred, `data-bio-logo` attribute), `tagline` under it in purple; then `<article data-bio>` with `bio.intro` styled as a larger lead `<p>` and the 8 `bio.paragraphs` as `<p>`, readable width (`max-w-3xl`), beside `images.bng04797` on md+ (sticky image column), stacked on mobile.

- [ ] **Step 4: Run `npm run build` and the check script on `/about`**

Expected: build passes; `pass: true`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/About.tsx
git commit -m "Rewrite Bio page with new biography"
```

---

### Task 5: Testimonials page

**Files:**
- Create: `src/pages/Testimonials.tsx` (default export `Testimonials`)
- Modify: `src/App.tsx:19-30` (add `<Route path="/testimonials" element={<Testimonials/>} />`)

**Interfaces:**
- Consumes: `testimonials` (Task 1), `PersonalizedHeader` (Task 2).

- [ ] **Step 1: Write the check script**

```js
({ pass: location.pathname === '/testimonials' && document.querySelectorAll('main figure').length === 3
   && document.body.innerText.includes('Oluyemi Odofa, Food NC') })
```

- [ ] **Step 2: Run it on `/testimonials` and confirm it fails** (route does not exist yet; page shows no figures)

- [ ] **Step 3: Implement** a black `<main>` page: `PersonalizedHeader bg="bg-black"`, `h1` `What People Say`, the 3 testimonials as `<figure>` cards (quote, purple name) in a 1/2/3-column grid, and one line under them: `More reviews coming soon.`

- [ ] **Step 4: Run `npm run build` and the check script on `/testimonials`**

Expected: `pass: true`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Testimonials.tsx src/App.tsx
git commit -m "Add Testimonials page"
```

---

### Task 6: Gallery page

**Files:**
- Create: `src/pages/Gallery.tsx` (default export `Gallery`)
- Modify: `src/App.tsx` (add `<Route path="/gallery" element={<Gallery/>} />`)

**Interfaces:**
- Consumes: `galleryImages` (Task 1), `PersonalizedHeader` (Task 2).

- [ ] **Step 1: Write the check script**

```js
const imgs = [...document.querySelectorAll('main [data-gallery] img')];
({ pass: location.pathname === '/gallery' && imgs.length === 10 && imgs.every(i => i.alt.trim().length > 0) })
```

- [ ] **Step 2: Run it on `/gallery` and confirm it fails**

- [ ] **Step 3: Implement** a black `<main>` page: `PersonalizedHeader bg="bg-black"`, `h1` `Gallery`, `<div data-gallery>` as a CSS-columns masonry (`columns-1 sm:columns-2 lg:columns-3 gap-4`, each image `w-full mb-4 rounded-md break-inside-avoid`, `loading="lazy"`).

- [ ] **Step 4: Run `npm run build` and the check script on `/gallery`**

Expected: `pass: true`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/Gallery.tsx src/App.tsx
git commit -m "Add Gallery page"
```

---

### Task 7: Whole-site check and push

**Files:** none new.

- [ ] **Step 1: Encoding and leftovers check on every route**

For each of `/`, `/about`, `/testimonials`, `/gallery`, `/media`, `/consulting`, `/coaching`, `/certifications`, `/projects`, `/contact`, run:
```js
const t = document.body.innerText;
({ pass: !/Â|â€|Ã|�/.test(t) && !/\+44|\+234|7440594936|9091124086/.test(t) && !/\$\s?\d|cost:/i.test(t)
   && [...document.images].filter(i => i.complete).every(i => i.naturalWidth > 0) })
```
Expected: `pass: true` on all ten (wait ~2s after load; lazy images that have not loaded yet are skipped, broken ones fail).

- [ ] **Step 2: Phone width on the four changed pages**

`resize_window {preset: "mobile"}`; on `/`, `/about`, `/testimonials`, `/gallery` run `document.documentElement.scrollWidth <= innerWidth` → `true`. Reset to desktop.

- [ ] **Step 3: Production build**

Run: `npm run build` → `✓ built in`.

- [ ] **Step 4: Push the branch (updates the PR #2 preview)**

```bash
git push origin homepage-redesign
```
Expected: push to `homepage-redesign` only. Then `gh pr checks 2` shows the Vercel check; preview link stays `https://yemisi-git-homepage-redesign-66houdinis-projects.vercel.app`.
