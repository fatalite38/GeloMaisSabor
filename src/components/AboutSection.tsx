import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import logoImg from '../assets/coco-cuesta/logo-coco-cuesta.webp';

const AboutSection: React.FC = () => (
  <section id="sobre" className="relative overflow-hidden bg-cuesta-300 py-24 sm:py-28" aria-labelledby="sobre-title">
    <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border-[90px] border-white/15" aria-hidden="true" />
    <div className="site-container relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-ink-800">Uma nova fase</p>
        <h2 id="sobre-title" className="text-4xl font-black leading-[1.04] tracking-[-0.04em] text-ink-950 sm:text-5xl lg:text-6xl">
          De Mais Sabor para Coco Cuesta.
        </h2>
        <p className="mt-7 text-lg leading-8 text-ink-800">
          Nascemos em Botucatu com a vontade de criar uma forma diferente de refrescar e saborizar bebidas. Crescemos, chegamos a novos momentos e entendemos que nossa marca também precisava evoluir.
        </p>
        <p className="mt-5 text-lg leading-8 text-ink-800">
          Coco Cuesta traduz essa evolução: mantém a experiência construída pela Mais Sabor e ganha uma identidade mais forte, conectada à nossa origem e preparada para os próximos passos.
        </p>
        <a href="#contato" className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-4 font-bold text-white transition-transform hover:-translate-y-0.5">
          Fale com a Coco Cuesta
          <ArrowRight size={19} aria-hidden="true" />
        </a>
      </div>

      <div className="relative rounded-[2.25rem] bg-ink-950 p-8 text-white shadow-2xl shadow-cuesta-700/25 sm:p-12">
        <div className="absolute right-8 top-8 h-3 w-3 rounded-full bg-cuesta-300 shadow-[0_0_28px_8px_rgba(0,148,246,.4)]" aria-hidden="true" />
        <img src={logoImg} alt="Coco Cuesta" className="mx-auto w-full max-w-md" />
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Nossa origem</p>
            <p className="mt-2 flex items-center gap-2 font-bold"><MapPin size={17} className="text-cuesta-300" aria-hidden="true" /> Botucatu, São Paulo</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Nossa essência</p>
            <p className="mt-2 font-bold">Mesma história. Nova identidade.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
