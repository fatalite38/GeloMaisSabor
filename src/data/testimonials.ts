// Preserved from 436598c:src/components/TestimonialsSection.tsx.
// Individual ratings belong to the site's archive, not a current Google aggregate.
export interface Testimonial { id:string; name:string; rating:number; comment:string; source:string }
export const reviewProfileUrl='https://g.page/r/CVFHEu7L1Z_zEAI';
export const leaveReviewUrl='https://g.page/r/CVFHEu7L1Z_zEAI/review';
export const testimonials:Testimonial[]=[
 {id:'thais',name:'Thais',rating:5,comment:'O Melhor Gelo Saborizado de Todos os Tempos: Sabor, Qualidade e Variedade Incomparáveis.',source:'Acervo do site Mais Sabor'},
 {id:'willian',name:'Willian',rating:5,comment:'O melhor gelo de sabor de Botucatu e região, com muito sabor e qualidade',source:'Acervo do site Mais Sabor'},
 {id:'leonardo',name:'Leonardo',rating:5,comment:' Gelo com a melhor qualidade. O gelo não derrete rápido e o sabor é top!',source:'Acervo do site Mais Sabor'},
 {id:'boto-gelo',name:'Boto Gelo',rating:5,comment:'Ótimo atendimento e produto muito bom, sem comparação. Com certeza o melhor do mercado!',source:'Acervo do site Mais Sabor'},
 {id:'livia',name:'Livia',rating:5,comment:'Entrega rápida, embalagem impecável e o sabor surpreendeu demais. Excelente produto!',source:'Acervo do site Mais Sabor'},
 {id:'danilo',name:'Danilo',rating:5,comment:'Atendimento e produto diferenciado',source:'Acervo do site Mais Sabor'},
];

// The three examples in the supplied reference; keep the complete archive above.
const featuredIds = ['livia', 'danilo', 'leonardo'];
export const featuredTestimonials = featuredIds.flatMap(id => testimonials.filter(testimonial => testimonial.id === id));
