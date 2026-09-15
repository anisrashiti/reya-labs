# REYA Labs

A responsive reconstruction of the supplied REYA Labs homepage hero. Scope is limited to the foundation and hero: no later sections, pages, forms, or footer.

## Development

```powershell
npm.cmd install
npm.cmd run dev
```

## Validation and static export

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

The production export is written to `out/`.

## Main files

- `components/hero.tsx`: hero composition, location badge, editorial details.
- `components/wordmark.tsx`: custom vector REYA lettering, drawn against the supplied reference.
- `components/navbar.tsx`: responsive navigation with keyboard-operable mobile menu.
- `components/cta-button.tsx`: shared CTA treatment.
- `components/destination-link.tsx`: accessible future-destination controls.
- `config/navigation.ts`: navigation and CTA destinations.
- `app/globals.css`: responsive layout, palette, typography, and reduced-motion-aware entrances.
- `app/layout.tsx`: metadata and document structure.
- `ASSETS.md`: asset provenance and generation prompt.

## Scope and deliberate differences

The written brief overrides the reference's supporting copy and metadata: “built for modern businesses,” “BUILT / WITH / INTENT,” and “EST. 2026.” The supplied screenshot is a visual reference, never a page background.

The REYA mark is custom SVG geometry. Supporting text uses self-hosted Inter and editorial metadata uses Courier New; no external font requests are made. Cloud contours are a generated approximation of the reference, dimmed and integrated with CSS.

Work, Services, About, and Contact are intentionally not implemented. Their navigation controls and both CTAs are focusable, marked `aria-disabled`, and have no invented destination. Set the values in `config/navigation.ts` to real URLs/section anchors when that work is commissioned. The mobile menu opens, closes, and returns focus on Escape. The scroll caption is decorative until later homepage content exists.

