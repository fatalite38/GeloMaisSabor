import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import cocoImg from '../assets/coco-cuesta/agua-de-coco.webp';
import maracujaImg from '../assets/coco-cuesta/maracuja.webp';
import melanciaImg from '../assets/coco-cuesta/melancia.webp';

const Banner: React.FC = () => (
  <section id="home" className="relative min-h-[820px] overflow-hidden bg-ink-950 pb-20 pt-40 text-white sm:pt-44 lg:flex lg:min-h-screen lg:items-center lg:py-44">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -right-32 top-24 h-[520px] w-[520px] rounded-full bg-cuesta-500/20 blur-[120px]" />
      <div className="absolute -bottom-48 -left-28 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[110px]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />
    </div>

    <div className="site-container relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-sm">
          <MapPin size={16} className="text-cuesta-300" aria-hidden="true" />
          Nascida em Botucatu, feita para refrescar
        </div>
        <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl xl:text-7xl">
          Sabor que transforma cada gole.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
          Misturas congeladas para saborizar bebidas, com praticidade, identidade e uma nova marca inspirada na nossa região.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href="#produtos" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-cuesta-300 px-7 py-4 font-bold text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-cuesta-100">
            Conheça os sabores
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          <a href="#sobre" className="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/10">
            Conheça a nova marca
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 border-l-2 border-cuesta-300 pl-4 text-sm leading-6 text-white/60">
          <span><strong className="block font-bold text-white">Mais Sabor agora é Coco Cuesta</strong>Durante a transição, você encontrará embalagens das duas marcas.</span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-3xl pt-8 lg:pt-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cuesta-300/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid grid-cols-3 items-end gap-2 sm:gap-5">
          <figure className="-rotate-3 overflow-hidden rounded-[1.5rem] bg-white p-2 shadow-2xl shadow-black/50 transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 sm:rounded-[2rem] sm:p-3">
            <img src={maracujaImg} alt="Nova embalagem Coco Cuesta sabor Maracujá" className="aspect-[0.47] w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]" />
          </figure>
          <figure className="relative z-10 -translate-y-6 overflow-hidden rounded-[1.5rem] bg-white p-2 shadow-2xl shadow-black/50 transition-transform duration-500 hover:-translate-y-9 sm:-translate-y-10 sm:rounded-[2rem] sm:p-3">
            <span className="absolute left-1/2 top-4 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-cuesta-300 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink-950 sm:top-6 sm:text-xs">Nova embalagem</span>
            <img src={cocoImg} alt="Nova embalagem Coco Cuesta sabor Água de Coco" className="aspect-[0.47] w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]" />
          </figure>
          <figure className="rotate-3 overflow-hidden rounded-[1.5rem] bg-white p-2 shadow-2xl shadow-black/50 transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 sm:rounded-[2rem] sm:p-3">
            <img src={melanciaImg} alt="Nova embalagem Coco Cuesta sabor Melancia" className="aspect-[0.47] w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
