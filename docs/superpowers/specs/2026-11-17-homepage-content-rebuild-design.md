# Homepage and Bio content rebuild (design)

Approved 2026-11-17.

## Intent
Oluwayemisi Adebayo's site gets her new written content, logo and photos, laid out
after her inspiration site (vusithembekwayo.com): a story-led homepage that presents
her as Strategist, Academic, Entrepreneur & Investor and Coach. The client reviews it
on the Vercel preview of PR #2 before anything goes to production.

## Goals
- Homepage carries her three statements, six role cards, Beyond The Work and reviews.
- Bio page carries the long bio.
- Simplified navigation: Home | About (Bio, Projects, Testimonials) | Media (Podcast, News, Gallery) | Contact.
- Her logo replaces the text name in the header.

## Non-goals
- No new framework, no CMS, no backend changes.
- Not merging to `main`; the client approves on the preview first.
- New reviews are not written; the three existing reviews are reused.

## Anti-goals
- Breaking existing pages: Consulting, Coaching and Certifications stay live (linked from the footer).
- Re-adding prices or phone numbers removed in the previous round.
- Presenting drafted text as the client's final words without telling the user.

## Constraints
- Existing stack: React + Vite + Tailwind + react-router, deployed on Vercel.
- Built on the `homepage-redesign` branch (PR #2) so the existing preview link updates.
- Theme stays black, a touch of purple, white.
- Files must stay UTF-8; do not rewrite files through Windows PowerShell `Get-Content`/`Set-Content` (it corrupted characters last time).

## Approaches
1. **Build on PR #2 in the existing app (picked).** Keeps the theme, the no-prices/no-phones work and the preview link.
2. A fresh standalone site or new framework: rejected, loses finished work and the Vercel setup.
3. A separate new branch and PR off `main`: rejected, would create another preview link and drop the previous round of changes.

## Design (as approved)
**Header (all pages):** white PNG logo linking home; nav Home, About dropdown (Bio `/about`,
Projects `/projects`, Testimonials `/testimonials`), Media dropdown (Podcast `/media#podcast`,
News `/media#news`, Gallery `/gallery`), Contact `/contact`; social icons kept.

**Homepage, top to bottom**
1. Hero: Stage Picture, name, tagline "Strategist | Academic | Entrepreneur & Investor | Coach", scroll cue.
2. First statement (her text, verbatim).
3. "Here's what makes the work interesting" (her second statement, verbatim) with a photo.
4. Short statement in large type, ending with "Contact Oluwayemisi Adebayo" button to the Calendly link.
5. Six role cards, drafted lines (pending her review):
   - Strategist: "Challenging conventional thinking and bridging the gap between vision and execution."
   - Entrepreneur: "Building ventures across marketing, consultancy, technology-driven services and product development."
   - Lecturer: "Connecting business theory with industry practice, so knowledge leads to application."
   - Investor: "Backing opportunities that create commercial value and sustainable business models."
   - Coach: "Helping people recognise their strengths, act with intention and own their growth."
   - Disciple of God: "Faith that grounds the work, and a purpose to serve people and leave a lasting legacy." (not from her bio; needs her review most)
6. Beyond The Work: TTS Initiative Foundation (youth-focused; education, mentorship, youth empowerment) plus the existing TTS news items.
7. What People Say: the three existing reviews (horizontal scroller).
8. Newsletter and footer (footer adds Consulting, Coaching, Certifications links).

**Pictures:** Stage Picture for the hero; Strategist.png on Strategist; LC.png on Lecturer;
BNG04797 and BNG05141 on Entrepreneur and Coach; existing site photos on Investor and
Disciple of God. Client may swap any.

**Other pages**
- Bio (`/about`): logo, tagline, the long bio verbatim.
- Testimonials (`/testimonials`, new): the three existing reviews.
- Gallery (`/gallery`, new): the five new photos plus existing photos.

## Left to the builder
Exact spacing, type sizes, responsive breakpoints, which existing photos fill the
Investor and Disciple of God cards and the gallery, image alt text.

## Assets
- Photos: LC_z4hky5.png, Strategist_oeb8qs.png, BNG04797_idifjd.jpg, Stage_Picture_pdheqc.jpg, BNG05141_zmgwcb.jpg (Cloudinary `dador6eng/image/upload/v1794934xxx/yemisi/`).
- Logos: Logo_jpeg_black, logo_png_white, logo_png_black (same Cloudinary folder).
