# Verification

- `pnpm install`: completed with pinned Next.js 16.3.7 and the committed lockfile.
- `pnpm lint`: passed with no errors or warnings after fixing the PostCSS export.
- `pnpm exec next build --webpack`: passed; the portfolio is prerendered as a static route.
- `pnpm typecheck`: passed.
- Production server: returned HTTP 200 for the root, JavaScript/CSS bundles, favicon, Apple icon, robots, and sitemap routes.
- Browser console: no errors or warnings during the production preview review.
- Responsive review: rendered widths of 320, 355, 416, 433, 853, 1138, and 1600 CSS pixels showed no horizontal overflow. Full desktop and mobile layouts were visually reviewed.
- Mobile navigation: opens, closes with Escape while a navigation link is focused, and closes after selecting Projects.
- Section links: every fragment points to an existing element.
- External links: GitHub profile, LinkedIn profile, and all three project repositories returned HTTP 200. Repository names/descriptions and project README content were checked to confirm matches.
- Content: the Brown paper is in progress and code private; the BSE fellowship is in progress; ClearCare states a backend contribution to a two-person project; no invented performance metrics, publication titles, internships, or extra abandoned project are included.
- Resume/email: no placeholder link is shown; both remain configurable.
- Publication/fellowship cards: data slots are present and hidden until populated.
- Reduced motion: stylesheet disables animation, transitions, and smooth scrolling under `prefers-reduced-motion: reduce`.

Lighthouse scores were not measured. No Vercel deployment was performed; deployment instructions are in README.md.

## LinkedIn content update

Experience order and role details were checked against the supplied three-page LinkedIn export. Project descriptions were checked against the three public repository READMEs. The PDF has no Projects section. No em dashes are present in the rendered page. Lint, production build, and type checking passed; the updated desktop and mobile preview showed no console errors or horizontal overflow.

## Blue design update

Lint, Webpack production build, and type checking passed. Desktop and mobile views were reviewed. Internal section links resolve; mobile navigation closes with Escape and after selecting a section. No console errors or horizontal overflow were observed. Each section has a single labeled heading. The favicon, Apple icon, and browser theme color use the blue palette. Decorative illustration and chart components were removed.

## Social links, contact, typography, and motion

- Lint, webpack production build, and TypeScript checks passed.
- Browser inspection confirmed GitHub and LinkedIn profile destinations in the hero, section headings, Contact, and footer. Project title links match their repository links.
- UCLA email is visible as `vatssavvya@ucla.edu`, with the matching mailto destination.
- Desktop and mobile contact layouts reviewed. Mobile navigation closes after choosing Contact; no horizontal overflow at the tested mobile width. Browser error log was empty.
- Motion uses one-time intersection reveals with cleanup. Content is never hidden by CSS or dependent on JavaScript to appear. Reduced-motion preferences skip Web Animations and disable CSS motion.
