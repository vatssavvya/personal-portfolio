# Portfolio design decisions

The blue redesign treats this site as a personal research and engineering portfolio. It uses midnight blue (#101722), pale blue (#91b9e8), muted slate, and off-white. Georgia headings pair with a simple system sans-serif. The monogram uses Savya’s initials; the introduction includes Savya’s New York City background and UCLA studies.

The hero sidebar links to actual research, fellowship, and project sections. Project entries use distinct titles and descriptions in open rows, with the VGC predictor emphasized by typography and a blue rule. The experience section retains the LinkedIn order. No decorative chart implies project results, and no stock laboratory icon substitutes for a description of computational research.

## Research

These patterns are design judgments, not reliable tests of whether a website was made with AI.

- [Anthropic: Improving frontend design through Skills](https://claude.com/blog/improving-frontend-design-through-skills) discusses how generated frontends tend toward familiar typography, gradients, and standard layouts when design direction is missing.
- [NN/g: Aesthetic and Minimalist Design](https://www.nngroup.com/articles/aesthetic-minimalist-design/) recommends prioritizing relevant information and reducing unnecessary visual competition.
- [NN/g: Flat-Design Best Practices](https://www.nngroup.com/articles/flat-design-best-practices/) emphasizes keeping controls recognizable and preserving usability when reducing decorative effects.

## Removed from the previous design

- Abstract wireframe cube and dotted technical background.
- Conceptual probability plot with no actual project data.
- Repeated bordered project cards, gradients, and rounded skill badges.
- Numbered section and project labels, generic flask icons, and the repeated uppercase focus strip.
- Introductory reveal animations and extra section headings announced by screen readers.

All accents use CSS variables in app/globals.css. Content remains in lib/portfolio.ts. SVG icon and Apple icon colors are updated with the palette.

## Editorial refinement

The hero uses an oversized serif name with an italic surname. Its supporting work links sit behind a vertical rule, giving the main introduction more space. About uses a serif lead with a compact education panel. The featured project gets a single contrasting surface; other projects retain open rows. Research uses vertical accent rules. Contact switches to pale blue with dark text and controls. This creates distinct moments across the page without adding decorative graphics or new claims. The undecided math minor has been removed from About and Education.
