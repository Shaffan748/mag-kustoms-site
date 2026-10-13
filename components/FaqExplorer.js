'use client';

import { useState } from 'react';
import FaqItem from './FaqItem';
import { faqCategories } from '../lib/faqs';

export default function FaqExplorer() {
  const [category, setCategory] = useState('all');
  const groups = faqCategories.filter((group) => category === 'all' || group.id === category);
  const count = groups.reduce((total, group) => total + group.questions.length, 0);

  return <section className="home-section faq-explorer" id="faq-answers" aria-label="Frequently asked questions">
    <div className="mk-container">
      <div className="faq-tools">
        <div className="faq-category-filters" role="group" aria-label="Filter FAQs by category">
          {[{ id: 'all', title: 'All Questions' }, ...faqCategories].map(({ id, title }) => <button key={id} type="button" aria-pressed={category === id} onClick={() => setCategory(id)}>{title}</button>)}
        </div>
      </div>
      <p className="faq-result-count" role="status">{count} {count === 1 ? 'answer' : 'answers'}</p>
      <div className="faq-groups">
        {groups.map((group) => <section className="faq-group" key={group.id} aria-labelledby={`faq-category-${group.id}`}>
          <div className="faq-group-heading"><span className="faq-group-number" aria-hidden="true">0{faqCategories.findIndex((item) => item.id === group.id) + 1}</span><h2 id={`faq-category-${group.id}`}>{group.title}</h2><p>{group.description}</p></div>
          <div className="mk-faq-list faq-list">{group.questions.map(([question, answer]) => <FaqItem key={question} question={question} answer={answer} />)}</div>
        </section>)}
      </div>
    </div>
  </section>;
}
