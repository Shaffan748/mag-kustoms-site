import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import FaqExplorer from '../../components/FaqExplorer';
import './faq.css';

export const metadata = { title: 'Frequently Asked Questions', description: 'Explore MAG KUSTOMS FAQs about artwork, embroidery digitizing, custom patches, promotional products, quotes, orders and production.' };

export default function FAQ() {
  return <div className="faq-page">
    <header className="faq-page-heading"><div className="mk-container">
      <p className="section-kicker">MAG KUSTOMS / FAQs</p>
      <h1>Good questions.<br/><span>Clear answers.</span></h1>
      <p>From your first design idea to the details of custom production, find the guidance you need to take the next step.</p>
      <Link href="#faq-answers" className="mk-btn mk-btn-solid">Explore Answers <ArrowIcon /></Link>
    </div></header>

    <section className="home-section faq-start" aria-labelledby="faq-start-title"><div className="mk-container">
      <div className="faq-start-heading"><p className="section-kicker">New to custom products?</p><h2 id="faq-start-title">Start with <span>the essentials.</span></h2></div>
      <div className="faq-start-grid">
        {[
          ['01', 'Your Product', 'Choose the item you want to customize, from patches and headwear to branded merchandise.'],
          ['02', 'Your Design', 'Have your logo, artwork or idea ready, along with the size, colors and finish you have in mind.'],
          ['03', 'Your Details', 'Include your quantity, intended use and target date so your project requirements are clear.'],
        ].map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </div></section>

    <FaqExplorer />

    <section className="home-section faq-help"><div className="mk-container faq-help-card">
      <div><p className="section-kicker">Let’s clear things up</p><h2>Still have<br/><span>a question?</span></h2><p>Tell us what you need help with, or share your idea to start a custom project with MAG KUSTOMS.</p></div>
      <div className="faq-help-actions"><Link href="/contact" className="mk-btn mk-btn-solid">Contact Us <ArrowIcon /></Link><Link href="/contact" className="mk-btn mk-btn-outline">Get a Quote <ArrowIcon /></Link></div>
    </div></section>
  </div>;
}

