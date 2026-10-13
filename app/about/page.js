import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import FaqItem from '../../components/FaqItem';
import AboutStats from '../../components/AboutStats';
import './about.css';

export const metadata = {
  title: 'About MAG KUSTOMS',
  description: 'Embroidery digitizing, custom patches, promotional products and personalized headwear. Discover the quality and commitment behind MAG KUSTOMS.',
};

// Temporary images: replace these paths when the final About page images are ready.
const images = {
  journey: '/images/MAG KUSTOMS Neon Merch Showcase.png',
  mission: '/images/Premium Branded Promo Flatlay.png',
  quality: '/images/qalaitycard.png',
  precision: '/images/dtf-printing-process.png',
  reliability: '/images/Reliabilityset.png',
};

const specialties = [
  ['artwork', 'Digitizing & Artwork', 'Professional embroidery digitizing and vector artwork conversion for your creative and branding needs.'],
  ['patch', 'Custom Patches', 'Embroidered, PVC, woven, Velcro and iron-on patches, customized for your brand.'],
  ['products', 'Headwear & Merchandise', 'Custom hats and caps, personalized headwear and a wide range of promotional products.'],
];

const commitments = [
  [images.quality, 'Quality', 'High-quality products and detail-focused services that help your brand stand out.'],
  [images.precision, 'Precision', 'Careful attention to your artwork, embroidery files and the details that make your design yours.'],
  [images.reliability, 'Reliability', 'Clear communication and dependable solutions, from your initial design concept to the finished product.'],
];

const aboutFaqs = [
  ['What does MAG KUSTOMS do?', 'MAG KUSTOMS provides embroidery digitizing, vector artwork conversion, custom patches, promotional products and personalized headwear solutions.'],
  ['Who do you work with?', 'We work with businesses, embroidery shops, clothing brands and individuals, helping turn their creative and branding ideas into finished products.'],
  ['What types of custom patches do you offer?', 'We offer embroidered, PVC, woven, Velcro and iron-on patches. Share your design and intended use so we can discuss the right option for your project.'],
  ['Can you help prepare my artwork for embroidery?', 'Yes. Our embroidery digitizing and vector artwork conversion services help prepare your design for your creative and production needs.'],
  ['Do you offer custom hats and promotional products?', 'Yes. We offer custom hats and caps, personalized headwear and a wide range of promotional products for your brand or business.'],
  ['How can I start a project with MAG KUSTOMS?', 'Use the enquiry form on our Contact Us page to share your design, product type, quantity and requirements. We will discuss the details with you and help you take the next step.'],
];

function SpecialtyIcon({ type }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === 'artwork' ? <><path d="m15 4 5 5-9 9-7 2 2-7 9-9Z"/><path d="m12 7 5 5M6 13l5 5"/></>
      : type === 'patch' ? <><path d="m12 3 8 4v6c0 4-8 8-8 8s-8-4-8-8V7l8-4Z"/><path d="m8 12 3 3 5-6"/></>
        : <><path d="m3 7 9-4 9 4-9 4-9-4ZM3 7v10l9 4 9-4V7M12 11v10M7 5l10 4v5"/></>}
  </svg>;
}

function AboutImage({ src, alt }) {
  return <div className="about-image"><Image src={src} alt={alt} fill sizes="(max-width: 900px) calc(100vw - 38px), 45vw" /></div>;
}

export default function About() {
  return <div className="about-page">
    <header className="about-heading mk-container">
      <p className="section-kicker">Your ideas. Our craftsmanship.</p>
      <h1>About <span>MAG KUSTOMS</span></h1>
    </header>

    <section className="home-section about-story" aria-labelledby="about-journey-title">
      <div className="mk-container about-split">
        <div className="about-copy">
          <p className="section-kicker">Who we are</p>
          <h2 id="about-journey-title">Your vision.<br/><span>Our journey.</span></h2>
          <p>At MAG KUSTOMS, we bring your ideas to life with high-quality embroidery digitizing, custom patches, promotional products, and personalized headwear solutions. We work with businesses, embroidery shops, clothing brands, and individuals to deliver reliable, detail-focused products and services that meet their creative and branding needs.</p>
          <Link href="/#product-categories" className="mk-btn mk-btn-outline">View Products <ArrowIcon /></Link>
        </div>
        <AboutImage src={images.journey} alt="Custom branding and merchandise showcase" />
      </div>
    </section>

    <section className="home-section about-mission" aria-labelledby="about-mission-title">
      <div className="mk-container about-split about-split-reverse">
        <AboutImage src={images.mission} alt="Personalized merchandise and promotional products" />
        <div className="about-copy">
          <p className="section-kicker">Our commitment</p>
          <h2 id="about-mission-title">Your brand.<br/><span>Our mission.</span></h2>
          <p>We believe in quality, clear communication, and customer satisfaction. From your initial design concept to the finished product, our goal is to provide dependable solutions that help your brand stand out.</p>
          <p className="about-promise">Your Design. Your Brand. Our Commitment to Quality.</p>
          <Link href="/contact" className="mk-btn mk-btn-solid">Let’s Create Together <ArrowIcon /></Link>
        </div>
      </div>
    </section>

    <section className="home-section about-specialties" aria-labelledby="about-specialties-title">
      <div className="mk-container">
        <div className="about-section-heading">
          <p className="section-kicker">Our specialties</p>
          <h2 id="about-specialties-title">Your partner in<br/><span>custom branding.</span></h2>
          <p>Our services include embroidery digitizing, vector artwork conversion, embroidered patches, PVC patches, woven patches, Velcro patches, iron-on patches, custom hats and caps, and a wide range of promotional products. Whether you need professional embroidery files, custom patches for your brand, branded merchandise for your business, or personalized headwear, we’re here to turn your ideas into reality.</p>
        </div>
        <div className="about-specialty-grid">
          {specialties.map(([icon, title, text]) => <article className="about-specialty" key={title}>
            <div className="benefit-icon"><SpecialtyIcon type={icon} /></div>
            <h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="home-section about-quality" aria-labelledby="about-quality-title">
      <div className="mk-container">
        <div className="about-section-heading">
          <p className="section-kicker">Why choose MAG KUSTOMS?</p>
          <h2 id="about-quality-title">Built on quality.<br/><span>Focused on you.</span></h2>
        </div>
        <div className="about-quality-grid">
          {commitments.map(([image, title, text]) => <article className="about-quality-card" key={title}>
            <AboutImage src={image} alt={`${title} in custom branding and production`} />
            <div className="about-quality-copy"><h3>{title}</h3><p>{text}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <AboutStats />

    <section className="home-section about-faq" aria-labelledby="about-faq-title">
      <div className="mk-container faq-layout">
        <div className="about-copy">
          <p className="section-kicker">About MAG KUSTOMS / FAQs</p>
          <h2 id="about-faq-title">Get to know<br/><span>MAG KUSTOMS.</span></h2>
          <p>Learn more about our services, who we work with and how to bring your next custom project to life.</p>
          <Link href="/contact" className="mk-btn mk-btn-solid">Get a Quote <ArrowIcon /></Link>
        </div>
        <div className="mk-faq-list faq-list">
          {aboutFaqs.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}
        </div>
      </div>
    </section>
  </div>;
}


