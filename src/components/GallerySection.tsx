import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import trio from '../assets/coco-cuesta/aprovados/trio-flat-lay.webp';
import trioSmall from '../assets/coco-cuesta/aprovados/trio-flat-lay-768.webp';
import campaign from '../assets/coco-cuesta/campanha-cinco-sabores.webp';
import campaignSmall from '../assets/coco-cuesta/campanha-cinco-sabores-1000.webp';
import './Gallery.css';

const slides = [
  {
    id: 'trio', image: trio, small: trioSmall, width: 1122, height: 1402,
    title: 'Água de Coco, Maracujá e Melancia',
    alt: 'Três sachês Coco Cuesta de Água de Coco, Maracujá e Melancia sobre uma superfície azul, entre frutas, gotas e cubos de gelo',
    sizes: '(max-width: 359px) 232px, (max-width: 700px) 256px, 329px',
    smallWidth: 768,
  },
  {
    id: 'linha', image: campaign, small: campaignSmall, width: 1672, height: 941,
    title: 'A linha Coco Cuesta',
    alt: 'Campanha Coco Cuesta com logotipo e as embalagens de Melancia, Água de Coco, Maracujá, Maçã Verde e Morango entre gelo, água e frutas',
    sizes: '(max-width: 359px) 516px, (max-width: 700px) 569px, 729px',
    smallWidth: 1000,
  },
];

function slideFromUrl() {
  const id = new URLSearchParams(window.location.search).get('foto');
  return Math.max(0, slides.findIndex(slide => slide.id === id));
}

export default function GallerySection() {
  const [active, setActive] = useState(slideFromUrl);
  const activeRef = useRef(active);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const frameRef = useRef<number | null>(null);
  const scrollTargetRef = useRef<number | null>(null);

  const select = useCallback((index: number, updateUrl: boolean) => {
    activeRef.current = index;
    setActive(index);
    if (updateUrl) {
      const url = new URL(window.location.href);
      if (url.searchParams.get('foto') !== slides[index].id) {
        url.searchParams.set('foto', slides[index].id);
        window.history.replaceState({}, '', url);
      }
    }
  }, []);

  const scrollToSlide = useCallback((index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const item = itemsRef.current[index];
    if (!track || !item) return;
    const targetLeft = Math.min(item.offsetLeft, track.scrollWidth - track.clientWidth);
    scrollTargetRef.current = Math.abs(track.scrollLeft - targetLeft) > 2 ? index : null;
    track.scrollTo({ left: item.offsetLeft, behavior });
  }, []);

  const show = (index: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    select(next, true);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollToSlide(next, reducedMotion ? 'auto' : 'smooth');
  };

  const syncScrolledSlide = useCallback(() => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      const track = trackRef.current;
      if (!track) return;

      const target = scrollTargetRef.current;
      if (target !== null) {
        const item = itemsRef.current[target];
        const targetLeft = Math.min(item?.offsetLeft ?? 0, track.scrollWidth - track.clientWidth);
        if (Math.abs(track.scrollLeft - targetLeft) > 2) return;
        scrollTargetRef.current = null;
      }

      let closest = 0;
      let distance = Number.POSITIVE_INFINITY;
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const itemDistance = Math.abs(item.offsetLeft - track.scrollLeft);
        if (itemDistance < distance) {
          closest = index;
          distance = itemDistance;
        }
      });
      if (closest !== activeRef.current) select(closest, true);
    });
  }, [select]);

  useEffect(() => {
    const syncFromUrl = () => {
      const index = slideFromUrl();
      select(index, false);
      scrollToSlide(index, 'auto');
    };
    let resizeFrame = 0;
    const realign = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => scrollToSlide(activeRef.current, 'auto'));
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('resize', realign);
    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('resize', realign);
      window.cancelAnimationFrame(resizeFrame);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [select, scrollToSlide]);

  const keyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    const destinations: Record<string, number> = {
      ArrowLeft: activeRef.current - 1,
      ArrowRight: activeRef.current + 1,
      Home: 0,
      End: slides.length - 1,
    };
    if (event.key in destinations) {
      event.preventDefault();
      show(destinations[event.key]);
    }
  };

  const releaseScrollTarget = () => { scrollTargetRef.current = null; };

  return (
    <section id="galeria" className="brand-gallery-section section-space" aria-labelledby="gallery-title">
      <div className="site-container">
        <h2 id="gallery-title" className="brand-gallery-heading">Galeria</h2>
        <div className="brand-gallery" style={{ '--selected-art-ratio': slides[active].width / slides[active].height } as CSSProperties}>
          <div id="galeria-imagens" className="brand-gallery-track" ref={trackRef}
            role="region" aria-roledescription="carrossel" aria-label="Galeria Coco Cuesta"
            tabIndex={0} onKeyDown={keyboard} onScroll={syncScrolledSlide}
            onPointerDown={releaseScrollTarget} onWheel={releaseScrollTarget}>
            {slides.map((slide, index) => (
              <figure key={slide.id} className="brand-gallery-frame"
                ref={node => { itemsRef.current[index] = node; }}
                role="group" aria-roledescription="imagem" aria-label={`${index + 1} de ${slides.length}`}
                style={{ '--art-ratio': slide.width / slide.height } as CSSProperties}>
                <img src={slide.image} srcSet={`${slide.small} ${slide.smallWidth}w, ${slide.image} ${slide.width}w`}
                  sizes={slide.sizes} alt={slide.alt} width={slide.width} height={slide.height}
                  loading="lazy" decoding="async" draggable={false} />
              </figure>
            ))}
          </div>
          <div className="brand-gallery-controls" data-whatsapp-clearance>
            <button type="button" className="brand-gallery-arrow" aria-label="Imagem anterior"
              aria-controls="galeria-imagens" disabled={active === 0} onClick={() => show(active - 1)}>
              <ArrowLeft aria-hidden="true" size={22} />
            </button>
            <div className="brand-gallery-indicators" role="group" aria-label="Escolher imagem">
              {slides.map((slide, index) => (
                <button key={slide.id} type="button" aria-label={`Mostrar imagem ${index + 1}: ${slide.title}`}
                  aria-current={active === index ? 'true' : undefined} aria-controls="galeria-imagens"
                  onClick={() => show(index)}><span aria-hidden="true" /></button>
              ))}
            </div>
            <span className="brand-gallery-count" aria-hidden="true">{active + 1} / {slides.length}</span>
            <button type="button" className="brand-gallery-arrow" aria-label="Próxima imagem"
              aria-controls="galeria-imagens" disabled={active === slides.length - 1} onClick={() => show(active + 1)}>
              <ArrowRight aria-hidden="true" size={22} />
            </button>
          </div>
          <p className="sr-only" role="status" aria-live="polite">Imagem {active + 1} de {slides.length}: {slides[active].title}.</p>
        </div>
      </div>
    </section>
  );
}
