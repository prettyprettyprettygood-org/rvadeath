# Working preferences

- Do not run Playwright, take screenshots, or otherwise test changes in a browser after every small edit. Only do so when explicitly asked, or when the user sends a screenshot for review. The user will request testing when they want it.

# Code standards

- Follow WCAG 2.2 AA accessibility guidelines: semantic HTML, sufficient color contrast, keyboard navigability, proper alt text, focus states, and ARIA only when semantic HTML isn't enough.
- Write clean code: clear naming, small focused functions/components, no dead code or leftover debug statements.
- Follow general web/Astro best practices: avoid unnecessary dependencies, keep components composable, prefer static/server rendering where possible, optimize images and assets.
