import { Star } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial" aria-labelledby={`review-${testimonial.id}`}>
      <span className="stars" role="img" aria-label={`${testimonial.rating} de 5 estrelas, nota preservada no acervo`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
        ))}
      </span>
      <blockquote>“{testimonial.comment}”</blockquote>
      <h3 id={`review-${testimonial.id}`} className="review-author">{testimonial.name}</h3>
    </article>
  );
}
