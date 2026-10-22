import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { testimonials, leaveReviewUrl } from '../data/testimonials';
import './Reviews.css';

const mobileQuery = '(max-width: 700px)';
const motionQuery = '(prefers-reduced-motion: reduce)';

export default function TestimonialsSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [perPage, setPerPage] = useState(() => window.matchMedia(mobileQuery).matches ? 1 : 3);
  const [pageIndex, setPageIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia(motionQuery).matches);
  const [userPaused, setUserPaused] = useState(() => window.matchMedia(motionQuery).matches);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [tabActive, setTabActive] = useState(() => document.visibilityState === 'visible');
  const pageCount = Math.ceil(testimonials.length / perPage);
  const activePage = pageIndex % pageCount;
  const autoEnabled = !userPaused && !reducedMotion;
  const running = autoEnabled && !hovered && inView && tabActive;

  useEffect(() => {
    const query = window.matchMedia(mobileQuery);
    const sync = (event: MediaQueryListEvent) => {
      const nextPerPage = event.matches ? 1 : 3;
      setPageIndex(current => Math.floor(current * perPage / nextPerPage));
      setPerPage(nextPerPage);
    };
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, [perPage]);

  useEffect(() => {
    const query = window.matchMedia(motionQuery);
    const sync = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
      if (event.matches) setUserPaused(true);
    };
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const sync = () => setTabActive(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting && entry.intersectionRatio >= 0.2);
    }, { threshold: [0, 0.2] });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running || pageCount < 2) return;
    const timer = window.setInterval(() => setPageIndex(current => (current + 1) % pageCount), 5000);
    return () => window.clearInterval(timer);
  }, [running, pageCount]);

  const navigate = (direction: number) => {
    setUserPaused(true);
    setPageIndex(current => (current + direction + pageCount) % pageCount);
  };

  return (
    <section id="depoimentos" className="testimonials-section" aria-labelledby="reviews-title"
      onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }}
      onPointerLeave={event => { if (event.pointerType === 'mouse') setHovered(false); }}
      onFocusCapture={event => {
        if (event.target.matches(':focus-visible')) setUserPaused(true);
      }}>
      <div className="site-container">
        <div className="reviews-heading">
          <div>
            <p className="reviews-eyebrow">Experiências reais</p>
            <h2 id="reviews-title">Quem experimenta, recomenda.</h2>
          </div>
          <a className="button button-secondary reviews-google" href={leaveReviewUrl} target="_blank" rel="noopener noreferrer">
            Avaliar no Google <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="reviews-rotator" data-rotating={running} role="region" aria-roledescription="carrossel" aria-label="Depoimentos de clientes"
          onKeyDown={event => {
            if (event.altKey || event.ctrlKey || event.metaKey) return;
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              navigate(event.key === 'ArrowLeft' ? -1 : 1);
            }
          }}>
          <div ref={stageRef} id="review-slides" className="reviews-stage" aria-live={autoEnabled ? 'off' : 'polite'} aria-atomic="false">
            {Array.from({ length: pageCount }, (_, index) => (
              <div key={`${perPage}-${index}`} className="reviews-slide testimonial-grid" data-active={activePage === index}
                role="group" aria-roledescription={perPage === 1 ? 'avaliação' : 'conjunto de avaliações'}
                aria-label={`${index + 1} de ${pageCount}`} aria-hidden={activePage !== index}>
                {testimonials.slice(index * perPage, (index + 1) * perPage).map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            ))}
          </div>
          <div className="reviews-navigation" role="group" aria-label="Escolher avaliações" aria-describedby="reviews-navigation-help">
            {Array.from({ length: pageCount }, (_, index) => (
              <button key={index} type="button" className="review-page" aria-controls="review-slides"
                aria-current={activePage === index ? 'true' : undefined}
                aria-label={`Mostrar ${perPage === 1 ? 'avaliação' : 'avaliações'} de ${testimonials.slice(index * perPage, (index + 1) * perPage).map(testimonial => testimonial.name).join(', ')}`}
                onClick={() => { setUserPaused(true); setPageIndex(index); }} />
            ))}
          </div>
          <p id="reviews-navigation-help" className="sr-only">Selecione um indicador para ler as avaliações. A seleção manual e o foco de teclado pausam a alternância automática.</p>
        </div>
      </div>
    </section>
  );
}
