import { ArrowUpRight } from 'lucide-react';
import type { Flavor } from '../data/flavors';
import { whatsappUrl } from '../data/contact';

export default function FlavorCard({ flavor }: { flavor: Flavor }) {
  return (
    <article className="flavor">
      <div className="flavor-image" style={{ backgroundColor: flavor.color }}>
        <img src={flavor.image} alt={`Embalagem oficial Coco Cuesta sabor ${flavor.name}`}
          width={339} height={735} loading="lazy" decoding="async" />
      </div>
      <h3>{flavor.name}</h3>
      <p>{flavor.description}</p>
      <a href={whatsappUrl(`Olá! Quero conhecer o gelo saborizado Coco Cuesta de ${flavor.name}. Podem me informar a disponibilidade e as condições para pedir?`)}
        target="_blank" rel="noopener noreferrer" aria-label={`Consultar sabor ${flavor.name} no WhatsApp`}>
        Consultar sabor <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}
