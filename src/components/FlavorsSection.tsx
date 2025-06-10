import React, { useState } from 'react';
import FlavorCard from './FlavorCard';
import cocoImg from '../assets/flavors/coco.jpg';
import laranjaImg from '../assets/flavors/laranja.jpg';
import macaVerdeImg from '../assets/flavors/maca-verde.jpg';
import morangoImg from '../assets/flavors/morango.jpg';
import melanciaImg from '../assets/flavors/melancia.jpg';
import maracujaImg from '../assets/flavors/maracuja.jpg';
import abacaxiImg from '../assets/flavors/abacaxi.jpg';
import uvaImg from '../assets/flavors/uva.jpg';


export interface Flavor {
  id: number;
  name: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  image: string;
  description: string;
}

const flavors: Flavor[] = [
  {
    id: 1,
    name: 'Coco',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-blue-600',
    image: cocoImg,
    description: 'Refrescante e cremoso, com notas tropicais de coco fresco.'
  },
  {
    id: 2,
    name: 'Maracujá',
    color: 'bg-passion-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-passion-600',
    image: maracujaImg,
    description: 'Sabor cítrico e doce, perfeito para bebidas refrescantes.'
  },
  {
    id: 3,
    name: 'Melancia',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-watermelon-500',
    image: melanciaImg,
    description: 'Doce e suculento, traz toda a frescura da melancia.'
  },
  {
    id: 4,
    name: 'Morango',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-red-600',
    image: morangoImg,
    description: 'Doce e aromático, com o sabor autêntico de morangos frescos.'
  },
  {
    id: 5,
    name: 'Maçã-Verde',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-lime-600',
    image: macaVerdeImg,
    description: 'Refrescante e levemente ácido, com o sabor característico da maçã verde.'
  },
  {
    id: 6,
    name: 'Laranja',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-orange-600',
    image: laranjaImg,
    description: 'Cítrico e refrescante, com o sabor autêntico da laranja.'
  },
  {
    id: 7,
    name: 'Uva',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-purple-800',
    image: uvaImg,
    description: 'Aroma envolvente e sabor marcante de uva fresca e suculenta.'
  },
  {
    id: 8,
    name: 'Abacaxi',
    color: 'bg-white-500',
    bgColor: 'bg-white/80',
    hoverColor: 'hover:bg-pineapple-600',
    image: abacaxiImg,
    description: 'Doce e refrescante, com o sabor tropical do abacaxi.'
  }
];

const FlavorsSection: React.FC = () => {
  const [activeFlavor, setActiveFlavor] = useState<Flavor | null>(null);

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl text-primary-800 mb-4">Nossos Sabores</h2>
          <p className="font-nunito text-gray-600 text-xl max-w-2xl mx-auto">
            Descubra nossa variedade de sabores tropicais que vão transformar suas bebidas em experiências únicas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor) => (
            <FlavorCard 
              key={flavor.id} 
              flavor={flavor}
              isActive={activeFlavor?.id === flavor.id}
              onClick={() => setActiveFlavor(flavor === activeFlavor ? null : flavor)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlavorsSection;