const details = {
  Apparel: ['personalized clothing for your brand, team or collection', 'Plan your artwork placement, garment sizes and color direction around the look you want.'],
  Stickers: ['custom artwork for packaging, merchandise and promotions', 'Choose dimensions and artwork that suit your surface, packaging or campaign.'],
  Patches: ['distinctive branding for garments, hats and accessories', 'Share your preferred size, shape and attachment method to guide your patch design.'],
  'Embroidered Patches': ['stitched branding with texture and character', 'Plan thread colors, lettering and borders around the detail in your artwork.'],
  'Chenille Patches': ['varsity-inspired branding with a soft, textured look', 'Plan bold shapes, contrasting colors and embroidered accents around your design.'],
  'PVC Patches': ['molded artwork for apparel, accessories and team gear', 'Choose a shape, color palette and dimensional layout to suit your logo.'],
  'Silicone Patches': ['soft silicone branding for apparel and accessories', 'Plan the artwork layout, lettering and placement to suit your garment.'],
  'Leather Patches': ['leather-style detailing for apparel and accessories', 'Share your preferred finish, dimensions and placement for a coordinated brand look.'],
  'Woven Patches': ['woven branding for lettering and detailed artwork', 'Plan readable text, balanced colors and a shape that suits your garment.'],
  'PU-X Patches': ['custom patch detailing for apparel and accessories', 'Share your shape, dimensions and color direction to guide your design.'],
  Transfers: ['custom graphics for apparel and merchandise', 'Share your artwork size and garment type to help choose suitable application details.'],
  Bags: ['branded packaging for shopping, shipping and gifting', 'Choose dimensions, artwork placement and quantities around what your bag needs to carry.'],
  Packaging: ['branded packaging for memorable deliveries', 'Share package dimensions, logo placement and quantities to guide your packaging design.'],
  Keychains: ['portable branding for merchandise, events and giveaways', 'Plan your artwork size, shape and attachment preferences for an everyday accessory.'],
  'Promotional Items': ['everyday branded products for events and campaigns', 'Share the artwork placement, quantities and intended use to guide your project.'],
  Promotional: ['branded accessories for events, teams and campaigns', 'Plan logo placement, color direction and accessory options around your event or brand.'],
  Labels: ['identifying brand details for garments and accessories', 'Share label dimensions, fold preferences and logo artwork to suit your product placement.'],
};

const apparelDescriptions = {
  'custom-t-shirts': 'Custom T-Shirts by MAG KUSTOMS put your identity on an everyday wardrobe staple. Create artwork for clothing collections, teamwear or event merchandise. Plan front, back or smaller logo placements around your design. Share garment sizes, color preferences and quantities for a quote tailored to your project.',
  'custom-hoodies': 'Custom Hoodies by MAG KUSTOMS bring your artwork to casual apparel and branded collections. Create a coordinated look for teams, launches or everyday merchandise. Plan logo placement and artwork scale around the hoodie style. Share your preferred colors, sizes and quantities to start your custom project.',
  'custom-sweatshirts': 'Custom Sweatshirts by MAG KUSTOMS give classic crewneck apparel your own brand identity. Use logos, lettering or illustrated artwork for collections and teamwear. Plan design scale and placement to complement the garment. Share colors, sizes and quantities for a quote based on your project.',
  'custom-jackets': 'Custom Jackets by MAG KUSTOMS turn outerwear into a statement for your brand or team. Plan a chest logo, back graphic or sleeve detail around your jacket style. Coordinate artwork placement and colors with your collection. Share garment sizes, quantities and design references for a tailored quote.',
};

export function getProductDescription(product) {
  if (apparelDescriptions[product.slug]) return apparelDescriptions[product.slug];
  const [purpose, customization] = details[product.category] || details.Patches;
  return `${product.name} by MAG KUSTOMS offer ${purpose}. ${product.blurb} ${customization} Send your design and required quantity for a quote tailored to your project.`;
}
