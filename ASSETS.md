# Assets

## REYA wordmark

`components/wordmark.tsx` contains custom SVG paths reconstructed from the user-supplied hero reference. The wordmark is code, not raster text, and scales without a font download. It is a close geometric approximation rather than an original vector brand master.

## Cloud atmosphere

- Production asset: `public/images/cloud-atmosphere.webp` (19,334 bytes, 1672 by 941).
- Source: `public/images/cloud-atmosphere.png`.
- Created with the built-in imagegen tool for this project; a single request.
- WebP is an encoding-only optimization of the generated PNG.
- The asset contains only clouds; all typography, controls, borders, and metadata are real HTML/SVG/CSS.

### Exact generation prompt

Use case: photorealistic-natural
Asset type: standalone cinematic cloud atmosphere bitmap for a website hero, landscape 16:9.
Primary request: A near-black #090909 background with an almost imperceptible photographic bank of dark cumulus clouds confined to the far right. The bank climbs diagonally from around 62% of image width and 58% of image height toward the upper right at 97% width and 20% height. Cloud bodies are almost black, with thin, very dim burnt-orange edge illumination on a few selected contours.
Composition/framing: Full landscape 16:9 frame. Left 60% is completely empty, uniform near-black negative space. Clouds occupy the rightmost area and fade seamlessly into the background. No horizon or landscape.
Style/medium: Photographic cinematic cloud detail, subtle organic volume, restrained contrast, dim enough to blend with a black webpage but with enough cloud detail to dim further in CSS.
Color palette: Near-black charcoal, extremely muted burnt-orange contour accents only.
Constraints: No typography, UI, logos, watermark, blue tones, bright orange, glow, particles, stars, fire, lightning, sun, or visible light source. Do not create a website screenshot; create only the standalone atmospheric bitmap.

## Typography

Supporting text uses self-hosted Inter Regular from Google Fonts (`public/fonts/inter-regular.ttf`). The SIL Open Font License is included in `public/fonts/OFL.txt`. Editorial metadata uses the system Courier New monospace font. The original reference font is unknown; Inter was selected for its close proportions.
