import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import { productCategories } from '../../lib/product-categories';

export const metadata = { title: 'Custom Products', description: 'Explore MAG KUSTOMS patches, stickers, transfers, bags, keychains and promotional products.' };

export default function Products() {
  return <>
    <section className="page-hero"><p className="eyebrow">MAG KUSTOMS / Products</p><h1>Custom products.<span>Made for your brand.</span></h1><p>Choose a category to explore product styles and find the right fit for your next project.</p></section>
    <section className="section"><div className="card-grid">{productCategories.map(category => <Link key={category.slug} href={`/products/${category.slug}`} className="product-card"><div className="card-copy"><span>{category.products.length} product styles</span><h2>{category.name}</h2><p>{category.description}</p><b>Explore category <ArrowIcon /></b></div></Link>)}</div></section>
  </>;
}
