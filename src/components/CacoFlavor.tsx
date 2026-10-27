import { useEffect, useRef, useState, type ReactNode } from 'react';
import { flavors } from '../data/flavors';
import caco from '../assets/coco-cuesta/aprovados/caco-apresentando.webp';
import cacoSmall from '../assets/coco-cuesta/aprovados/caco-apresentando-768.webp';

const motionQuery = '(prefers-reduced-motion: reduce)';

export default function CacoFlavor({ selectedId, selector }: { selectedId: string; selector: ReactNode }) {
  const [displayedId, setDisplayedId] = useState(selectedId);
  const displayedRef = useRef(selectedId);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia(motionQuery).matches);
  const productRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const frostRef = useRef<HTMLDivElement>(null);
  const displayed = flavors.find(flavor => flavor.id === displayedId) ?? flavors[0];

  useEffect(() => {
    const query = window.matchMedia(motionQuery);
    const sync = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (selectedId === displayedRef.current) return;
    const product = productRef.current;
    const caption = captionRef.current;
    const frost = frostRef.current;
    if (!product || !caption || !frost) return;

    let cancelled = false;
    let frame = 0;
    const animations: Animation[] = [];
    const animate = (element: HTMLElement, frames: Keyframe[], options: KeyframeAnimationOptions) => {
      const animation = element.animate(frames, options);
      animations.push(animation);
      return animation.finished.catch(() => undefined);
    };

    const change = async () => {
      const target = flavors.find(flavor => flavor.id === selectedId) ?? flavors[0];
      const image = new Image();
      image.src = target.image;
      await image.decode().catch(() => undefined);
      if (cancelled) return;

      await Promise.all([
        animate(product, reducedMotion
          ? [{ opacity: 1 }, { opacity: 0 }]
          : [{ opacity: 1, transform: 'translateY(0) rotate(8deg) scale(1)' }, { opacity: 0, transform: 'translateY(0) rotate(8deg) scale(.92)' }],
        { duration: reducedMotion ? 60 : 160, easing: 'ease-out', fill: 'forwards' }),
        animate(caption, [{ opacity: 1 }, { opacity: 0 }], { duration: reducedMotion ? 60 : 160, fill: 'forwards' }),
      ]);
      if (cancelled) return;

      displayedRef.current = target.id;
      setDisplayedId(target.id);
      frame = requestAnimationFrame(() => {
        if (cancelled) return;
        animations.forEach(animation => animation.cancel());
        animate(product, reducedMotion
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [
            { opacity: 0, transform: 'translateY(18px) rotate(2deg) scale(.94)', offset: 0 },
            { opacity: 1, transform: 'translateY(-4px) rotate(10deg) scale(1.015)', offset: .66 },
            { opacity: 1, transform: 'translateY(0) rotate(8deg) scale(1)', offset: 1 },
          ], { duration: reducedMotion ? 120 : 540, easing: 'cubic-bezier(.2,.75,.25,1)' });
        animate(caption, [{ opacity: 0 }, { opacity: 1 }], { duration: reducedMotion ? 120 : 360, easing: 'ease-out' });
        if (!reducedMotion) {
          animate(frost, [
            { opacity: 0, transform: 'translateY(5px) scale(.7)', offset: 0 },
            { opacity: .9, transform: 'translateY(-3px) scale(1)', offset: .3 },
            { opacity: 0, transform: 'translateY(-13px) scale(1.15)', offset: 1 },
          ], { duration: 440, delay: 60, easing: 'ease-out' });
        }
      });
    };
    void change();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      animations.forEach(animation => animation.cancel());
    };
  }, [selectedId, reducedMotion]);

  return (
    <div className="flavor-scene" style={{ backgroundColor: displayed.color }} data-flavor={displayed.id}>
      <article id="sabor-destaque" className="site-container flavor-layout" aria-labelledby="selected-flavor-title">
        <h2 id="sabores-title" className="flavors-heading">Escolha seu sabor.</h2>
        <figure className="caco-presentation">
          <img className="caco-character" src={caco} srcSet={`${cacoSmall} 768w, ${caco} 1024w`}
            sizes="(max-width: 900px) 240px, 440px"
            alt="Caco, mascote da Coco Cuesta, apresentando o sabor na palma da mão"
            width={1024} height={1536} loading="lazy" decoding="async" />
          <div className="caco-product" ref={productRef}>
            <img src={displayed.image} alt={`Embalagem oficial Coco Cuesta sabor ${displayed.name}, 190 g`}
              width={339} height={735} loading="lazy" decoding="async" />
          </div>
          <div className="caco-frost" ref={frostRef} aria-hidden="true">
            <svg viewBox="0 0 120 70" fill="none">
              <path d="M15 40c-5-6-6-10-3-15 6 3 9 7 8 12-1 4-3 5-5 3Z" fill="#0094f6" />
              <path d="m93 17 8-9 8 9-8 9Z" fill="#fff" stroke="#368ab0" strokeWidth="2" />
              <path d="M104 54c1-6 5-10 10-10 1 7-1 11-6 13-3 1-5 0-4-3Z" fill="#0094f6" />
            </svg>
          </div>
        </figure>
        <div className="flavor-caption">
          <div className="flavor-caption-current" ref={captionRef}>
            <h3 id="selected-flavor-title" className="flavor-name">{displayed.name}</h3>
            <p>{displayed.description}</p>
          </div>
          {/* Reserve the tallest text at this width without fixing or clipping its height. */}
          {flavors.map(flavor => (
            <div key={flavor.id} className="flavor-caption-size" aria-hidden="true">
              <span className="flavor-name">{flavor.name}</span>
              <p>{flavor.description}</p>
            </div>
          ))}
        </div>
        {selector}
      </article>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{displayed.name}. {displayed.description}</p>
    </div>
  );
}
