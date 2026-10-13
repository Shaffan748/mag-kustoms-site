'use client';

import { useState } from 'react';
import ArrowIcon from './ArrowIcon';
import SocialLinks from './SocialLinks';
import './ProjectForm.css';

const categories = ['Apparel', 'Stickers', 'Patches', 'Transfers', 'Bags', 'Key Chains', 'Labels', 'Promotional Products', 'Custom Hats & Caps', 'Embroidery Digitizing', 'Vector Artwork', 'Other'];

export default function ProjectForm({ contact = false }) {
  const limit = contact ? 2000 : 180;
  const [instructions, setInstructions] = useState('');
  const [request, setRequest] = useState('');

  function prepareRequest(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setRequest([contact ? 'MAG KUSTOMS — Contact Enquiry' : 'MAG KUSTOMS — Quote Request', ...['name', 'email', 'phone', 'category', ...(contact ? ['company', 'subject'] : []), 'instructions'].map((key) => `${key[0].toUpperCase() + key.slice(1)}: ${data.get(key) || 'Not provided'}`)].join('\n\n'));
  }

  function downloadRequest() {
    const url = URL.createObjectURL(new Blob([request], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = contact ? 'mag-kustoms-contact-enquiry.txt' : 'mag-kustoms-quote-request.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return <section className="home-section project-enquiry" id="project-enquiry" aria-labelledby="project-form-title">
    <div className="mk-container project-enquiry-layout">
      <div className="project-enquiry-copy">
        <p className="section-kicker">{contact ? 'We’re here to help' : 'Let’s make it yours'}</p>
        <h2 id="project-form-title">{contact ? <>Let’s talk<br/><span>about your idea.</span></> : <>Big ideas.<br/><span>Custom details.</span></>}</h2>
        <p>{contact ? 'Have a question about custom products, artwork or an existing project? Share a little about what you need and let’s start the conversation.' : 'Tell us what you have in mind. Share your details and choose a product to start your custom project.'}</p>
        {contact ? <div className="project-contact-details">
          <div><span className="project-contact-label">Phone</span><p>Phone number coming soon</p></div>
          <div><span className="project-contact-label">Email</span><p>Email address coming soon</p></div>
          <div><span className="project-contact-label">Address</span><p>Business address coming soon</p></div>
          <div><span className="project-contact-label">Follow MAG KUSTOMS</span><SocialLinks /></div>
        </div> : <div className="project-enquiry-points">
          <div><span>01</span><p>{contact ? 'Tell us how we can help' : 'Choose your product'}</p></div>
          <div><span>02</span><p>{contact ? 'Include the details that matter' : 'Share your design details'}</p></div>
          <div><span>03</span><p>{contact ? 'Take the next step together' : 'Let’s bring it to life'}</p></div>
        </div>}
      </div>
      <form className="project-form" onSubmit={prepareRequest} onChange={() => setRequest('')}>
        <div className="project-form-heading"><h3>{contact ? 'Send us your enquiry.' : 'Your next project starts here.'}</h3><p>Fields marked <span>*</span> are required.</p></div>
        <div className="project-form-fields">
          <label htmlFor="project-name">Name <span>*</span><input id="project-name" name="name" autoComplete="name" placeholder="Enter your name" required maxLength={100} /></label>
          <label htmlFor="project-email">Email Address <span>*</span><input id="project-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
          <label htmlFor="project-phone">Phone Number<input id="project-phone" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" maxLength={40} /></label>
          <label htmlFor="project-category">Select Category <span>*</span><select id="project-category" name="category" defaultValue="" required><option value="" disabled>Select a category</option>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
          {contact && <><label htmlFor="project-company">Company / Brand<input id="project-company" name="company" autoComplete="organization" placeholder="Your company or brand (optional)" maxLength={120} /></label><label htmlFor="project-subject">Subject <span>*</span><input id="project-subject" name="subject" placeholder="What can we help with?" required maxLength={160} /></label></>}
          <label className="project-form-full" htmlFor="project-instructions"><div className="project-instructions-label">{contact ? 'Your Message *' : 'Extra Instructions'} <span className="project-character-count" aria-live="off">{instructions.length}/{limit}</span></div><textarea id="project-instructions" name="instructions" rows={contact ? 6 : 5} required={contact} maxLength={limit} placeholder={contact ? 'Tell us about your project or question. For an existing order, include your order reference.' : 'Design name, quantity, size or any details you’d like us to know…'} value={instructions} onChange={(event) => setInstructions(event.target.value)} aria-describedby="project-instructions-hint" /><small id="project-instructions-hint">A few details help us understand your project.</small></label>
        </div>
        <button className="mk-btn mk-btn-solid project-submit" type="submit">{contact ? 'Prepare Enquiry' : 'Prepare Quote Request'} <ArrowIcon /></button>
        {request && <div className="project-form-status" role="status"><p>Your request is prepared, but has not been sent. Online submissions are not available yet. You can save a copy of your details below.</p><button className="mk-btn mk-btn-outline" type="button" onClick={downloadRequest}>Download Request <ArrowIcon /></button></div>}
      </form>
    </div>
  </section>;
}
