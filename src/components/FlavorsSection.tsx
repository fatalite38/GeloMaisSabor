import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { flavors } from '../data/flavors';
import { whatsappUrl } from '../data/contact';

function flavorFromUrl() {
  const id = new URLSearchParams(window.location.search).get('sabor');
  return flavors.find(flavor => flavor.id === id)?.id ?? flavors[0].id;
}

export default function FlavorsSection() {
  const [selectedId, setSelectedId] = useState(flavorFromUrl);
  const selected = flavors.find(flavor => flavor.id === selectedId) ?? flavors[0];

  useEffect(() => {
    const syncSelection = () => setSelectedId(flavorFromUrl());
    window.addEventListener('popstate', syncSelection);
    return () => window.removeEventListener('popstate', syncSelection);
  }, []);

  const selectFlavor = (id: string) => {
    if (id === selectedId) return;
    const url = new URL(window.location.href);
    url.searchParams.set('sabor', id);
    window.history.pushState({}, '', url);
    setSelectedId(id);
  };

  return (
    <section id="produtos" className="tasting" aria-labelledby="sabores-title">
      <div className="site-container">
        <div className="tasting-heading">
          <h2 id="sabores-title">Escolha seu sabor.</h2>
          <p>Gelo saborizado em embalagens de 190 g.</p>
        </div>
        <div className="flavor-options" role="group" aria-label="Escolher sabor Coco Cuesta">
          {flavors.map(flavor => (
            <button key={flavor.id} type="button" className="flavor-option" aria-pressed={selectedId === flavor.id}
              aria-controls="sabor-destaque" onClick={() => selectFlavor(flavor.id)}
              style={{ '--flavor-accent': flavor.accent } as React.CSSProperties}>
              <img src={flavor.image} alt="" width={339} height={735} loading="lazy" decoding="async" />
              <span>{flavor.name}</span>
              <span className="option-state" aria-hidden="true">{selectedId === flavor.id ? 'Selecionado' : ''}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="tasting-stage" style={{ backgroundColor: selected.color, '--flavor-accent': selected.accent } as React.CSSProperties}>
        <article id="sabor-destaque" className="site-container tasting-layout" aria-labelledby="selected-flavor-title">
          <figure className="tasting-pack">
            <img src={selected.image} alt={`Embalagem oficial Coco Cuesta sabor ${selected.name}, 190 g`} width={339} height={735} loading="lazy" decoding="async" />
          </figure>
          <div className="tasting-detail">
            <div className="tasting-title">
              <h3 id="selected-flavor-title">{selected.name}</h3>
              <p className="tasting-profile">{selected.description}</p>
            </div>
            <div className="serving-suggestion">
              <h4>Combina com</h4>
              <p className="serving-pair">{selected.serving}</p>
              <a className="button button-secondary tasting-how" href="#ocasioes">Ver como servir</a>
            </div>
            <a className="button button-dark tasting-order" href={whatsappUrl(`Olá! Quero pedir Coco Cuesta de ${selected.name}. Podem informar a disponibilidade, as quantidades e as condições de entrega?`)} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={19} aria-hidden="true" /> Pedir {selected.name}
            </a>
          </div>
        </article>
      </div>
      <p className="sr-only" role="status" aria-live="polite">Sabor selecionado: {selected.name}.</p>
    </section>
  );
}
