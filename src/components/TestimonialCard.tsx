import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    rating: number;
    comment: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <article className="flex h-full flex-col rounded-[1.75rem] border border-black/10 bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-8">
    <div className="flex gap-1 text-[#f2b705]" aria-label={`${testimonial.rating} de 5 estrelas`}>
      {Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} size={18} fill="currentColor" aria-hidden="true" />)}
    </div>
    <blockquote className="mt-6 flex-1 text-lg font-medium leading-8 text-ink-800">“{testimonial.comment}”</blockquote>
    <p className="mt-7 border-t border-black/10 pt-5 font-extrabold text-ink-950">{testimonial.name}</p>
  </article>
);

export default TestimonialCard;
