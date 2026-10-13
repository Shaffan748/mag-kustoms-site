import Link from 'next/link';

export const metadata = { title: 'Terms & Conditions' };

export default function TermsAndConditions() {
  return <>
    <section className="page-hero"><p className="eyebrow">MAG KUSTOMS / Website information</p><h1>Terms &amp; Conditions</h1><p>Information about browsing products and preparing a project enquiry.</p></section>
    <section className="section split-copy"><div><h2>Before placing an order</h2></div><div><p>This website presents custom product options. Preparing or downloading an enquiry does not place an order or make a payment.</p><p>Confirm product specifications, pricing, delivery and applicable order terms with MAG KUSTOMS before proceeding with a purchase.</p><p>Business terms covering payment, production, shipping, returns and cancellations have not yet been provided. They will be published here when available.</p><Link href="/contact" className="btn">Discuss your project</Link></div></section>
  </>;
}
