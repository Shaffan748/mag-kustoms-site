import Image from 'next/image';
import Link from 'next/link';
import { serviceDetails } from '../../lib/service-details';
import './services.css';
export const metadata = { title: 'Services', description: 'Vector artwork conversion and embroidery digitizing services from MAG KUSTOMS.' };
export default function Services() {
  return <><section className="page-hero"><p className="eyebrow">MAG KUSTOMS / Services</p><h1>Better artwork.<br />Ready for production.</h1><p>Turn your ideas into clean vector graphics or carefully planned embroidery files. Choose the service that fits your next project.</p></section><section className="section"><div className="section-head"><p className="eyebrow">Our services</p><h2>Bring your design to life.</h2></div><div className="service-grid services-overview-grid">{serviceDetails.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug} className="service-card service-link service-overview-card"><div className="service-card-media"><Image src={service.slug === 'vector-art' ? '/images/Vector Art.png' : '/images/Digitizing.webp'} alt={service.name} fill sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1440px) calc((100vw - 88px) / 2), 640px" style={{ objectFit: 'cover', objectPosition: 'center' }} /></div><div className="service-card-content"><span>0{index + 1} / Artwork services</span><h3>{service.name}</h3><p>{service.summary}</p><strong>Explore {service.name} →</strong></div></Link>)}</div></section></>;
}
