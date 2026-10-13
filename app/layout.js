import './globals.css';
import { SiteShell } from '../components/SiteShell';
import { site } from '../lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s | MAG KUSTOMS' },
  description: site.description,
  keywords: ['custom patches','DTF transfers','custom stickers','custom packaging','woven labels','embroidery digitizing','custom promotional products','MAG KUSTOMS'],
  alternates: { canonical: '/' },
  icons: { icon: '/images/monogram-clean.webp', apple: '/images/monogram-clean.webp' },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, type: 'website', images: ['/images/hero-products-clean.webp'] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/images/hero-products-clean.webp'] },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}){
  const jsonLd={
    '@context':'https://schema.org',
    '@type':'Organization',
    name:'MAG KUSTOMS',
    url:site.url,
    description:site.description,
    logo:`${site.url}/images/logo-horizontal.webp`,
    sameAs:[]
  };
  return <html lang="en"><body><SiteShell>{children}</SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} /></body></html>;
}
