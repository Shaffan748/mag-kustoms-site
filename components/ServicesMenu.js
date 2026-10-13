'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
export default function ServicesMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const menu = useRef(null), trigger = useRef(null);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const outside = event => { if (!menu.current?.contains(event.target)) setOpen(false); };
    const escape = event => { if (event.key === 'Escape' && open) { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener('pointerdown', outside); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [open]);
  const close = () => { setOpen(false); onNavigate(); };
  return <div ref={menu} className={`products-menu${open ? ' is-open' : ''}`} onMouseEnter={() => { if (window.matchMedia('(hover: hover) and (min-width: 901px)').matches) setOpen(true); }} onMouseLeave={() => { if (window.matchMedia('(hover: hover) and (min-width: 901px)').matches && !menu.current?.contains(document.activeElement)) setOpen(false); }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <button ref={trigger} className={`products-trigger${pathname.startsWith('/services') ? ' active' : ''}`} aria-expanded={open} aria-controls="services-dropdown" onClick={() => setOpen(value => !value)}>Services <svg className="products-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m5 8.5 7 7 7-7" /></svg></button>
    <div id="services-dropdown" className="products-dropdown" inert={!open}>
      <Link href="/services/vector-art" className="product-menu-link" onClick={close}><span className="product-menu-copy"><strong>Vector Art</strong><small>Clean artwork for print and branding.</small></span></Link>
      <Link href="/services/digitizing" className="product-menu-link" onClick={close}><span className="product-menu-copy"><strong>Digitizing</strong><small>Your design, prepared for embroidery.</small></span></Link>
      <Link href="/services" className="product-menu-link" onClick={close}>Explore services →</Link>
    </div>
  </div>;
}
