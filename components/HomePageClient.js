'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import FaqItem from './FaqItem';
import ProjectForm from './ProjectForm';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const categories = [
  { title: 'Custom Patches', image: '/images/Embroidered Patriotic Eagle Patch.png', href: '/products/patches' },
  { title: 'DTF Transfers', image: '/images/Duck.webp', href: '/products/transfers' },
  { title: 'Custom Stickers', image: '/images/Morningside Excellence Embroidered Crest.png', href: '/products/stickers' },
  { title: 'Packaging Bags', image: '/images/Custom Poly Mailers.png', href: '/products/bags' },
  { title: 'Keychains', image: '/images/Keychains.png', href: '/products/keychains' },
  { title: 'Promotional Products', image: '/images/image03.png', href: '/products/promotional-items' },
];

const featuredImages = [
  { src: '/images/Custom-Embroidered-Patches.jpg', alt: 'Custom embroidered patches' },
  { src: '/images/custom-branding-showcase.png', alt: 'Custom branding showcase' },
  { src: '/images/dtf-printing-process.png', alt: 'DTF printing process' },
  { src: '/images/promotional-products.png', alt: 'Custom promotional products' },
];

const benefits = [
  ['diamond', 'Premium Quality', 'High-grade materials and professional finishing.'],
  ['gear', 'Full Customization', 'Tailored to your brand, artwork and vision.'],
  ['layers', 'Bulk Friendly', 'Ideal for businesses, clothing brands and teams.'],
  ['bolt', 'Fast Turnaround', 'Efficient production with a clear approval process.'],
];

const work = [
  ['/images/patches.png', 'Patches'], ['/images/mag-kustoms-card-no-outer-margin.png', 'Transfers'], ['/images/Neon Astronaut Sticker Spaceboard.png', 'Labels'],
  ['/images/mag-package.png', 'Packaging'], ['/images/label-card.png', 'Hang Tags'], ['/images/Promotionalset.png', 'Promotional'],
];

const testimonials = [
  ['James Carter', 'Clothing Brand Owner', 'Amazing quality and super-fast turnaround. Our patches came out premium and the whole process was smooth.'],
  ['Sarah Mitchell', 'Apparel Business', 'A reliable customization partner for our labels and packaging. The finishing feels premium and consistent.'],
  ['David Khan', 'Streetwear Brand', 'Clear communication, sharp detail and delivery on time. Exactly the standard we wanted for our brand.'],
];

function Icon({ name }) {
  if (name === 'diamond') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5 7.5 4h9L20 8.5 12 20 4 8.5Z"/><path d="m7.5 4 4.5 16L16.5 4M4 8.5h16"/></svg>;
  if (name === 'gear') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M19 13.8V10l-2-.8-.7-1.7.8-2-2.7-2.7-2 .8-1.7-.7L10 1H6.2l-.8 2-1.7.7-2-.8L-.9 5.6l.8 2-.7 1.7-2 .8v3.8l2 .8.7 1.7-.8 2 2.7 2.7 2-.8 1.7.7.8 2H10l.8-2 1.7-.7 2 .8 2.7-2.7-.8-2 .7-1.7 1.9-.9Z" transform="translate(3 0) scale(.75)"/></svg>;
  if (name === 'layers') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-8 12h6l-1 8 8-12h-6l1-8Z"/></svg>;
}

function ButtonLink({ children, className = '', ...props }) {
  return <Link className={className} {...props}><span>{children}</span><ArrowIcon/></Link>;
}

export default function HomePageClient() {
  const root = useRef(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredTrack = useRef(null);
  const featuredMoving = useRef(false);
  useLayoutEffect(() => {
    const track = featuredTrack.current;
    gsap.set(track, { x: 0, xPercent: -100 });
    return () => gsap.killTweensOf(track);
  }, []);
  const selectFeatured = (index, step = 0) => {
    if (featuredMoving.current || index === featuredIndex) return;
    featuredMoving.current = true;
    const count = featuredImages.length;
    const position = step === 1 && featuredIndex === count - 1 ? count + 1
      : step === -1 && featuredIndex === 0 ? 0 : index + 1;
    setFeaturedIndex(index);
    gsap.to(featuredTrack.current, {
      xPercent: -position * 100,
      duration: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : .65,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(featuredTrack.current, { xPercent: -(index + 1) * 100 });
        featuredMoving.current = false;
      },
    });
  };
  const changeFeatured = (step) => selectFeatured((featuredIndex + step + featuredImages.length) % featuredImages.length, step);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      changeFeatured(1);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [featuredIndex]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .from('.hero-kicker', { y: 18, opacity: 0, duration: .55 })
        .from('.hero-title-line', { yPercent: 115, opacity: 0, stagger: .12, duration: .78 }, '-=.2')
        .from('.hero-copy .hero-body, .hero-actions', { y: 22, opacity: 0, stagger: .1, duration: .65 }, '-=.4')
        .from('.hero-stat', { y: 16, opacity: 0, stagger: .08, duration: .5 }, '-=.45');

      gsap.utils.toArray('[data-section-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: .9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        });
      });

      gsap.utils.toArray('[data-stagger]').forEach((wrap) => {
        const children = wrap.querySelectorAll('[data-card]');
        gsap.from(children, {
          y: 38,
          opacity: 0,
          scale: .985,
          stagger: .085,
          duration: .72,
          ease: 'power3.out',
          scrollTrigger: { trigger: wrap, start: 'top 85%', once: true },
        });
      });

      gsap.from('.process-line-fill', {
        scaleX: 0,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: { trigger: '.process-grid', start: 'top 85%', end: 'bottom 55%', scrub: 1 },
      });

      gsap.utils.toArray('[data-tilt]').forEach((card) => {
        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const rx = ((e.clientY - rect.top) / rect.height - .5) * -5;
          const ry = ((e.clientX - rect.left) / rect.width - .5) * 6;
          gsap.to(card, { rotateX: rx, rotateY: ry, duration: .35, transformPerspective: 900, ease: 'power2.out' });
        };
        const onLeave = () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: .55, ease: 'power3.out' });
        card.addEventListener('pointermove', onMove);
        card.addEventListener('pointerleave', onLeave);
        card.__mkTiltCleanup = () => { card.removeEventListener('pointermove', onMove); card.removeEventListener('pointerleave', onLeave); };
      });

    }, root);

    return () => {
      root.current?.querySelectorAll('[data-tilt]').forEach((x) => x.__mkTiltCleanup?.());

      ctx.revert();
    };
  }, []);

  return <div ref={root} className="mk-home">
    <section className="mk-hero">
      <div className="mk-container hero-layout">
        <div className="hero-copy">
          <p className="section-kicker hero-kicker">Premium Customization</p>
          <h1 className="hero-title" aria-label="Custom Made. Built to Stand Out.">
            <span className="hero-title-mask"><span className="hero-title-line">Custom Made.</span></span>
            <span className="hero-title-mask outline-mask"><span className="hero-title-line outline-text">Built to</span></span>
            <span className="hero-title-mask"><span className="hero-title-line orange-text">Stand Out.</span></span>
          </h1>
          <p className="hero-body">Premium custom patches, transfers, stickers, labels, packaging and promotional products for brands that want to be noticed.</p>
          <div className="hero-actions">
            <ButtonLink href="#product-categories" className="mk-btn mk-btn-solid">Explore Products</ButtonLink>
            <ButtonLink href="/contact" className="mk-btn mk-btn-outline">Get a Quote</ButtonLink>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><strong>500+</strong><span>Happy Brands</span></div>
            <div className="hero-stat"><strong>10K+</strong><span>Custom Products</span></div>
            <div className="hero-stat"><strong>100%</strong><span>Quality Focused</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="product-categories" className="home-section products-section">
      <div className="mk-container" data-section-reveal>
        <div className="section-heading-row">
          <div><p className="section-kicker">Our Products</p><h2>Built for your brand</h2></div>
          <p className="section-intro">From custom patches to packaging, we provide high-quality customization solutions for clothing brands, businesses and creators.</p>
          <ButtonLink href="/products" className="mk-btn mk-btn-outline mk-btn-small">Explore Categories</ButtonLink>
        </div>
        <div className="category-grid" data-stagger>
          {categories.map((item) => <Link href={item.href} className="category-card" data-card data-tilt key={item.title} aria-label={item.title}>
            {item.image ? <Image src={item.image} className={item.title === 'Keychains' ? 'category-image-keychains' : undefined} alt={`${item.title} by MAG KUSTOMS`} fill sizes="(max-width: 700px) 46vw, (max-width: 1100px) 30vw, 16vw" /> : <div className="keychains-category-art"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 9v4m0 0 5-2 5 5-5 5-5-5v-3Z" /></svg><strong>Keychains</strong></div>}
            <span className="category-hover-arrow" aria-hidden="true"><ArrowIcon /></span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="home-section benefits-section">
      <div className="mk-container benefits-layout" data-section-reveal>
        <div className="benefits-copy">
          <p className="section-kicker">Why MAG Kustoms</p>
          <h2>More than<br/>just products</h2>
          <p>We combine quality, creativity and precision to deliver custom solutions that help your brand stand out.</p>
          <ButtonLink href="/about" className="mk-btn mk-btn-outline mk-btn-small">About Us</ButtonLink>
        </div>
        <div className="benefit-grid" data-stagger>
          {benefits.map(([icon, title, text]) => <article className="benefit-card" data-card key={title}>
            <div className="benefit-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="featured-product home-section">
      <div className="featured-glow" aria-hidden="true" />
      <div className="mk-container featured-layout" data-section-reveal>
        <div className="featured-gallery" role="region" aria-label="Custom products image gallery" aria-roledescription="carousel">
          <div className="featured-media">
            <div className="featured-track" ref={featuredTrack}>
              {[featuredImages[featuredImages.length - 1], ...featuredImages, featuredImages[0]].map((item, index) => <div className="featured-slide" key={`${item.src}-${index}`} aria-hidden={index !== featuredIndex + 1}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 900px) 100vw, 720px" /></div>)}
            </div>
            <button type="button" className="feature-nav prev" aria-label="Previous product image" onClick={() => changeFeatured(-1)}><ArrowIcon /></button>
            <button type="button" className="feature-nav next" aria-label="Next product image" onClick={() => changeFeatured(1)}><ArrowIcon /></button>
          </div>
          <div className="featured-thumbnails" aria-label="Choose product image">
            {featuredImages.map((item, index) => <button type="button" key={item.src} className={`featured-thumbnail${index === featuredIndex ? ' is-active' : ''}`} aria-label={`Show ${item.alt}`} aria-pressed={index === featuredIndex} onClick={() => selectFeatured(index)}><Image src={item.src} alt="" fill sizes="64px" /></button>)}
          </div>
        </div>
        <div className="featured-copy">
          <p className="section-kicker">Premium Custom Patches</p>
          <div className="featured-number" aria-label={`Slide ${featuredIndex + 1} of ${featuredImages.length}`}>{String(featuredIndex + 1).padStart(2, '0')}</div>
          <h2>Embroidered<br/><span>Patches</span></h2>
          <p>Durable, high-quality embroidered patches with detailed stitching — ideal for apparel, bags, hats and more.</p>
          <ul className="feature-list"><li>Various Shapes & Sizes</li><li>Multiple Backing Options</li><li>Custom Colors & Finishes</li></ul>
          <ButtonLink href="/products/patches" className="mk-btn mk-btn-solid mk-btn-small">Explore Patches</ButtonLink>
          <div className="featured-dots" aria-label="Choose featured slide">{featuredImages.map((item, index) => <button type="button" key={item.src} aria-label={`Go to slide ${index + 1}`} aria-pressed={index === featuredIndex} className={index === featuredIndex ? 'is-active' : ''} onClick={() => selectFeatured(index)} title={`Slide ${String(index + 1).padStart(2, '0')}`}><svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true"><circle cx="4" cy="4" r="3" fill="currentColor" /></svg><span className="featured-dot-label">{String(index + 1).padStart(2, '0')}</span></button>)}</div>
        </div>
      </div>
    </section>

    <section className="home-section process-section">
      <div className="mk-container" data-section-reveal>
        <div className="section-heading-row compact">
          <div><p className="section-kicker">How It Works</p><h2>From idea to<br/>finished product</h2></div>
          <p className="section-intro">A simple and smooth process to bring your custom products to life.</p>
          <ButtonLink href="/contact" className="mk-btn mk-btn-outline mk-btn-small">Get a Quote</ButtonLink>
        </div>
        <div className="process-wrap">
          <span className="process-line-fill" aria-hidden="true" />
          <div className="process-grid">
            {[
              ['01','Send Your Design','Upload your artwork or share your idea.'],
              ['02','Choose Product','Select product type, size and quantity.'],
              ['03','Approve Mockup','We send a digital mockup for approval.'],
              ['04','Production','Your order goes into production.'],
              ['05','Delivery','Get your custom products at your door.'],
            ].map(([n,t,c]) => <article className="process-card" data-card key={n}><span className="process-index">{n}</span><div className="process-icon">{n}</div><h3>{t}</h3><p>{c}</p></article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="home-section work-section">
      <div data-section-reveal>
        <div className="mk-container work-heading"><div><p className="section-kicker">Our Work</p><h2>Made by MAG</h2></div></div>
        <div className="work-marquee" aria-label="MAG KUSTOMS work showcase">
          <div className="work-marquee-track">
            {[0, 1].map(copy => <div className="work-marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {work.map(([src, label]) => <div className="work-card" key={src}><Image src={src} alt={copy === 0 ? `MAG KUSTOMS ${label} example` : ''} fill sizes="(max-width: 1152px) 180px, 17vw"/><span>{label}</span></div>)}
            </div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="home-section quote-promo-section">
      <div className="mk-container" data-section-reveal>
        <div className="quote-promo">
          <div className="quote-promo-copy"><p className="section-kicker">Let’s Create Together</p><h2><span>Ready to create</span><br/>something custom?</h2><p>Send us your design and requirements. Get a free quote today.</p></div>
          <ButtonLink href="/contact" className="mk-btn mk-btn-solid">Request a Quote</ButtonLink>
        </div>
      </div>
    </section>

    <ProjectForm />

    <section className="home-section testimonials-section">
      <div className="mk-container" data-section-reveal>
        <div className="section-heading-row compact testimonial-heading"><div><p className="section-kicker">Testimonials</p><h2>Trusted by brands</h2></div><p className="section-intro">We work with clothing brands, businesses, creators and organizations. Here’s what some of them say about us.</p></div>
        <div className="testimonial-grid" data-stagger>
          {testimonials.map(([name, role, quote], idx) => <article className="testimonial-card" data-card key={name}><div className="stars">★★★★★</div><p>“{quote}”</p><div className="person"><span>{name.split(' ').map(x=>x[0]).join('')}</span><div><strong>{name}</strong><small>{role}</small></div></div></article>)}
        </div>
      </div>
    </section>

    <section className="home-section faq-section">
      <div className="mk-container faq-layout" data-section-reveal>
        <div><p className="section-kicker">FAQ</p><h2>Before you<br/>place an order</h2><p>Get answers to common questions about our products, process and customization options.</p><ButtonLink href="/faq" className="mk-btn mk-btn-solid mk-btn-small">View All FAQs</ButtonLink></div>
        <div className="mk-faq-list">
          {[
            ['What is the minimum order quantity (MOQ)?','Minimum quantities vary by product and finish. Send your requirements and we will quote the best production option.'],
            ['Can I upload my own design?','Yes. You can send your existing artwork, logo or reference with your quote request.'],
            ['Do you provide digital mockups before production?','Yes. A digital proof is provided so the layout, size and direction can be approved first.'],
            ['How long does production take?','Timing depends on the product, quantity and customization method. Your quote will include an estimated turnaround.'],
            ['Do you offer international shipping?','Shipping options can be arranged based on your order and delivery destination.'],
          ].map(([q,a]) => <FaqItem key={q} question={q} answer={a}/>)}
        </div>
      </div>
    </section>
  </div>;
}



