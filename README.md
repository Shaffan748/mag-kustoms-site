# MAG KUSTOMS website

Next.js 15.5.3, React 19.1.1 and GSAP website for custom products, vector artwork and embroidery digitizing. This project uses the Next.js App Router and exports a static website. Product and service pages are generated from shared data files.

## Quick start

Install Node.js and npm before starting. The installed Next.js version supports Node `^18.18.0 || ^19.8.0 || >=20.0.0`; this project has been built with Node 24. Git is required to clone and push the repository.

```sh
git clone https://github.com/Shaffan748/mag-kustoms-site.git
cd mag-kustoms-site
npm ci
npm run dev
```

Open http://localhost:3000. Keep the terminal running; press Ctrl+C to stop. Run all npm commands from the folder containing `package.json`. No environment variables, database or API credentials are currently required.

If port 3000 is occupied:

```sh
npm run dev -- --port 3001
```

Open http://localhost:3001 instead. Next.js also prints the selected URL in the terminal. Source changes normally refresh automatically.

## Commands and production output

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact dependencies in `package-lock.json` on a clean checkout. |
| `npm run dev` | Start development; generated files go in `.next-dev/`. |
| `npm run build` | Compile and export every configured page to `out/`; build files go in `.next/`. |
| `npm install` | Update dependencies when intentionally changing package inputs; commit the resulting lockfile. |

`npm run start` currently maps to `next start`, which is not the production runner for this project's `output: 'export'` configuration. Serve `out/` using a static web server instead. `npm run lint` currently maps to `next lint`, which is unsupported by Next.js 15; a separate ESLint setup is needed before using that script. There is no automated test script configured.

Build and preview the exported website:

```sh
npm run build
npx serve out -l 3001
```

`npx` may prompt to install `serve` the first time. Open http://localhost:3001 and stop the server with Ctrl+C. Do not enable SPA fallback (`serve -s`): this export has individual HTML files for each route.

Deploy the **contents of `out/`** to a static host after a successful build. For a hosting service that builds from GitHub, set install to `npm ci`, build to `npm run build`, and publish directory to `out`. Trailing slashes are enabled, so the host must serve nested `index.html` files. Publishing this GitHub repository alone does not deploy the website. GitHub Pages under a repository subpath requires additional base-path configuration; the current build assumes hosting at the domain root.

## Folder and project structure

```text
mag-kustoms-site/
├── app/                           Routes, page metadata and styles
│   ├── layout.js                  Shared HTML layout, metadata and SiteShell
│   ├── globals.css                Global theme, navigation and shared styles
│   ├── page.js                    Homepage entry point
│   ├── about/                     About page and about.css
│   ├── contact/                   Contact page and contact.css
│   ├── faq/                       FAQ page and faq.css
│   ├── products/
│   │   ├── page.js                Product collection index
│   │   └── [slug]/                Category and individual product template
│   ├── services/
│   │   ├── page.js                Two service overview cards
│   │   ├── services.css           Service overview and detail styling
│   │   └── [slug]/page.js         Vector Art and Digitizing detail template
│   ├── privacy-policy/page.js     Privacy page
│   ├── terms-and-conditions/      Terms page
│   ├── not-found.js               Missing-page display
│   ├── robots.js                  Generates /robots.txt
│   └── sitemap.js                 Generates /sitemap.xml
├── components/                    Shared UI and interactive components
├── lib/                           Product, service, FAQ and site data
├── public/
│   ├── images/                    Product images, branding and page graphics
│   └── icons/social/              Social icon SVG files
├── next.config.mjs                Static export, image and build settings
├── package.json                   Dependencies and npm commands
├── package-lock.json              Locked dependency versions
├── .gitignore                     Excludes local and generated files
└── README.md                      Setup and maintenance guide
```

Generated folders `.next/`, `.next-dev/`, `out/` and `node_modules/` are recreated locally and excluded from Git, as are `out.zip`, logs and environment secrets. Commit source files, public assets and the lockfile. Backup cache folders are unnecessary for normal development.

### Shared components and data

| File | Responsibility |
| --- | --- |
| `components/SiteShell.js` | Shared header, Products dropdown, mobile navigation, footer and page transitions. |
| `components/ServicesMenu.js` | Services dropdown, hover/click behavior, keyboard dismissal and service links. |
| `components/HomePageClient.js` | Homepage sections, imagery, carousels and animations. |
| `components/ProductCategoryPage.js` | Product category grids and Bags/Keychains category images. |
| `components/ProductVisual.js` | Shared product images and fallback artwork. |
| `components/ProjectForm.js` / `ProjectForm.css` | Homepage quote and contact enquiry form. |
| `components/FaqExplorer.js`, `FaqItem.js`, `FaqIcon.js` | FAQ filtering, answer toggles and icons. |
| `components/AboutStats.js` | About-page statistics presentation. |
| `components/Sections.js` | Shared section helpers and reusable grids. |
| `components/SocialLinks.js` | Social icons and destination links. |
| `components/ArrowIcon.js` | Shared arrow icon. |
| `lib/site.js` | Site identity/domain, featured products, product image mappings and generated product records. |
| `lib/product-categories.js` | Collection names, descriptions, product lists and generated slugs. |
| `lib/patch-categories.js` | Patch subgroups and their products. |
| `lib/product-descriptions.js` | Individual product description generation. |
| `lib/service-details.js` | Both service pages: headings, summaries, capabilities, placements and process steps. |
| `lib/faqs.js` | FAQ categories, questions and answers. |

## Instructions for each page

Start `npm run dev` once before following these instructions. Routes below use http://localhost:3000 as the base URL. Each page uses the same running app; no page needs a separate npm install or server.

### Home — `/`

1. Open http://localhost:3000/.
2. Edit layout and homepage content in `components/HomePageClient.js`; edit page metadata in `app/page.js`.
3. Update homepage image references in that component and store assets in `public/images/`. Use `app/globals.css` for homepage styling.
4. Verify product category links, gallery arrows/thumbnails, navigation, FAQ toggles and the quote request form.

### Products index — `/products/`

1. Open http://localhost:3000/products/.
2. Edit the overview layout in `app/products/page.js`.
3. Edit category names, headlines and descriptions in `lib/product-categories.js`.
4. Click every category card and verify its collection loads.

### Product collection pages

All collections use `app/products/[slug]/page.js` to select their data, then `components/ProductCategoryPage.js` to render it. `[slug]` is a Next.js dynamic route placeholder, not a literal URL or a folder to create for every product.

| Collection / URL | Editing steps | Checks |
| --- | --- | --- |
| Apparel — `/products/apparel/` | Edit the apparel list in `lib/product-categories.js`; edit its image mappings in `lib/site.js`. | Open each garment card and verify its image and quote link. |
| Stickers — `/products/stickers/` | Edit the stickers list in `lib/product-categories.js`; update images in `lib/site.js`. | Check each sticker card and its product page. |
| Patches — `/products/patches/` | Edit collection copy in `lib/product-categories.js`; edit subgroup cards in `lib/patch-categories.js`; update images in `lib/site.js`. | Test subgroup tabs, counts and cards for all seven current patch groups. |
| Transfers — `/products/transfers/` | Edit the transfers list in `lib/product-categories.js`; update images in `lib/site.js`. | Verify all eight transfer cards and their detail links. |
| Bags — `/products/bags/` | Edit the bags list in `lib/product-categories.js`; add product images in `lib/site.js`. | Check every bag product link. The promotional Bags category image is set separately in `components/ProductCategoryPage.js`. |
| Keychains — `/products/keychains/` | Edit the keychains list in `lib/product-categories.js`; add product images in `lib/site.js`. | Check every keychain link. The promotional Keychains category image is set separately in `components/ProductCategoryPage.js`. |
| Promotional Items — `/products/promotional-items/` | Edit the promotional list in `lib/product-categories.js`; update images in `lib/site.js`. | Check all eight products and the Bags/Keychains category cards. |

### Every individual product page — `/products/<product-slug>/`

For each product in the route inventory below:

1. Open its listed URL and confirm the correct product name appears.
2. Edit its name and short description in `lib/product-categories.js`, or `lib/patch-categories.js` for patch subgroup products. Featured product records are in `lib/site.js`.
3. Update the matching `productImages` entry in `lib/site.js`. `image` controls collection cards; `singlePageImage` controls the detail hero; `imageAlt` describes the image. Put the referenced file in `public/images/`.
4. Edit longer descriptions in `lib/product-descriptions.js`. Edit the shared layout in `app/products/[slug]/page.js` and styles in `app/products/[slug]/product-detail.css`.
5. Verify the hero image, category link, Get Quote link and four related cards. WhatsApp remains disabled until `site.whatsappNumber` is supplied in `lib/site.js` (international digits including country code).

Example image mapping:

```js
'custom-pens': {
  image: '/images/Custom Pens.webp',
  singlePageImage: '/images/Custom Pens.webp',
  imageAlt: 'Custom pens',
},
```

Use exact filenames and capitalization; production hosts may be case-sensitive. Paths start with `/images/`, not `/public/images/`. Some products intentionally use fallback artwork when no image is mapped.

### Services overview — `/services/`

1. Open http://localhost:3000/services/.
2. Edit the two-card layout, introductory copy and card image paths in `app/services/page.js`.
3. Edit card names and summaries in `lib/service-details.js`; styles are in `app/services/services.css`.
4. Verify Vector Art and Digitizing cards have equal image proportions and working detail links. Check the Services dropdown on desktop and mobile.

### Vector Art — `/services/vector-art/`

1. Open http://localhost:3000/services/vector-art/.
2. Edit the `vector-art` record in `lib/service-details.js` for the headline, introduction, nine service topics and three process steps.
3. Edit the shared detail layout in `app/services/[slug]/page.js` and styling in `app/services/services.css`.
4. Verify all nine topics, process steps, All Services and contact buttons. Its overview image is `public/images/Vector Art.png`, referenced by `app/services/page.js`.

### Digitizing — `/services/digitizing/`

1. Open http://localhost:3000/services/digitizing/.
2. Edit the `digitizing` record in `lib/service-details.js` for its headline, introduction, 12 digitizing topics, six logo placements and three process steps.
3. Edit the shared detail template in `app/services/[slug]/page.js`; styles are in `app/services/services.css`.
4. Verify the digitizing and placement sections, process steps and quote links. Its overview image is `public/images/Digitizing.webp`. Detail-topic images are not currently implemented.

### About — `/about/`

1. Open http://localhost:3000/about/.
2. Edit sections, image references, commitments and About FAQs in `app/about/page.js`.
3. Edit styles in `app/about/about.css` and statistics behavior in `components/AboutStats.js`.
4. Check the images, responsive split sections, statistics, FAQ answers and contact links. Replace temporary images when approved assets are available.

### FAQ — `/faq/`

1. Open http://localhost:3000/faq/.
2. Edit page introduction and closing copy in `app/faq/page.js`; edit questions and answers in `lib/faqs.js`.
3. Edit filters in `components/FaqExplorer.js`, answer toggles in `components/FaqItem.js`, and styles in `app/faq/faq.css`.
4. Test each category filter and answer toggle, then follow the contact links.

### Contact — `/contact/`

1. Open http://localhost:3000/contact/.
2. Edit page content, contact options and FAQs in `app/contact/page.js`; update styles in `app/contact/contact.css`.
3. Edit fields, categories and business contact details in `components/ProjectForm.js`; edit form styles in `components/ProjectForm.css`.
4. Test required fields, email validation, the message limit, Prepare Enquiry and Download Request. The form creates a downloadable text file locally; it does **not** email or send enquiries to a server.

The homepage quote form uses this same component with fewer fields and a shorter message limit. Contact details currently say “coming soon”; social links in `components/SocialLinks.js` currently point to `#`. The footer newsletter form in `components/SiteShell.js` has no subscription backend. Connect these features before advertising online submissions or newsletter signup.

### Privacy Policy — `/privacy-policy/`

1. Open http://localhost:3000/privacy-policy/.
2. Edit policy text and metadata in `app/privacy-policy/page.js` to match the actual business and data handling.
3. Verify readability, footer links and consistency with any future form integrations.

### Terms and Conditions — `/terms-and-conditions/`

1. Open http://localhost:3000/terms-and-conditions/.
2. Edit terms and metadata in `app/terms-and-conditions/page.js` to reflect the actual ordering and production process.
3. Verify footer links and references to contact details or policies.

### Missing pages, robots and sitemap

- **404:** visit `/this-page-does-not-exist/`, edit `app/not-found.js`, and test its navigation links. Your static host must use the exported `404.html` for missing routes.
- **Robots:** open `/robots.txt`, edit `app/robots.js`, and verify its sitemap URL uses the intended domain.
- **Sitemap:** open `/sitemap.xml`, edit `app/sitemap.js`, and verify listed routes exist. It currently includes static pages, collections and products; the two service detail routes still need adding if they should appear in the sitemap.
- **Shared metadata:** edit `site.url` in `lib/site.js` and review `app/layout.js` for titles, descriptions, social previews and canonical URLs. The layout currently supplies `/` as the inherited canonical; review per-page canonical metadata before production SEO sign-off.

## Adding or removing pages and products

### Add a product

1. Add its record to the relevant collection in `lib/product-categories.js`, or subgroup in `lib/patch-categories.js`.
2. Supply an explicit `productSlug` where needed. Otherwise the collection builder generates a slug from its name.
3. Add the image file and matching `productImages` entry in `lib/site.js`.
4. Adjust description rules in `lib/product-descriptions.js` if necessary.
5. Run `npm run build`; `generateStaticParams()` generates the new product HTML automatically.
6. Open its collection and detail route in both development and the exported preview.

To remove a product or patch subgroup, remove its data record and unused image/description mappings as appropriate, then rebuild. Keep shared image files if other pages still use them. Review featured records in `lib/site.js`, which can keep a product route present independently of a collection entry.

### Add a service or standalone page

1. Add a service record in `lib/service-details.js`, or create `app/<route>/page.js` for a standalone page.
2. For a service, check optional `placements` and required `capabilities`/`steps` fields against the shared template.
3. Update `components/ServicesMenu.js` and the overview image handling when adding a service; the current overview assumes exactly Vector Art and Digitizing.
4. Add navigation/footer links where needed and update `app/sitemap.js`.
5. Run a build and verify the exported route. Each new service slug is generated by the service template's `generateStaticParams()`.

## Verification and troubleshooting

For every change, run the dev server and check the affected page at desktop and mobile widths. For code, routing or data changes, run `npm run build` and inspect the affected routes using the static preview. Check dropdowns with mouse and keyboard (Tab, Enter and Escape), card links, images, forms and related products.

| Problem | What to do |
| --- | --- |
| `npm` / `node` not found | Install Node.js with npm, reopen the terminal, and verify `node --version` and `npm --version`. |
| Missing packages | Run `npm ci` from the project root. |
| Port already in use | Stop the old server or run `npm run dev -- --port 3001`. |
| Image works locally but fails on hosting | Check filename capitalization, extension and `/images/` path; ensure the asset is committed. |
| New dynamic page missing from `out/` | Confirm its record is included in the data used by `generateStaticParams()`, then rebuild. |
| `next start` fails after export | Serve `out/` with a static server instead. |
| `next lint` fails | The legacy lint command needs replacing with a configured standalone ESLint workflow. |
| Old exported content | Run `npm run build` again and redeploy the newly generated `out/` contents. |
| Windows `spawn EPERM` | Check terminal/process permissions and local security controls; retry the build in an environment allowed to start Node workers. |
| Multiple-lockfile workspace warning | Review parent-folder lockfiles; configure `outputFileTracingRoot` in `next.config.mjs` if needed. Do not delete unrelated projects' lockfiles. |

## Git and commit workflow

Keep each commit focused on one change. Describe what changed and why; use subjects such as `feat(services): add digitizing placement section`, `fix(services): make card images fill their containers`, or `docs: document setup and page maintenance`.

```sh
git status
git diff
git add README.md
git diff --cached
git commit -m "docs: document setup and page maintenance"
git push origin main
```

Stage the specific files belonging to your change instead of blindly adding unrelated edits. Build output and dependencies stay ignored. Pull remote changes before starting shared work; resolve conflicts before pushing. Do not force-push shared history for routine changes.

If Git requests an author identity, set it for this repository:

```sh
git config user.name "Your Name"
git config user.email "your-github-email@example.com"
```

Use your GitHub-associated email or your GitHub-provided noreply email. GitHub authentication is handled by your Git credential manager; never commit tokens or passwords.

## Current product route inventory

Every product below uses the individual-page steps above. The source column identifies where to edit that product's record. Image mappings are in `lib/site.js`; full descriptions and the shared detail layout are documented above.

| Product | Route | Record source |
| --- | --- | --- |
| Embroidered Patches | [/products/embroidered-patches/](http://localhost:3000/products/embroidered-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| PVC Patches | [/products/pvc-patches/](http://localhost:3000/products/pvc-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Chenille Patches | [/products/chenille-patches/](http://localhost:3000/products/chenille-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| DTF Transfers | [/products/dtf-transfers/](http://localhost:3000/products/dtf-transfers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Die Cut Stickers | [/products/die-cut-stickers/](http://localhost:3000/products/die-cut-stickers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Holographic Stickers | [/products/holographic-stickers/](http://localhost:3000/products/holographic-stickers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Poly Mailers | [/products/poly-mailers/](http://localhost:3000/products/poly-mailers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Woven Labels | [/products/woven-labels/](http://localhost:3000/products/woven-labels/) | lib/site.js |
| Custom Lanyards | [/products/custom-lanyards/](http://localhost:3000/products/custom-lanyards/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom T-Shirts | [/products/custom-t-shirts/](http://localhost:3000/products/custom-t-shirts/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Hoodies | [/products/custom-hoodies/](http://localhost:3000/products/custom-hoodies/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Sweatshirts | [/products/custom-sweatshirts/](http://localhost:3000/products/custom-sweatshirts/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Jackets | [/products/custom-jackets/](http://localhost:3000/products/custom-jackets/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Kiss Cut Stickers | [/products/kiss-cut-stickers/](http://localhost:3000/products/kiss-cut-stickers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Clear Stickers | [/products/clear-stickers/](http://localhost:3000/products/clear-stickers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Woven Patches | [/products/woven-patches/](http://localhost:3000/products/woven-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Leather Patches | [/products/leather-patches/](http://localhost:3000/products/leather-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Printed Patches | [/products/printed-patches/](http://localhost:3000/products/printed-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Iron-On Patches | [/products/iron-on-patches/](http://localhost:3000/products/iron-on-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Velcro Patches | [/products/velcro-patches/](http://localhost:3000/products/velcro-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Sew-On Patches | [/products/sew-on-patches/](http://localhost:3000/products/sew-on-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Sequin Patches | [/products/sequin-patches/](http://localhost:3000/products/sequin-patches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Classic Embroidered Patches | [/products/classic-embroidered-patches/](http://localhost:3000/products/classic-embroidered-patches/) | lib/patch-categories.js |
| 3D Puff Embroidered Patches | [/products/3d-puff-embroidered-patches/](http://localhost:3000/products/3d-puff-embroidered-patches/) | lib/patch-categories.js |
| Sequin Embroidered Patches | [/products/sequin-embroidered-patches/](http://localhost:3000/products/sequin-embroidered-patches/) | lib/patch-categories.js |
| Combination Embroidered Patches | [/products/combination-embroidered-patches/](http://localhost:3000/products/combination-embroidered-patches/) | lib/patch-categories.js |
| Chenille Letter Patches | [/products/chenille-letter-patches/](http://localhost:3000/products/chenille-letter-patches/) | lib/patch-categories.js |
| Chenille Number Patches | [/products/chenille-number-patches/](http://localhost:3000/products/chenille-number-patches/) | lib/patch-categories.js |
| Chenille Logo Patches | [/products/chenille-logo-patches/](http://localhost:3000/products/chenille-logo-patches/) | lib/patch-categories.js |
| Chenille Mascot Patches | [/products/chenille-mascot-patches/](http://localhost:3000/products/chenille-mascot-patches/) | lib/patch-categories.js |
| 2D PVC Patches | [/products/2d-pvc-patches/](http://localhost:3000/products/2d-pvc-patches/) | lib/patch-categories.js |
| 3D PVC Patches | [/products/3d-pvc-patches/](http://localhost:3000/products/3d-pvc-patches/) | lib/patch-categories.js |
| PVC Logo Patches | [/products/pvc-logo-patches/](http://localhost:3000/products/pvc-logo-patches/) | lib/patch-categories.js |
| PVC Tactical Patches | [/products/pvc-tactical-patches/](http://localhost:3000/products/pvc-tactical-patches/) | lib/patch-categories.js |
| Flat Silicone Patches | [/products/flat-silicone-patches/](http://localhost:3000/products/flat-silicone-patches/) | lib/patch-categories.js |
| Raised Silicone Patches | [/products/raised-silicone-patches/](http://localhost:3000/products/raised-silicone-patches/) | lib/patch-categories.js |
| Free Floating Silicone Patches | [/products/free-floating-silicone-patches/](http://localhost:3000/products/free-floating-silicone-patches/) | lib/patch-categories.js |
| Silicone Logo Patches | [/products/silicone-logo-patches/](http://localhost:3000/products/silicone-logo-patches/) | lib/patch-categories.js |
| Engraved Leather Patches | [/products/engraved-leather-patches/](http://localhost:3000/products/engraved-leather-patches/) | lib/patch-categories.js |
| Debossed Leather Patches | [/products/debossed-leather-patches/](http://localhost:3000/products/debossed-leather-patches/) | lib/patch-categories.js |
| Printed Leather Patches | [/products/printed-leather-patches/](http://localhost:3000/products/printed-leather-patches/) | lib/patch-categories.js |
| Faux Leather Patches | [/products/faux-leather-patches/](http://localhost:3000/products/faux-leather-patches/) | lib/patch-categories.js |
| Woven Logo Patches | [/products/woven-logo-patches/](http://localhost:3000/products/woven-logo-patches/) | lib/patch-categories.js |
| Woven Name Patches | [/products/woven-name-patches/](http://localhost:3000/products/woven-name-patches/) | lib/patch-categories.js |
| Woven Text Patches | [/products/woven-text-patches/](http://localhost:3000/products/woven-text-patches/) | lib/patch-categories.js |
| Woven Uniform Patches | [/products/woven-uniform-patches/](http://localhost:3000/products/woven-uniform-patches/) | lib/patch-categories.js |
| PU-X Logo Patches | [/products/pu-x-logo-patches/](http://localhost:3000/products/pu-x-logo-patches/) | lib/patch-categories.js |
| PU-X Letter Patches | [/products/pu-x-letter-patches/](http://localhost:3000/products/pu-x-letter-patches/) | lib/patch-categories.js |
| PU-X Number Patches | [/products/pu-x-number-patches/](http://localhost:3000/products/pu-x-number-patches/) | lib/patch-categories.js |
| PU-X Badge Patches | [/products/pu-x-badge-patches/](http://localhost:3000/products/pu-x-badge-patches/) | lib/patch-categories.js |
| DTF Gang Sheets | [/products/dtf-gang-sheets/](http://localhost:3000/products/dtf-gang-sheets/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Screen Printed Transfers | [/products/screen-printed-transfers/](http://localhost:3000/products/screen-printed-transfers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Heat Transfer Vinyl | [/products/heat-transfer-vinyl/](http://localhost:3000/products/heat-transfer-vinyl/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Sublimation Transfers | [/products/sublimation-transfers/](http://localhost:3000/products/sublimation-transfers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Glitter Transfers | [/products/glitter-transfers/](http://localhost:3000/products/glitter-transfers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Reflective Transfers | [/products/reflective-transfers/](http://localhost:3000/products/reflective-transfers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Puff Transfers | [/products/puff-transfers/](http://localhost:3000/products/puff-transfers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Bubble Mailers | [/products/bubble-mailers/](http://localhost:3000/products/bubble-mailers/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Paper Shopping Bags | [/products/paper-shopping-bags/](http://localhost:3000/products/paper-shopping-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Cotton Tote Bags | [/products/cotton-tote-bags/](http://localhost:3000/products/cotton-tote-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Canvas Tote Bags | [/products/canvas-tote-bags/](http://localhost:3000/products/canvas-tote-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Drawstring Bags | [/products/drawstring-bags/](http://localhost:3000/products/drawstring-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Non-Woven Bags | [/products/non-woven-bags/](http://localhost:3000/products/non-woven-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Gift Bags | [/products/gift-bags/](http://localhost:3000/products/gift-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Zipper Pouches | [/products/zipper-pouches/](http://localhost:3000/products/zipper-pouches/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Garment Bags | [/products/garment-bags/](http://localhost:3000/products/garment-bags/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| PVC Keychains | [/products/pvc-keychains/](http://localhost:3000/products/pvc-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Acrylic Keychains | [/products/acrylic-keychains/](http://localhost:3000/products/acrylic-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Metal Keychains | [/products/metal-keychains/](http://localhost:3000/products/metal-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Leather Keychains | [/products/leather-keychains/](http://localhost:3000/products/leather-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Embroidered Keychains | [/products/embroidered-keychains/](http://localhost:3000/products/embroidered-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Woven Keychains | [/products/woven-keychains/](http://localhost:3000/products/woven-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Rubber Keychains | [/products/rubber-keychains/](http://localhost:3000/products/rubber-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Bottle Opener Keychains | [/products/bottle-opener-keychains/](http://localhost:3000/products/bottle-opener-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Lanyard Keychains | [/products/lanyard-keychains/](http://localhost:3000/products/lanyard-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Photo Keychains | [/products/photo-keychains/](http://localhost:3000/products/photo-keychains/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Pens | [/products/custom-pens/](http://localhost:3000/products/custom-pens/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Mugs | [/products/custom-mugs/](http://localhost:3000/products/custom-mugs/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Water Bottles | [/products/water-bottles/](http://localhost:3000/products/water-bottles/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Notebooks | [/products/custom-notebooks/](http://localhost:3000/products/custom-notebooks/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Hats & Caps | [/products/custom-hats-and-caps/](http://localhost:3000/products/custom-hats-and-caps/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Button Badges | [/products/button-badges/](http://localhost:3000/products/button-badges/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
| Custom Magnets | [/products/custom-magnets/](http://localhost:3000/products/custom-magnets/) | lib/product-categories.js (featured overrides in lib/site.js where present) |
