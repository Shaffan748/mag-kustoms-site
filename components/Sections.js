import Link from 'next/link';
import { products, services } from '../lib/site';
import { ProductVisual } from './ProductVisual';

export function SectionTitle({eyebrow,title,copy}){return <div className="section-head" data-reveal><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy&&<p className="lead">{copy}</p>}</div>}

export function ProductGrid({limit=6}) { return <div className="card-grid">{products.slice(0,limit).map((p,i)=><Link data-reveal key={p.slug} href={`/products/${p.slug}`} className="product-card"><ProductVisual type={['patch','transfer','sticker'][i%3]} label={p.name.split(' ')[0]}/><div className="card-copy"><span>{p.category}</span><h3>{p.name}</h3><p>{p.blurb}</p><b>Explore →</b></div></Link>)}</div> }

export function ServicesGrid(){return <div className="service-grid">{services.map(([title,copy],i)=><div data-reveal className="service-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>}
