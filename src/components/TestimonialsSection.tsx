import React from 'react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Larissa Vieira',
    rating: 5,
    comment: 'Experimentei o gelo saborizado de maracujá e fiquei impressionado! O sabor é simplesmente incrível.'
  },
  {
    id: 2,
    name: 'Marcos Aurélio',
    rating: 5,
    comment: 'O gelo de coco transformou completamente minhas bebidas aqui na adega. Recomendo muito!'
  },
  {
    id: 3,
    name: 'João Marques',
    rating: 5,
    comment: 'Uso o gelo saborizado de melancia para fazer meu suco. É um sucesso aqui em casa!'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl text-primary-800 mb-4">O que dizem nossos clientes</h2>
          <p className="font-nunito text-gray-600 text-xl max-w-2xl mx-auto">
            Veja o que nossos clientes estão falando sobre a experiência com o gelo saborizado Mais Sabor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;