'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from './ArrowIcon';
import SocialLinks from './SocialLinks';
import ServicesMenu from './ServicesMenu';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';

const links = [
  ['/', 'Home'], ['/products', 'Products'], ['/services', 'Services'], ['/about', 'About'], ['/faq', 'FAQ'], ['/contact', 'Contact']
];

const productLinks = [
  { label: 'Apparel', href: '/products/apparel', detail: 'Wear your brand. Make it yours.', icon: 'm8 3-5 3 3 5 2-1v11h8V10l2 1 3-5-5-3a4 4 0 0 1-8 0Z' },
  { label: 'Stickers', href: '/products/stickers', detail: 'Small details. Bold impressions.', icon: 'M6 3h12a3 3 0 0 1 3 3v8l-7 7H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm8 18v-5a2 2 0 0 1 2-2h5' },
  { label: 'Patches', href: '/products/patches', detail: 'Crafted to wear your identity.', icon: 'm12 3 8 4v6c0 4-8 8-8 8s-8-4-8-8V7l8-4Zm-4 9 3 3 5-6' },
  { label: 'Transfers', href: '/products/transfers', detail: 'Bring your artwork to life.', icon: 'm3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4' },
  { label: 'Promotional Items', href: '/products/promotional-items', detail: 'Made to be seen. Built to keep.', icon: 'M3 8h18v4H3V8Zm2 4v9h14v-9M12 8v13m0-13H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z' },
];

export function SiteShell({ children }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsMenu = useRef(null);
  const productsTrigger = useRef(null);
  const pathname = usePathname();
  const activePath = pathname.replace(/\/+$/, '') || '/';
  const productsActive = activePath === '/products' || activePath.startsWith('/products/');
  const router = useRouter();
  const transition = useRef(null);

  useEffect(() => { setOpen(false); setProductsOpen(false); }, [pathname]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!productsMenu.current?.contains(event.target)) setProductsOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && productsOpen) {
        setProductsOpen(false);
        productsTrigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [productsOpen]);

  useEffect(() => {
    if (!transition.current) return;
    gsap.fromTo(transition.current, { scaleY: 1, transformOrigin: 'top' }, { scaleY: 0, duration: .65, ease: 'power4.inOut', delay: .02 });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]');
      if (e.defaultPrevented || e.button !== 0 || !a || a.hasAttribute('download') || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      const destination = new URL(href, window.location.origin);
      if (destination.pathname.replace(/\/+$/, '') === activePath.replace(/\/+$/, '') || destination.hash) {
        setOpen(false); setProductsOpen(false);
        return;
      }
      e.preventDefault();
      gsap.to(transition.current, { scaleY: 1, transformOrigin: 'bottom', duration: .48, ease: 'power4.inOut', onComplete: () => router.push(href) });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [pathname, activePath, router]);

  useEffect(() => {
    const header = document.querySelector('.site-header');
    const onScroll = () => {
      const hero = document.querySelector('.mk-hero, .page-hero, .product-hero');
      const pastHero = hero ? hero.getBoundingClientRect().bottom <= 0 : window.scrollY > 24;
      header?.classList.toggle('is-scrolled', pastHero);
    };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  return <>
    <div className="page-transition" ref={transition} aria-hidden="true"><Image src="/images/monogram-clean.webp" alt="" width={90} height={82}/></div>
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo" aria-label="MAG KUSTOMS home"><Image src="/images/logo-horizontal.webp" alt="MAG KUSTOMS" width={210} height={68} priority /></Link>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {links.map(([href,label]) => label === 'Products' ?
            <div key={href} ref={productsMenu} className={`products-menu${productsOpen ? ' is-open' : ''}`}
              onMouseEnter={() => { if (window.matchMedia('(hover: hover) and (min-width: 901px)').matches) setProductsOpen(true); }}
              onMouseLeave={() => { if (window.matchMedia('(hover: hover) and (min-width: 901px)').matches && !productsMenu.current?.contains(document.activeElement)) setProductsOpen(false); }}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false); }}>
              <button ref={productsTrigger} className={`products-trigger${productsActive ? ' active' : ''}`} aria-current={productsActive ? 'location' : undefined} aria-expanded={productsOpen} aria-controls="products-dropdown" onClick={() => setProductsOpen(value => !value)}>
                Products <svg className="products-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8.5 7 7 7-7" /></svg>
              </button>
              <div id="products-dropdown" className="products-dropdown" inert={!productsOpen}>
                <div className="products-dropdown-heading"><span>Made for your brand</span><span className="products-heading-dot" /></div>
                {productLinks.map(product => <Link key={product.label} href={product.href} className="product-menu-link" onClick={() => { setProductsOpen(false); setOpen(false); }}>
                  <span className="product-menu-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={product.icon} /></svg></span>
                  <span className="product-menu-copy"><strong>{product.label}</strong><small>{product.detail}</small></span>
                  <ArrowIcon />
                </Link>)}
              </div>
            </div> : label === 'Services' ? <ServicesMenu key={href} onNavigate={() => { setOpen(false); setProductsOpen(false); }} /> : <Link key={href} href={href} className={activePath === href ? 'active' : ''} aria-current={activePath === href ? 'page' : undefined}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/contact" className="header-quote"><span>Get a Quote</span><ArrowIcon/></Link>
          <button className={open ? 'menu-toggle is-open' : 'menu-toggle'} onClick={() => { setOpen(v => !v); setProductsOpen(false); }} aria-label="Toggle navigation" aria-expanded={open}><span/><span/></button>
        </div>
      </div>
    </header>
    <main>{children}</main>
    <footer className="site-footer">
      <div className="mk-container footer-grid">
        <div className="footer-brand-col"><Image src="/images/logo-horizontal.webp" alt="MAG KUSTOMS" width={220} height={72}/><p>Premium custom patches, transfers, stickers, labels, packaging and promotional products for brands that want to stand out.</p><SocialLinks /></div>
        <div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Products</h3><Link href="/products/apparel">Apparel</Link><Link href="/products/stickers">Stickers</Link><Link href="/products/patches">Patches</Link><Link href="/products/transfers">Transfers</Link><Link href="/products/promotional-items">Promotional Items</Link></div>
        <div><h3>Support</h3><Link href="/faq">FAQ</Link><Link href="/terms-and-conditions">Terms & Conditions</Link><Link href="/privacy-policy">Privacy Policy</Link></div>
        <div className="newsletter"><h3>Newsletter</h3><p>Get the latest updates and offers.</p><form><input type="email" aria-label="Email address" placeholder="Enter your email"/><button aria-label="Subscribe"><ArrowIcon/></button></form></div>
      </div>
      <div className="mk-container footer-bottom"><span>© {new Date().getFullYear()} MAG KUSTOMS. All rights reserved.</span><div className="footer-legal-links"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link><Link href="/contact">Contact Us</Link></div></div>
    </footer>
  </>;
}



