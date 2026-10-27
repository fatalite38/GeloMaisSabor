import { useEffect, useRef, useState } from 'react';
import { flavors } from '../data/flavors';
import CacoFlavor from './CacoFlavor';
import './Flavors.css';

function flavorFromUrl() {
  const id = new URLSearchParams(window.location.search).get('sabor');
  return flavors.find(flavor => flavor.id === id)?.id ?? flavors[0].id;
}

function revealFlavor(selector: HTMLDivElement | null, id: string) {
  const button = selector?.querySelector<HTMLButtonElement>(`[data-flavor="${id}"]`);
  if (!selector || !button) return;
  const left = button.offsetLeft - 8;
  const right = button.offsetLeft + button.offsetWidth + 8;
  if (left >= selector.scrollLeft && right <= selector.scrollLeft + selector.clientWidth) return;
  // Align to this item's snap position; a minimal scroll can snap back and crop it.
  // Only the horizontal rail moves, leaving the page's vertical position intact.
  selector.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

export default function FlavorsSection() {
  const [selectedId, setSelectedId] = useState(flavorFromUrl);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncSelection = () => setSelectedId(flavorFromUrl());
    window.addEventListener('popstate', syncSelection);
    return () => window.removeEventListener('popstate', syncSelection);
  }, []);

  useEffect(() => {
    const selector = selectorRef.current;
    if (!selector) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      flavors.forEach(flavor => { const image = new Image(); image.src = flavor.image; });
      observer.disconnect();
    }, { rootMargin: '200px' });
    observer.observe(selector);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    revealFlavor(selectorRef.current, selectedId);
  }, [selectedId]);

  const selectFlavor = (id: string) => {
    if (id === selectedId) { revealFlavor(selectorRef.current, id); return; }
    const url = new URL(window.location.href);
    url.searchParams.set('sabor', id);
    url.searchParams.delete('receita');
    window.history.pushState({}, '', url);
    setSelectedId(id);
  };

  return (
    <section id="produtos" className="flavors-section" aria-labelledby="sabores-title">
      <CacoFlavor selectedId={selectedId} selector={
        <div className="flavor-selector" ref={selectorRef} role="group" aria-label="Escolher sabor Coco Cuesta"
          onKeyDown={event => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            const current = flavors.findIndex(flavor => flavor.id === (event.target as HTMLButtonElement).dataset.flavor);
            if (current < 0) return;
            if (event.key === 'Tab') {
              const next = current + (event.shiftKey ? -1 : 1);
              if (next >= 0 && next < flavors.length) {
                // Keep focus movement inside the rail from scrolling the page.
                event.preventDefault();
                selectorRef.current?.querySelector<HTMLButtonElement>(`[data-flavor="${flavors[next].id}"]`)?.focus({ preventScroll: true });
              }
              return;
            }
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? flavors.length - 1
              : (current + (event.key === 'ArrowRight' ? 1 : -1) + flavors.length) % flavors.length;
            selectorRef.current?.querySelector<HTMLButtonElement>(`[data-flavor="${flavors[next].id}"]`)?.focus({ preventScroll: true });
            selectFlavor(flavors[next].id);
          }}>
          {flavors.map(flavor => (
            <button key={flavor.id} type="button" className="flavor-choice" aria-pressed={selectedId === flavor.id}
              data-flavor={flavor.id}
              aria-controls="sabor-destaque" onClick={() => selectFlavor(flavor.id)}
              onPointerEnter={() => { const image = new Image(); image.src = flavor.image; }}
              onFocus={() => { const image = new Image(); image.src = flavor.image; revealFlavor(selectorRef.current, flavor.id); }}
              style={{ '--flavor-surface': flavor.color } as React.CSSProperties}>
              <span className="flavor-choice-media">
                <img src={flavor.image} alt="" width={339} height={735} loading="lazy" decoding="async" />
              </span>
              <span className="flavor-choice-name">{flavor.name}</span>
            </button>
          ))}
        </div>
      } />
    </section>
  );
}
