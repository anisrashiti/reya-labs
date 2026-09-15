# REYA Labs

Next.js App Router, TypeScript and Tailwind CSS. The homepage continues the approved hero with Work, Services, Process, About, Contact and a restrained footer.

## Run and validate

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

The static production export is `out/`.

## Approved hero

Hero geometry, wordmark, typography, CTAs, metadata and cloud positioning are preserved. Cloud opacity is 0.5 (50%). Existing navigation and CTAs now link to the relevant homepage sections. The hero wrapper is a semantic section inside the page's single main landmark.

## Homepage structure

- `components/hero.tsx`: approved introductory section.
- `components/work-section.tsx`: active project selection and desktop/mobile previews.
- `components/project-preview.tsx`: real image rendering or explicitly labelled preview placeholders.
- `components/services-section.tsx`: editorial service rows linking to Contact.
- `components/process-section.tsx`: five-step sequence.
- `components/about-section.tsx`: company description and expandable brand-name background.
- `components/contact-section.tsx`: accessible inquiry form and visible delivery state.
- `components/footer.tsx`: site navigation and location.
- `components/page-motion.tsx`: one-time viewport reveals and reduced-motion handling.
- `app/homepage.css`: all continuation styles, separate from the approved hero stylesheet.
- `config/homepage.ts`: project, service and process content.
- `config/navigation.ts`: homepage destinations.

## Projects

The routes `/work/villa-ada`, `/work/rub-beton` and `/work/mind-nexus` use the shared minimal shell in `app/work/[slug]/page.tsx`. They are not full case studies.

No real project screenshots were supplied in this repository. The visible previews are labelled placeholders, not claimed screenshots. Add final screenshots under `public/projects/<slug>/`, then update each project's `image` and `imageAlt` in `config/homepage.ts`. A wide screenshot around 1600px across works well; previews use an approximately 1.24:1 crop on desktop. `ProjectPreview` renders a responsive image automatically when a path is configured.

Desktop: pointer hover activates a row. Keyboard: Up/Down or Left/Right selects a project, Home/End jumps to the first/last project, and Tab moves to its View project link. Mobile: tap a row to show its preview and action inline.

## Contact setup

Set the real `email` and `submissionEndpoint` in `config/contact.ts`. Both are intentionally null.

Validation and submission live in `lib/contact.ts`. The future endpoint must accept JSON `{ name, company, email, message }` and return `{ success: true }` only when the inquiry has been accepted. Add server-side validation, abuse protection and delivery handling in the receiving service before enabling it. The client reports failures and keeps the visitor's text.

In the current unconnected state, submitting valid fields makes no network request, sends no message, stores no data, and explicitly tells the visitor nothing was sent. Fields remain populated. Only a confirmed successful response clears the form.

## Assets and typography

The hero uses the existing custom SVG wordmark, self-hosted Inter, and the existing generated cloud texture. See `ASSETS.md` for provenance. No additional stock photography or generated project screenshots have been introduced.
