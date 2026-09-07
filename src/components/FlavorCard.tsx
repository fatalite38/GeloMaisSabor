import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Flavor } from './FlavorsSection';

interface FlavorCardProps {
  flavor: Flavor;
  featured?: boolean;
}

const FlavorCard: React.FC<FlavorCardProps> = ({ flavor, featured = false }) => (
  <article className={`group relative overflow-hidden border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 ${featured ? 'rounded-[2rem]' : 'rounded-3xl'}`}>
    <div className={`relative overflow-hidden ${featured ? 'h-[31rem] bg-gradient-to-b from-cuesta-50 to-white sm:h-[36rem]' : 'h-56'}`}>
      <img
        src={flavor.image}
        alt={flavor.imageAlt}
        loading="lazy"
        className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.035] ${featured ? 'object-contain p-5 [filter:drop-shadow(0_20px_18px_rgba(0,0,0,.18))] sm:p-7' : 'object-cover'}`}
      />
      <span className={`absolute left-5 top-5 rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider ${flavor.newPackaging ? 'bg-ink-950 text-white' : 'border border-black/10 bg-white/90 text-ink-900 backdrop-blur'}`}>
        {flavor.newPackaging ? 'Nova embalagem' : 'Em transição'}
      </span>
    </div>

    <div className={featured ? 'p-7' : 'p-6'}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-black/40">Sabor</p>
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-extrabold tracking-tight text-ink-950`}>{flavor.name}</h3>
        </div>
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-black/[0.045] text-ink-900 transition-colors group-hover:bg-cuesta-300" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <p className="mt-4 leading-7 text-black/60">{flavor.description}</p>
    </div>
  </article>
);

export default FlavorCard;
