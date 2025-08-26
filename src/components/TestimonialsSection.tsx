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
    name: 'Thais',
    rating: 5,
    comment: 'O Melhor Gelo Saborizado de Todos os Tempos: Sabor, Qualidade e Variedade Incomparáveis.'
  },
  {
    id: 2,
    name: 'Willian',
    rating: 5,
    comment: 'O melhor gelo de sabor de Botucatu e região, com muito sabor e qualidade'
  },
  {
    id: 3,
    name: 'Leonardo',
    rating: 5,
    comment: ' Gelo com a melhor qualidade. O gelo não derrete rápido e o sabor é top!'
  },
  {
  id: 5,
  name: 'Boto Gelo',
  rating: 5,
  comment: 'Ótimo atendimento e produto muito bom, sem comparação. Com certeza o melhor do mercado!'
  },
  {
  id: 5,
  name: 'Livia',
  rating: 5,
  comment: 'Entrega rápida, embalagem impecável e o sabor surpreendeu demais. Excelente produto!'
  },
  {
  id: 6,
  name: 'Danilo',
  rating: 5,
  comment: 'Atendimento e produto diferenciado'
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
          <button
                  type="button"
                  className="px-6 py-4 bg-white border-pineapple-600 hover:bg-pineapple-600 text-primary-800 font-nunito font-bold rounded-lg transition-all duration-300 flex items-center align-middle transform hover:scale-105 shadow-lg mt-12 mx-auto"
                >
                  <a href="https://g.page/r/CVFHEu7L1Z_zEAI/review" target="_blank" rel="noopener noreferrer">Deixe sua avaliação aqui!</a>
                </button>
      </div>
    </section>
    
  );
};

export default TestimonialsSection;