import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, site } from '../../../lib/site';
import { ProductVisual } from '../../../components/ProductVisual';
import { productCategories } from '../../../lib/product-categories';
import ProductCategoryPage from '../../../components/ProductCategoryPage';
import ArrowIcon from '../../../components/ArrowIcon';
import { getProductDescription } from '../../../lib/product-descriptions';
import './product-detail.css';

export function generateStaticParams() {
  return [...productCategories, ...products].map(product => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = productCategories.find(item => item.slug === slug);
  if (category) return { title: `Custom ${category.name}`, description: category.description };
  const product = products.find(item => item.slug === slug);
  return product ? { title: product.name, description: product.blurb } : {};
}

export default async function Product({ params }) {
  const { slug } = await params;
  const category = productCategories.find(item => item.slug === slug);
  if (category) return <ProductCategoryPage category={category} />;
  const product = products.find(item => item.slug === slug);
  if (!product) notFound();

  const collection = productCategories.find(item =>
    [...item.products, ...(item.groups || []).flatMap(group => group.products)]
      .some(item => item.productSlug === slug));
  const collectionSlugs = new Set(collection ?
    [...collection.products, ...(collection.groups || []).flatMap(group => group.products)].map(item => item.productSlug) : []);
  const candidates = products.filter(item => item.slug !== slug);
  const related = [
    ...candidates.filter(item => item.category === product.category),
    ...candidates.filter(item => item.category !== product.category && collectionSlugs.has(item.slug)),
    ...candidates.filter(item => item.category !== product.category && !collectionSlugs.has(item.slug)),
  ].slice(0, 4);
  const whatsappNumber = (site.whatsappNumber || '').replace(/\D/g, '');
  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi MAG KUSTOMS, I would like a quote for ${product.name}.`)}` : null;

  return <div className="single-product-page">
    <section className="product-hero single-product-hero" aria-label="Product details">
      <ProductVisual type="patch" label={product.name} image={product.singlePageImage || product.image} className="single-product-image" alt={product.imageAlt || product.name} imageFit="cover" />
      <div className="single-product-details">
        <h1>{product.name}</h1>
        <p className="single-product-content">{getProductDescription(product)}</p>
        <p className="single-product-category"><span>Category:</span> {collection ? <Link href={`/products/${collection.slug}`}>{product.category}</Link> : product.category}</p>
        <div className="single-product-actions">
          <Link href="/contact/#project-enquiry" className="btn">Get Quote <ArrowIcon /></Link>
          {whatsappHref ? <a href={whatsappHref} className="btn single-product-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowIcon /></a> : <button type="button" className="btn single-product-whatsapp" disabled title="Business WhatsApp number has not been provided">WhatsApp <ArrowIcon /></button>}
        </div>
      </div>
    </section>
    <section className="section single-product-related" aria-labelledby="related-products-title">
      <h2 id="related-products-title">Related Products</h2>
      <div className="single-product-related-grid">{related.map(item => <Link href={`/products/${item.slug}`} className="product-card" key={item.slug}>
        <ProductVisual type="patch" label={item.name} image={item.image || item.singlePageImage} alt={item.imageAlt || item.name} imageFit="cover" />
        <div className="card-copy"><span>{item.category}</span><h3>{item.name}</h3><p>{item.blurb}</p><b>View product <ArrowIcon /></b></div>
      </Link>)}</div>
    </section>
  </div>;
}
