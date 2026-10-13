import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import ProjectForm from '../../components/ProjectForm';
import FaqItem from '../../components/FaqItem';
import './contact.css';

export const metadata = { title: 'Contact Us', description: 'Get in touch with MAG KUSTOMS for custom patches, embroidery digitizing, promotional products, personalized headwear and project enquiries.' };

const options = [
  ['quote', 'Start a Custom Project', 'Have a design in mind? Tell us the product, quantity and details you need.', '#project-enquiry', 'Get a Quote'],
  ['art', 'Artwork & Digitizing', 'Need embroidery files or vector artwork? Explore how we can help prepare your design.', '/services', 'Explore Services'],
  ['chat', 'Questions & Support', 'Ask about a product or share the reference for an existing project in the form below.', '#project-enquiry', 'Make an Enquiry'],
];
const faqs = [
  ['What should I include in my enquiry?', 'Include the product or service you need, your design idea, quantity, size and any preferred deadline. If you are asking about an existing project, include its reference so we can understand your enquiry.'],
  ['Can I contact you before my design is ready?', 'Yes. Share your concept and the product you have in mind. MAG KUSTOMS offers embroidery digitizing and vector artwork conversion alongside custom products.'],
  ['Do you work with individuals as well as businesses?', 'Yes. We work with businesses, embroidery shops, clothing brands and individuals on their creative and branding needs.'],
  ['Which products can I ask about?', 'You can enquire about embroidered, PVC, woven, Velcro and iron-on patches, transfers, stickers, packaging, labels, custom headwear and promotional products.'],
];

function ContactIcon({ type }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === 'quote' ? <><path d="m3 7 9-4 9 4-9 4-9-4ZM3 7v10l9 4 9-4V7M12 11v10"/></> : type === 'art' ? <><path d="m15 4 5 5-9 9-7 2 2-7 9-9ZM12 7l5 5M6 13l5 5"/></> : <><path d="M20 11a8 8 0 0 1-8 8H8l-5 2 1-6a8 8 0 1 1 16-4Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></>}
  </svg>;
}

export default function Contact() {
  return <div className="contact-page">
    <header className="contact-heading">
      <div className="mk-container">
        <p className="section-kicker">MAG KUSTOMS / Contact Us</p>
        <h1>Your next idea.<br/><span>Let’s make it happen.</span></h1>
        <p>Custom products, creative questions or your next brand launch. Let’s talk about what you have in mind.</p>
        <Link className="mk-btn mk-btn-solid" href="#project-enquiry">Let’s Talk <ArrowIcon /></Link>
      </div>
    </header>

    <section className="home-section contact-options-section" aria-label="How we can help">
      <div className="mk-container contact-options">
        {options.map(([icon, title, text, href, label]) => <article className="contact-option" key={title}>
          <div className="contact-icon"><ContactIcon type={icon} /></div>
          <h2>{title}</h2><p>{text}</p>
          <Link href={href}>{label}<ArrowIcon /></Link>
        </article>)}
      </div>
    </section>

    <ProjectForm contact />

    <section className="home-section contact-faq" aria-labelledby="contact-faq-heading">
      <div className="mk-container contact-faq-layout">
        <div className="contact-faq-copy"><p className="section-kicker">A little guidance</p><h2 id="contact-faq-heading">Before you<br/><span>get in touch.</span></h2><p>A few helpful answers to get your conversation started.</p><Link className="mk-btn mk-btn-outline" href="/faq">View All FAQs <ArrowIcon /></Link></div>
        <div className="mk-faq-list faq-list">{faqs.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}</div>
      </div>
    </section>

    <section className="contact-closing"><div className="mk-container"><p className="section-kicker">Your Design. Your Brand.</p><h2>Our commitment <span>to quality.</span></h2><p>Explore what’s possible with MAG KUSTOMS.</p><Link href="/#product-categories" className="mk-btn mk-btn-outline">Browse Products <ArrowIcon /></Link></div></section>
  </div>;
}


