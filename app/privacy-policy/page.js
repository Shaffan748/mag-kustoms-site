import Link from 'next/link';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicy() {
  return <>
    <section className="page-hero"><p className="eyebrow">MAG KUSTOMS / Website information</p><h1>Privacy Policy</h1><p>Information about the enquiry tools currently available on this website.</p></section>
    <section className="section split-copy"><div><h2>Your enquiry details</h2></div><div><p>The enquiry form prepares a request in your browser. It does not currently submit your details to MAG KUSTOMS. You can download the prepared request to your device.</p><p>Only include information needed to describe your project. Do not include payment card details or passwords in an enquiry.</p><p>A complete business privacy policy has not yet been provided. It will be published here when available.</p><Link href="/contact" className="btn">Contact page</Link></div></section>
  </>;
}
