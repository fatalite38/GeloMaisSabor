import React from 'react';
import FlavorCard from './FlavorCard';
import cocoImg from '../assets/coco-cuesta/agua-de-coco.webp';
import maracujaImg from '../assets/coco-cuesta/maracuja.webp';
import melanciaImg from '../assets/coco-cuesta/melancia.webp';
import laranjaImg from '../assets/flavors/laranja.jpg';
import macaVerdeImg from '../assets/flavors/maca-verde.jpg';
import morangoImg from '../assets/flavors/morango.jpg';
import uvaImg from '../assets/flavors/uva.jpg';

export interface Flavor {
  id: number;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  newPackaging: boolean;
}

const featuredFlavors: Flavor[] = [
  {
    id: 1,
    name: 'Água de Coco',
    image: cocoImg,
    imageAlt: 'Embalagem Coco Cuesta sabor Água de Coco, com fundo azul',
    description: 'Tropical e refrescante, para combinações leves e momentos que pedem frescor.',
    newPackaging: true,
  },
  {
    id: 2,
    name: 'Maracujá',
    image: maracujaImg,
    imageAlt: 'Embalagem Coco Cuesta sabor Maracujá, com fundo amarelo',
    description: 'Marcante e cítrico, uma escolha vibrante para dar personalidade à bebida.',
    newPackaging: true,
  },
  {
    id: 3,
    name: 'Melancia',
    image: melanciaImg,
    imageAlt: 'Embalagem Coco Cuesta sabor Melancia, com fundo preto',
    description: 'Leve e refrescante, com uma apresentação que chama atenção em qualquer ocasião.',
    newPackaging: true,
  },
];

const transitionFlavors: Flavor[] = [
  {
    id: 4,
    name: 'Morango',
    image: morangoImg,
    imageAlt: 'Apresentação do sabor Morango',
    description: 'Um sabor doce e aromático para combinações cheias de personalidade.',
    newPackaging: false,
  },
  {
    id: 5,
    name: 'Maçã Verde',
    image: macaVerdeImg,
    imageAlt: 'Apresentação do sabor Maçã Verde',
    description: 'Refrescância e um toque levemente ácido para equilibrar sua bebida.',
    newPackaging: false,
  },
  {
    id: 6,
    name: 'Laranja',
    image: laranjaImg,
    imageAlt: 'Apresentação do sabor Laranja',
    description: 'Cítrico e versátil para encontros, eventos e momentos de descontração.',
    newPackaging: false,
  },
  {
    id: 7,
    name: 'Uva',
    image: uvaImg,
    imageAlt: 'Apresentação do sabor Uva',
    description: 'Aroma envolvente e sabor marcante para uma experiência diferente.',
    newPackaging: false,
  },
];

const FlavorsSection: React.FC = () => (
  <section id="produtos" className="bg-cream py-24 sm:py-28" aria-labelledby="sabores-title">
    <div className="site-container">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div>
          <p className="section-kicker">Nosso portfólio</p>
          <h2 id="sabores-title" className="text-4xl font-black leading-tight tracking-[-0.035em] text-ink-950 sm:text-5xl">
            Um sabor para cada momento.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-black/60 lg:justify-self-end">
          Os primeiros sabores já apresentam a nova identidade Coco Cuesta. Os demais continuam disponíveis com a embalagem Mais Sabor enquanto os estoques são renovados.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {featuredFlavors.map((flavor) => <FlavorCard key={flavor.id} flavor={flavor} featured />)}
      </div>

      <div className="mt-20 flex flex-col gap-5 border-t border-black/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-cuesta-700">Também disponíveis</p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink-950">Sabores em transição de embalagem</h3>
        </div>
        <p className="max-w-lg text-sm leading-6 text-black/50">A identidade visual muda aos poucos. O cuidado e a experiência que você já conhece continuam os mesmos.</p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {transitionFlavors.map((flavor) => <FlavorCard key={flavor.id} flavor={flavor} />)}
      </div>
    </div>
  </section>
);

export default FlavorsSection;
