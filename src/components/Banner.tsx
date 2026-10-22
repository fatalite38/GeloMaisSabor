import panorama from '../assets/coco-cuesta/aprovados/banner-aqua-1774.webp';
import panoramaMedium from '../assets/coco-cuesta/aprovados/banner-aqua-1280.webp';
import panoramaSmall from '../assets/coco-cuesta/aprovados/banner-aqua-768.webp';
import portrait from '../assets/coco-cuesta/aprovados/banner-aqua-mobile-704.webp';
import portraitSmall from '../assets/coco-cuesta/aprovados/banner-aqua-mobile-390.webp';
import './CampaignHero.css';

export default function Banner() {
  return (
    <section id="home" className="aqua-hero" aria-labelledby="hero-title">
      <div className="aqua-hero-copy">
        <h1 id="hero-title">Sabor que refresca.</h1>
        <p>Gelo saborizado Coco Cuesta.</p>
        <a className="button button-dark" href="#produtos">Conhecer os sabores</a>
      </div>
      <picture className="aqua-hero-art">
        <source media="(max-width: 600px)" srcSet={`${portraitSmall} 390w, ${portrait} 704w`} sizes="100vw" width={704} height={880} />
        <img src={panorama} srcSet={`${panoramaSmall} 768w, ${panoramaMedium} 1280w, ${panorama} 1774w`} sizes="100vw" alt="Sachês Coco Cuesta de Água de Coco, Maracujá e Melancia entre frutas, gotas de água e gelo sobre fundo aqua" width={1774} height={887} fetchPriority="high" />
      </picture>
    </section>
  );
}
