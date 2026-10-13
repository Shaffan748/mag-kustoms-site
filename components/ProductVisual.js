import Image from 'next/image';

export function ProductVisual({ type='patch', label='MAG', className='', image, alt, imageFit='contain' }) {
  if (image) {
    return <div className={`product-visual ${type} ${className}`}>
      <Image src={image} alt={alt || label} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: imageFit }} priority />
    </div>;
  }
  return <div className={`product-visual ${type} ${className}`} aria-hidden="true">
    <div className="visual-ring"></div><div className="visual-core"><span>{label}</span><small>KUSTOMS</small></div><div className="visual-glow"></div>
  </div>
}
