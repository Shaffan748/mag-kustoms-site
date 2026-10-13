import { patchCategories } from './patch-categories';

const collections = [
  ['apparel', 'Apparel', 'Wear your brand. Make it yours.', 'Custom apparel for clothing brands, teams, events and everyday wear. Explore garment styles for your artwork and branding.', [
    ['Custom T-Shirts', 'Put your artwork on an everyday wardrobe staple.'],
    ['Custom Hoodies', 'Create branded hoodies for collections, teams and merchandise.'],
    ['Custom Sweatshirts', 'Bring your designs to classic crewneck sweatshirts.'],
    ['Custom Jackets', 'Finish your outerwear with custom artwork and brand details.'],
    ['Custom Caps', 'Top off your look with branded caps for teams and collections.'],
    ['Custom Polo Shirts', 'Create a polished branded look for workwear and team uniforms.'],
    ['Custom Long Sleeve Shirts', 'Bring your artwork to versatile long sleeve styles.'],
    ['Custom Tank Tops', 'Create lightweight branded styles for sports and summer collections.'],
  ]],
  ['stickers', 'Stickers', 'Make your mark on every surface.', 'Custom stickers for packaging, promotions and everyday brand moments.', [
    ['Die Cut Stickers', 'Custom shapes that follow your artwork.', 'die-cut-stickers'],
    ['Holographic Stickers', 'Reflective finishes with a colorful shimmer.', 'holographic-stickers'],
    ['Kiss Cut Stickers', 'Easy-peel designs with a backing border.'],
    ['Clear Stickers', 'Transparent backgrounds for a clean finish.'],
  ]],
  ['patches', 'Patches', 'Wear your brand with pride.', 'Discover custom patches for apparel, accessories, teams and brand collections.', [
    ['Embroidered Patches', 'Classic stitching with texture and character.', 'embroidered-patches'],
    ['PVC Patches', 'Flexible rubber for dimensional designs.', 'pvc-patches'],
    ['Chenille Patches', 'Soft varsity texture for statement artwork.', 'chenille-patches'],
    ['Woven Patches', 'Fine woven detail for intricate designs.'],
    ['Leather Patches', 'A distinctive finish for hats and accessories.'],
    ['Printed Patches', 'Full-color artwork on a patch format.'],
    ['Iron-On Patches', 'Heat-applied backing for apparel projects.'],
    ['Velcro Patches', 'Removable patches with hook-and-loop backing.'],
    ['Sew-On Patches', 'A traditional stitched attachment option.'],
    ['Sequin Patches', 'Eye-catching sparkle for statement pieces.'],
  ]],
  ['transfers', 'Transfers', 'Your artwork. Ready to wear.', 'Explore transfer formats for custom apparel, teamwear and merchandise.', [
    ['DTF Transfers', 'Full-color graphics for custom apparel.', 'dtf-transfers'],
    ['DTF Gang Sheets', 'Arrange multiple designs on a single sheet.'],
    ['Screen Printed Transfers', 'A classic option for bold apparel graphics.'],
    ['Heat Transfer Vinyl', 'Cut designs for lettering and logos.'],
    ['Sublimation Transfers', 'Colorful designs for compatible polyester fabrics.'],
    ['Glitter Transfers', 'A sparkling finish for standout graphics.'],
    ['Reflective Transfers', 'Reflective details for apparel designs.'],
    ['Puff Transfers', 'Raised texture for dimensional artwork.'],
  ]],
  ['bags', 'Bags', 'Make the packaging part of the story.', 'Custom bags for shipping, shopping, gifting and memorable brand experiences.', [
    ['Custom Poly Mailers', 'Branded mailers for your next delivery.', 'poly-mailers'],
    ['Bubble Mailers', 'Padded packaging for smaller shipments.'],
    ['Paper Shopping Bags', 'A clean branded carryout option.'],
    ['Cotton Tote Bags', 'Everyday totes with room for your artwork.'],
    ['Canvas Tote Bags', 'Structured canvas for custom carry bags.'],
    ['Drawstring Bags', 'Lightweight bags for teams and events.'],
    ['Non-Woven Bags', 'Reusable bags for promotional campaigns.'],
    ['Gift Bags', 'Finish your gifts with branded packaging.'],
    ['Zipper Pouches', 'Compact storage for accessories and essentials.'],
    ['Garment Bags', 'Branded packaging for apparel collections.'],
  ]],
  ['keychains', 'Keychains', 'A little detail that goes everywhere.', 'Custom keychains that keep your artwork, logo and brand close at hand.', [
    ['PVC Keychains', 'Flexible custom shapes with dimensional detail.'],
    ['Acrylic Keychains', 'Clear acrylic with colorful printed artwork.'],
    ['Metal Keychains', 'A polished metal format for your logo.'],
    ['Leather Keychains', 'A textured finish for everyday accessories.'],
    ['Embroidered Keychains', 'Stitched designs in a compact format.'],
    ['Woven Keychains', 'Woven details for text and brand graphics.'],
    ['Rubber Keychains', 'Soft rubber designs in custom shapes.'],
    ['Bottle Opener Keychains', 'A practical accessory with your branding.'],
    ['Lanyard Keychains', 'Short branded straps for carrying keys.'],
    ['Photo Keychains', 'Personalized artwork and photo designs.'],
  ]],
  ['promotional-items', 'Promotional Items', 'Make your brand part of the everyday.', 'Branded essentials for events, teams, launches and thoughtful giveaways.', [
    ['Custom Lanyards', 'Branded straps for events and teams.', 'custom-lanyards'],
    ['Custom Pens', 'Everyday writing essentials with your logo.'],
    ['Custom Mugs', 'Put your artwork on a daily favorite.'],
    ['Water Bottles', 'Branded drinkware for work and travel.'],
    ['Custom Notebooks', 'Give every idea a branded home.'],
    ['Custom Hats & Caps', 'Wearable branding for teams and collections.'],
    ['Button Badges', 'Compact designs for events and campaigns.'],
    ['Custom Magnets', 'Keep your branding on display.'],
  ]],
];

export const productCategories = collections.map(([slug, name, headline, description, items]) => ({
  slug, name, headline, description,
  ...(slug === 'patches' ? { groups: patchCategories } : {}),
  products: items.map(([name, description, productSlug]) => ({ name, description, productSlug: productSlug || name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") })),
}));

const promotionalCategory = productCategories.find(category => category.slug === 'promotional-items');
promotionalCategory.subcategories = productCategories.filter(category => ['bags', 'keychains'].includes(category.slug));
