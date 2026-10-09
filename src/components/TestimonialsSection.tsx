import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Lívia',
    rating: 5,
    comment: 'Entrega rápida, embalagem impecável e o sabor surpreendeu demais. Excelente produto!',
  },
  {
    id: 2,
    name: 'Danilo',
    rating: 5,
    comment: 'Atendimento e produto diferenciado',
  },
  {
    id: 3,
    name: 'Leonardo',
    rating: 5,
    comment: 'Gelo com a melhor qualidade. O gelo não derrete rápido e o sabor é top!',
  },
];

const TestimonialsSection: React.FC = () => (
  <section id="depoimentos" className="bg-cream py-24 sm:py-28" aria-labelledby="avaliacoes-title">
    <div className="site-container">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Experiências reais</p>
          <h2 id="avaliacoes-title" className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.035em] text-ink-950 sm:text-5xl">Quem experimenta, recomenda.</h2>
        </div>
        <a href="https://g.page/r/CVFHEu7L1Z_zEAI/review" target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 self-start rounded-full border border-black/15 px-6 py-3 font-bold text-ink-950 transition-colors hover:bg-white sm:self-auto">
          Avaliar no Google
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
