import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from './ArrowIcon';
import { products } from '../lib/site';

const categoryImages = {
  bags: '/images/custom bags.jpg',
  keychains: '/images/Keychains.png',
};

const shapes = {
  apparel: 'm8 3-5 3 3 5 2-1v11h8V10l2 1 3-5-5-3a4 4 0 0 1-8 0Z',
  stickers: 'M6 3h12a3 3 0 0 1 3 3v8l-7 7H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm8 18v-5a2 2 0 0 1 2-2h5',
  patches: 'm12 3 8 4v6c0 4-8 8-8 8s-8-4-8-8V7l8-4Zm-4 9 3 3 5-6',
  transfers: 'm3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4',
  bags: 'M5 8h14l2 13H3L5 8Zm3 0V6a4 4 0 0 1 8 0v2',
  keychains: 'M14 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 9v4m0 0 5-2 5 5-5 5-5-5v-3Z',
  'promotional-items': 'M3 8h18v4H3V8Zm2 4v9h14v-9M12 8v13m0-13H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z',
};

export default function ProductCategoryPage({ category }) {
  const groups = category.groups || [{ slug: category.slug, name: category.name, products: category.products }];
  const count = groups.reduce((total, group) => total + group.products.length, 0);
  return <>
    <section className="page-hero category-page-hero">
      <p className="eyebrow">MAG KUSTOMS / {category.name}</p>
      <h1>{category.name}<span>{category.headline}</span></h1>
      <p>{category.description}</p>
      <div className="category-hero-meta"><span>{count} product styles</span>{category.groups && <span>{groups.length} patch categories</span>}<span>Custom artwork</span><span>Made for your brand</span></div>
    </section>
    <section className="section category-collection">
      {category.subcategories && <section aria-label="Promotional product categories" style={{ marginBottom: 48 }}>
        <div className="category-collection-heading"><div><p className="eyebrow">Explore categories</p><h2>Bags &amp; Keychains</h2></div></div>
        <div className="category-products-grid">{category.subcategories.map(item => <Link key={item.slug} href={`/products/${item.slug}`} className="category-product-card">
          <div className={`category-product-art${categoryImages[item.slug] ? ' category-product-art-full' : ''}`}>{categoryImages[item.slug] ? <Image src={categoryImages[item.slug]} alt={item.name} fill sizes="(max-width:620px) 100vw, (max-width:1100px) 50vw, 25vw" style={{ objectFit: 'cover', objectPosition: 'center', padding: 0 }} /> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={shapes[item.slug]} /></svg>}</div>
          <div className="category-product-copy"><span>Promotional Items</span><h3>{item.name}</h3><p>{item.description}</p><div>Explore {item.name}<ArrowIcon /></div></div>
        </Link>)}</div>
      </section>}
      <div className="category-collection-heading"><div><p className="eyebrow">The collection</p><h2>Find your {category.name.toLowerCase()}.</h2></div><span>{count} products</span></div>
      {category.groups && <nav className="category-page-tabs patch-category-links" aria-label="Patch categories">{groups.map(group => <Link key={group.slug} href={`#patch-${group.slug}`}>{group.name}</Link>)}</nav>}
      {groups.map(group => <section key={group.slug} id={category.groups ? `patch-${group.slug}` : undefined} className={category.groups ? 'patch-category-group' : undefined} aria-label={group.name}>
      {category.groups && <div className="category-collection-heading"><div><p className="eyebrow">Patch category</p><h2>{group.name}</h2><p>{group.description}</p></div><span>{group.products.length} products</span></div>}
      <div className="category-products-grid">{group.products.map((item, index) => {
        const existing = products.find(product => product.slug === item.productSlug);
        const image = existing?.image;
        const fullImage = Boolean(image);
        return <Link className="category-product-card" key={item.name} href={`/products/${item.productSlug}`} >
          <div className={`category-product-art category-art-${index % 4}${fullImage ? ' category-product-art-full' : ''}`}>
            <span className="category-product-number">{String(index + 1).padStart(2, '0')}</span>
            {image ? <Image src={image} alt={item.name} fill sizes="(max-width:620px) 100vw, (max-width:1100px) 50vw, 25vw" style={{ objectFit: 'cover', objectPosition: 'center', padding: 0 }} /> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={shapes[category.slug]} /></svg>}
            <span className="category-product-brand">MAG / KUSTOMS</span>
          </div>
          <div className="category-product-copy"><span>{group.name}</span><h3>{item.name}</h3><p>{item.description}</p><div>View product<ArrowIcon /></div></div>
        </Link>;
      })}</div>
      </section>)}
    </section>
    <section className="quote-band"><div><p className="eyebrow">Your next brand moment</p><h2>Make it yours.</h2><p>Share your artwork and tell us what you have in mind.</p></div><Link href="/contact" className="btn btn-light">Get a Custom Quote</Link></section>
  </>;
}

