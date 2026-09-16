# Deleglow Academy — Website

A static, responsive marketing site for Deleglow Academy: a global literacy
platform for educators, parents, and program partners.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About Us | `about-us.html` |
| About Deleglow Academy | `about-academy.html` |
| Resources | `resources.html` |
| How It Works | `how-it-works.html` |
| Get Started | `get-started.html` |
| Contact | `contact.html` |

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework,
no dependencies. Fonts (Fraunces + Manrope) load from Google Fonts.

- `styles.css` — the full design system (colors, type, layout, components)
- `script.js` — mobile nav toggle + placeholder form-submit handling

## Deploying on Vercel

This is a static site, so it deploys with zero configuration:

1. Import this repo into Vercel.
2. Framework preset: **Other** (or "Static").
3. Build command: none. Output directory: `/` (root).
4. Deploy.

## Before you launch — replace these placeholders

The design and structure are finished, but the following content is
placeholder and should be swapped for real details:

- **Contact details**: `hello@deleglowacademy.org` and
  `partners@deleglowacademy.org` appear in the footer and Contact page.
- **Team roster**: names, roles, and photos on `about-us.html`.
- **Stats**: the "40+ countries / 12,000+ learners" strip on the homepage.
- **Testimonial quote** on the homepage.
- **Resource links**: every "Download PDF" / "Watch training" link on
  `resources.html` currently points to `#`.
- **Forms**: both `get-started.html` and `contact.html` have a working
  front-end form that shows a confirmation message on submit, but nothing
  is wired up to actually receive submissions yet. Connect them to a form
  service (e.g. Formspree), a serverless function, or your CRM.
- **Logo**: the current mark is a simple inline SVG (open book + glow
  dot). Swap in a real logo file if you have one.

## Editing content

Every page is a self-contained HTML file with shared `styles.css` and
`script.js` — there's no templating, so header/nav/footer are repeated
in each file. Update text directly in the HTML; shared visual changes
(colors, spacing, fonts) go in `styles.css`.
