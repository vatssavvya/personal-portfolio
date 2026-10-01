# Savya Vats · Portfolio

A complete single-page portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. The page is rendered on the server; only the mobile navigation uses a client component. It uses local system fonts, small SVG link icons, and no external widgets or image services.

## Run locally

Use Node.js 20.9 or newer and pnpm 11:

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

The committed lockfile preserves the checked dependency versions.

## Content updates

All portfolio content is in `lib/portfolio.ts`.

| Update | Exact value | How |
| --- | --- | --- |
| Resume | `site.resumeUrl` | Place your PDF at `public/resume.pdf` and set this value to `/resume.pdf`. The navigation link appears automatically. |
| Email | `site.email` | Set your email address. A mailto button appears only in the contact section. An empty string hides it. |
| Project links | `projects[].url` and optional `projects[].demoUrl` | Set a verified public URL. Omit a property to hide its button. |
| BSE project | `bseProject` | Replace `null` with an object containing `title`, `category`, `description`, `tags`, and optional `url` / `demoUrl` when the work is complete. It automatically appears in Projects. Update the BSE entry in `experiences` and the `currently` list as needed. |
| Publications | `publications` | Add entries with `title`, `venue`, `year`, and `url`. Verified publication cards appear in Research automatically. |
| Current activities | `currently` | Edit the four short strings. |
| Experience | `experiences` | Update dates, role, bullets, location, and `current` flag. |
| Research | `research` | Update descriptions and status notes when appropriate. Keep private research URLs absent until clearance. |
| Social links / SEO | `site` | Update profile URLs, title, and description. |

Example future fellowship project:

```ts
export const bseProject: Project | null = {
  title: "Verified project title",
  category: "Quantitative methods",
  description: "Describe the completed work and your actual contribution.",
  tags: ["Actual technologies"],
  // url: "Add a verified public repository URL here",
};
```

## Deploy on Vercel

1. Push the contents of this folder to your Git repository.
2. Import the repository in Vercel. If this folder is nested in a larger repository, select it as the Root Directory.
3. Use the automatically detected Next.js preset; the build command is `pnpm build`. No custom output directory is needed.
4. Set `NEXT_PUBLIC_SITE_URL` to your production origin, such as `https://your-domain.example`. This enables canonical, sitemap, and robots sitemap metadata. Redeploy after changing it.

No account credentials or API keys are required. No deployment has been made by this project setup.

## Design and accessibility

Midnight blue surfaces, pale blue accents, serif headings, and open project rows. The hero connects directly to Savya’s medical imaging research, BSE fellowship, and software projects. Decorative charts, abstract technical art, numbered labels, gradients, and repeated cards are omitted. Responsive layouts include a keyboard-accessible mobile menu, skip link, visible focus states, semantic sections, descriptive links, and reduced-motion support.

SEO and Open Graph title/description metadata are in `app/layout.tsx`. The custom SVG favicon is `app/icon.svg`, and the Apple icon is `public/apple-icon.png`. An Open Graph image is intentionally omitted because no sharing image was supplied or requested.

## Content verification

All three project URLs were matched against Savya's public GitHub repositories. The AI Research Agent repository README identifies the research assistant and structured output capabilities. Experience follows the order and role details in the supplied LinkedIn PDF: Bruin Software Engineers, Brown University, Builder Bears, then Fairleigh Dickinson University. Project descriptions use the public repository READMEs while preserving the stated scope of Savya’s contribution. Brown code has no public link; its paper remains in progress. The fellowship has no completed project claim. ClearCare describes a backend contribution to a two-person build. Publication titles and metrics have not been invented.

### Verified repositories

- https://github.com/vatssavvya/pokemon-vgc-cts-predictor
- https://github.com/vatssavvya/clearcare
- https://github.com/vatssavvya/Self-Learning-AI-Agent
