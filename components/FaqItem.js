'use client';

import { useEffect, useRef } from 'react';
import FaqIcon from './FaqIcon';

export default function FaqItem({ question, answer, ...props }) {
  const ref = useRef(null);
  const animation = useRef(null);
  const expanded = useRef(false);

  useEffect(() => () => animation.current?.cancel(), []);

  function toggle(event) {
    event.preventDefault();
    const details = ref.current;
    const summary = details.querySelector('summary');
    const content = details.querySelector('.faq-answer');
    const start = details.getBoundingClientRect().height;
    expanded.current = !expanded.current;
    animation.current?.cancel();
    details.open = true;
    summary.setAttribute('aria-expanded', String(expanded.current));
    const border = details.offsetHeight - details.clientHeight;
    const end = summary.getBoundingClientRect().height + border + (expanded.current ? content.getBoundingClientRect().height : 0);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      details.open = expanded.current;
      return;
    }
    animation.current = details.animate(
      { height: [`${start}px`, `${end}px`] },
      { duration: 280, easing: 'cubic-bezier(.4,0,.2,1)' }
    );
    animation.current.onfinish = () => {
      details.open = expanded.current;
      animation.current = null;
    };
  }

  return <details {...props} ref={ref} className="smooth-faq-item"><summary onClick={toggle} aria-expanded="false"><span>{question}</span><FaqIcon/></summary><div className="faq-answer"><p>{answer}</p></div></details>;
}
