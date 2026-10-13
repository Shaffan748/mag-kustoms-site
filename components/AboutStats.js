'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Happy Brands' },
  { value: 10, suffix: 'K+', label: 'Custom Products' },
  { value: 100, suffix: '%', label: 'Quality Focused' },
];

export default function AboutStats() {
  const section = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (reduced) { setProgress(1); return; }
      const start = performance.now();
      const animate = (time) => {
        const elapsed = Math.min((time - start) / 1600, 1);
        setProgress(1 - Math.pow(1 - elapsed, 3));
        if (elapsed < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.3 });
    observer.observe(section.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return <section ref={section} className="about-stats-section" aria-label="MAG KUSTOMS in numbers">
    <div className="mk-container about-stats">
      {stats.map(({ value, suffix, label }) => <div className="about-stat" key={label}>
        <strong aria-label={`${value}${suffix}`}><span aria-hidden="true">{Math.round(value * progress)}{suffix}</span></strong>
        <span>{label}</span>
      </div>)}
    </div>
  </section>;
}
