import Image from 'next/image';

const platforms = [
  ['whatsapp', 'WhatsApp'],
  ['instagram', 'Instagram'],
  ['facebook', 'Facebook'],
  ['twitter-x', 'X (Twitter)'],
  ['pinterest', 'Pinterest'],
];

export default function SocialLinks() {
  return <nav className="social-row" aria-label="Social media">
    {platforms.map(([icon, label]) => <a key={icon} href="#" aria-label={label} title={label}>
      <Image src={`/icons/social/${icon}.svg`} alt="" width={18} height={18} aria-hidden="true" />
    </a>)}
  </nav>;
}
