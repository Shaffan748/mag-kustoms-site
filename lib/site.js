import { patchCategories } from './patch-categories';
import { productCategories } from './product-categories';

export const site = {
  name: 'MAG KUSTOMS',
  title: 'MAG KUSTOMS | Custom Patches, Transfers, Stickers & Branding',
  description: 'Premium custom patches, DTF transfers, stickers, packaging and branding solutions built for brands that want to stand out.',
  url: 'https://magkustoms.com',
};

const featuredProducts = [
  { slug: 'embroidered-patches', name: 'Embroidered Patches', category: 'Patches', image: '/images/Embroidered Patriotic Eagle Patch.png', singlePageImage: '/images/Embroidered Patriotic Eagle Patch-singlepage.png', blurb: 'Classic stitched patches with sharp detail, premium thread and durable finishing.', tags: ['Merrow border','Iron-on','Sew-on'] },
  { slug: 'pvc-patches', name: 'PVC Patches', category: 'Patches', blurb: 'Flexible rubber patches built for bold logos, outdoor use and modern merch.', tags: ['2D / 3D','Weather resistant','Custom shapes'] },
  { slug: 'chenille-patches', name: 'Chenille Patches', category: 'Patches', blurb: 'Soft varsity-style texture made for statement logos, initials and apparel.', tags: ['Varsity look','Felt base','Layered finish'] },
  { slug: 'dtf-transfers', name: 'DTF Transfers', category: 'Transfers', image: '/images/Duck.webp', singlePageImage: '/images/Duck-singlepage.png', imageAlt: 'Duck DTF transfer design', blurb: 'Vibrant heat-applied graphics with smooth detail for apparel and merch production.', tags: ['Full color','Fine detail','Fast application'] },
  { slug: 'die-cut-stickers', name: 'Die Cut Stickers', category: 'Stickers', image: '/images/Morningside Excellence Embroidered Crest.png', singlePageImage: '/images/Morningside Excellence Embroidered Crest-singlepage.png', imageAlt: 'Morningside Excellence Embroidered Crest', blurb: 'Custom-cut branding stickers with crisp print, durable vinyl and clean edges.', tags: ['Custom shape','Laminated','Outdoor ready'] },
  { slug: 'holographic-stickers', name: 'Holographic Stickers', category: 'Stickers', blurb: 'High-impact reflective stickers that shift color and make packaging pop.', tags: ['Holographic film','Custom cut','High impact'] },
  { slug: 'poly-mailers', name: 'Custom Poly Mailers', category: 'Packaging', image: '/images/Custom Poly Mailers.png', singlePageImage: '/images/Custom Poly Mailers-singlepage.png', imageAlt: 'Custom Poly Mailers', blurb: 'Branded shipping mailers designed to turn every delivery into a brand moment.', tags: ['Custom print','Multiple sizes','E-commerce ready'] },
  { slug: 'woven-labels', name: 'Woven Labels', category: 'Labels', image: '/images/Labels Woven.png', singlePageImage: '/images/Labels Woven-singlepage.png', imageAlt: 'Woven labels', blurb: 'Premium woven labels for garments, apparel, accessories and private-label brands.', tags: ['Soft weave','Fold options','Brand ready'] },
  { slug: 'custom-lanyards', name: 'Custom Lanyards', category: 'Promotional', image: '/images/image03.png', singlePageImage: '/images/image03-singlepage.png', imageAlt: 'Custom promotional products', blurb: 'Custom lanyards for teams, events, launches and branded merchandise.', tags: ['Full color','Hardware options','Bulk friendly'] }
];

export const services = [
  ['Embroidery Digitizing','Production-ready embroidery files optimized for stitch quality and clean results.'],
  ['Vector Art','Low-resolution artwork rebuilt as clean scalable vector graphics for print and production.'],
  ['Artwork Preparation','We refine sizing, linework, spacing and production details before manufacturing.'],
  ['Digital Mockups','Approve a polished visual proof before your custom product enters production.'],
];

const productImages = {
  'custom-caps': { image: '/images/custom-caps.png', singlePageImage: '/images/custom-caps.png', imageAlt: 'Black custom cap with orange embroidered branding' },
  'custom-long-sleeve-shirts': { image: '/images/custom-long-sleeve-shirts.png', singlePageImage: '/images/custom-long-sleeve-shirts.png', imageAlt: 'Black custom long sleeve shirt with orange chest branding' },
  'custom-tank-tops': { image: '/images/custom-tank-tops.png', singlePageImage: '/images/custom-tank-tops.png', imageAlt: 'Black custom tank top with orange chest branding' },
  'custom-polo-shirts': { image: '/images/Custom Polo Shirts.webp', singlePageImage: '/images/Custom Polo Shirts.webp', imageAlt: 'Custom polo shirts' },
  'custom-notebooks': { image: '/images/Custom Notebooks.webp', singlePageImage: '/images/Custom Notebooks.webp', imageAlt: 'Custom notebooks' },
  'custom-hats-and-caps': { image: '/images/Custom Hats & Caps.jpg', singlePageImage: '/images/Custom Hats & Caps.jpg', imageAlt: 'Custom hats and caps' },
  'button-badges': { image: '/images/Button Badges2.jpg', singlePageImage: '/images/Button Badges2.jpg', imageAlt: 'Button badges' },
  'custom-magnets': { image: '/images/Custom Magnets.jpg', singlePageImage: '/images/Custom Magnets.jpg', imageAlt: 'Custom magnets' },
  'custom-pens': { image: '/images/Custom Pens.webp', singlePageImage: '/images/Custom Pens.webp', imageAlt: 'Custom pens' },
  'custom-mugs': { image: '/images/Custom Mugs.jpg', singlePageImage: '/images/Custom Mugs.jpg', imageAlt: 'Custom mugs' },
  'water-bottles': { image: '/images/Water Bottles.jpg', singlePageImage: '/images/Water Bottles.jpg', imageAlt: 'Water bottles' },
  'puff-transfers': { image: '/images/Puff Transfers.webp', singlePageImage: '/images/Puff Transfers.webp', imageAlt: 'Puff transfers' },
  'sublimation-transfers': { image: '/images/Sublimation Transfers.jpg', singlePageImage: '/images/Sublimation Transfers.jpg', imageAlt: 'Sublimation transfers' },
  'glitter-transfers': { image: '/images/Glitter Transfers.webp', singlePageImage: '/images/Glitter Transfers.webp', imageAlt: 'Glitter transfers' },
  'reflective-transfers': { image: '/images/Reflective Transfers.jpg', singlePageImage: '/images/Reflective Transfers.jpg', imageAlt: 'Reflective transfers' },
  'dtf-gang-sheets': { image: '/images/DTF Gang Sheets.jpg', singlePageImage: '/images/DTF Gang Sheets.jpg', imageAlt: 'DTF gang sheets' },
  'screen-printed-transfers': { image: '/images/Screen Printed Transfers.jpg', singlePageImage: '/images/Screen Printed Transfers.jpg', imageAlt: 'Screen printed transfers' },
  'heat-transfer-vinyl': { image: '/images/Heat Transfer Vinyl.webp', singlePageImage: '/images/Heat Transfer Vinyl.webp', imageAlt: 'Heat transfer vinyl' },
  'pu-x-logo-patches': { image: '/images/PU-X Logo Patches.jpg', singlePageImage: '/images/PU-X Logo Patches.jpg', imageAlt: 'PU-X logo patches' },
  'pu-x-letter-patches': { image: '/images/PU-X Letter Patches.jpg', singlePageImage: '/images/PU-X Letter Patches.jpg', imageAlt: 'PU-X letter patches' },
  'pu-x-number-patches': { image: '/images/PU-X Number Patches.jpg', singlePageImage: '/images/PU-X Number Patches.jpg', imageAlt: 'PU-X number patches' },
  'pu-x-badge-patches': { image: '/images/PU-X Badge Patches.webp', singlePageImage: '/images/PU-X Badge Patches.webp', imageAlt: 'PU-X badge patches' },
  'woven-logo-patches': { image: '/images/Woven Logo Patches.webp', singlePageImage: '/images/Woven Logo Patches.webp', imageAlt: 'Woven logo patches' },
  'woven-name-patches': { image: '/images/Woven Name Patches2.jpg', singlePageImage: '/images/Woven Name Patches2.jpg', imageAlt: 'Woven name patches' },
  'woven-text-patches': { image: '/images/Woven Text Patches.jpg', singlePageImage: '/images/Woven Text Patches.jpg', imageAlt: 'Woven text patches' },
  'woven-uniform-patches': { image: '/images/Woven Uniform Patches.jpg', singlePageImage: '/images/Woven Uniform Patches.jpg', imageAlt: 'Woven uniform patches' },
  'engraved-leather-patches': { image: '/images/Engraved Leather Patches.webp', singlePageImage: '/images/Engraved Leather Patches.webp', imageAlt: 'Engraved leather patches' },
  'debossed-leather-patches': { image: '/images/Debossed Leather Patches.webp', singlePageImage: '/images/Debossed Leather Patches.webp', imageAlt: 'Debossed leather patches' },
  'printed-leather-patches': { image: '/images/Printed Leather Patches.jpg', singlePageImage: '/images/Printed Leather Patches.jpg', imageAlt: 'Printed leather patches' },
  'faux-leather-patches': { image: '/images/Faux Leather Patches.jpg', singlePageImage: '/images/Faux Leather Patches.jpg', imageAlt: 'Faux leather patches' },
  'flat-silicone-patches': { image: '/images/Flat Silicone Patches.jpg', singlePageImage: '/images/Flat Silicone Patches.jpg', imageAlt: 'Flat silicone patches' },
  'raised-silicone-patches': { image: '/images/Raised Silicone Patches.jpg', singlePageImage: '/images/Raised Silicone Patches.jpg', imageAlt: 'Raised silicone patches' },
  'free-floating-silicone-patches': { image: '/images/Free Floating Silicone Patches.jpg', singlePageImage: '/images/Free Floating Silicone Patches.jpg', imageAlt: 'Free floating silicone patches' },
  'silicone-logo-patches': { image: '/images/Silicone Logo Patches.jpg', singlePageImage: '/images/Silicone Logo Patches.jpg', imageAlt: 'Silicone logo patches' },
  'classic-embroidered-patches': { image: '/images/Classic Embroidered Patches.jpg', singlePageImage: '/images/Classic Embroidered Patches.jpg', imageAlt: 'Classic embroidered patches' },
  '3d-puff-embroidered-patches': { image: '/images/3D Puff Embroidered Patches.jpg', singlePageImage: '/images/3D Puff Embroidered Patches.jpg', imageAlt: '3D puff embroidered patches' },
  'sequin-embroidered-patches': { image: '/images/Sequin Embroidered Patches.jpg', singlePageImage: '/images/Sequin Embroidered Patches.jpg', imageAlt: 'Sequin embroidered patches' },
  'combination-embroidered-patches': { image: '/images/Combination Embroidered Patches.jpg', singlePageImage: '/images/Combination Embroidered Patches.jpg', imageAlt: 'Combination embroidered patches' },
  '2d-pvc-patches': { image: '/images/2D PVC Patches.jpg', singlePageImage: '/images/2D PVC Patches.jpg', imageAlt: '2D PVC patches' },
  '3d-pvc-patches': { image: '/images/3D PVC Patches.jpg', singlePageImage: '/images/3D PVC Patches.jpg', imageAlt: '3D PVC patches' },
  'pvc-logo-patches': { image: '/images/PVC Logo Patches.jpg', singlePageImage: '/images/PVC Logo Patches.jpg', imageAlt: 'PVC logo patches' },
  'pvc-tactical-patches': { image: '/images/PVC Tactical Patches.webp', singlePageImage: '/images/PVC Tactical Patches.webp', imageAlt: 'PVC tactical patches' },
  'chenille-letter-patches': { image: '/images/Chenille Letter Patches.webp', singlePageImage: '/images/Chenille Letter Patches.webp', imageAlt: 'Chenille letter patches' },
  'chenille-number-patches': { image: '/images/Chenille Number Patches.jpg', singlePageImage: '/images/Chenille Number Patches.jpg', imageAlt: 'Chenille number patches' },
  'chenille-logo-patches': { image: '/images/Chenille Logo Patches.webp', singlePageImage: '/images/Chenille Logo Patches.webp', imageAlt: 'Chenille logo patches' },
  'chenille-mascot-patches': { image: '/images/Chenille Mascot Patches.jpg', singlePageImage: '/images/Chenille Mascot Patches.jpg', imageAlt: 'Chenille mascot patches' },
  'die-cut-stickers': { image: '/images/die_cut_sticker.webp', singlePageImage: '/images/die_cut_sticker.webp', imageAlt: 'Custom die cut stickers' },
  'holographic-stickers': { image: '/images/Holographic Stickers.jpg', singlePageImage: '/images/Holographic Stickers.jpg', imageAlt: 'Custom holographic stickers' },
  'kiss-cut-stickers': { image: '/images/Kiss Cut Stickers.jpg', singlePageImage: '/images/Kiss Cut Stickers.jpg', imageAlt: 'Custom kiss cut stickers' },
  'clear-stickers': { image: '/images/Clear Stickers.webp', singlePageImage: '/images/Clear Stickers.webp', imageAlt: 'Custom clear stickers' },
  'custom-jackets': { image: '/images/Custom Jackets.jpg', singlePageImage: '/images/Custom Jackets.jpg', imageAlt: 'Custom jacket' },
  'custom-sweatshirts': { image: '/images/Custom Sweatshirts.jpg', singlePageImage: '/images/Custom Sweatshirts.jpg', imageAlt: 'Custom sweatshirt' },
  'custom-hoodies': { image: '/images/custom-hoodies.jpg', singlePageImage: '/images/custom-hoodies.jpg', imageAlt: 'Custom hoodie' },
  'custom-t-shirts': { image: '/images/custom-tshirt.webp', singlePageImage: '/images/custom-tshirt.webp', imageAlt: 'Custom black T-shirt with a printed design' },
};

export const products = [
  ...featuredProducts.map(product => ({ ...product, ...productImages[product.slug] })),
  ...productCategories.flatMap(category => [...category.products, ...(category.groups || []).flatMap(group => group.products)]
    .filter((item, index, items) => items.findIndex(other => other.productSlug === item.productSlug) === index)
    .filter(item => !featuredProducts.some(product => product.slug === item.productSlug))
    .map(item => ({ slug: item.productSlug, name: item.name, category: patchCategories.find(group => group.products.some(product => product.productSlug === item.productSlug))?.name || category.name, blurb: item.description, tags: ['Custom artwork', 'Made for your brand'], ...productImages[item.productSlug] }))),
];
