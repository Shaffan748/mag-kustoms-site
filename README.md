# MAG KUSTOMS — Premium Animated Website

Static-export ready Next.js/React website rebuilt around the approved MAG KUSTOMS black / gunmetal / electric-orange visual direction.

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Production build

```bash
npm run build
```

The project uses `output: 'export'`; static output is created in `/out`.

## Design system

- Deep Black: `#0B0B0B`
- Gunmetal: `#4B4F55`
- Electric Orange: `#FF6A00`
- Off White: `#F5F5F5`
- Headings / display: Orbitron
- Body / UI: Inter

## Homepage implementation

- Fixed premium navigation with compact quote CTA
- Cinematic hero matching the approved reference composition
- Product category card strip
- Why MAG KUSTOMS benefits section
- Large embroidered-patch feature showcase
- Five-step production process
- Filter-style portfolio / work gallery
- Full-width quote promo banner
- Testimonials
- FAQ accordion
- Multi-column footer

## Motion / interaction

GSAP is used for:

- Hero staggered text entrance
- Hero product reveal and parallax
- ScrollTrigger section reveals
- Staggered cards
- Featured image scroll zoom
- Process line animation
- Magnetic CTA buttons
- Interactive tilt cards
- Page wipe transitions

Motion automatically respects `prefers-reduced-motion`.

## Performance / SEO

- Static Next.js export
- Responsive WebP visual assets
- Lazy-loaded non-critical images through Next Image
- Semantic headings and landmarks
- Page metadata / descriptions
- Open Graph + Twitter metadata
- Canonicals
- Sitemap + robots
- Organization JSON-LD
- Responsive layouts for desktop, laptop, tablet and mobile

## Before launch

Replace placeholder contact/social links and connect the Quote form to the preferred backend/email service when ready.
