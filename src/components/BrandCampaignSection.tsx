import React from 'react';
import campaignImg from '../assets/coco-cuesta/campanha-cinco-sabores.png';

const BrandCampaignSection: React.FC = () => (
  <section className="bg-cream py-24 sm:py-28" aria-labelledby="campanha-title">
    <div className="site-container">
      <div className="mb-10 max-w-3xl">
        <p className="section-kicker">A nova linha</p>
        <h2 id="campanha-title" className="text-4xl font-black leading-tight tracking-[-0.035em] text-ink-950 sm:text-5xl">
          A identidade Coco Cuesta reunida em cinco sabores.
        </h2>
      </div>

      <figure className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-2xl shadow-black/15">
        <img
          src={campaignImg}
          alt="Arte Coco Cuesta com as embalagens de Melancia, Água de Coco, Maracujá, Maçã Verde e Morango, além dos contatos da marca"
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
        />
      </figure>
    </div>
  </section>
);

export default BrandCampaignSection;
