import historyLogo from '../assets/coco-cuesta/aprovados/logo-contorno-escuro-320.webp';
import historyLogoLarge from '../assets/coco-cuesta/aprovados/logo-contorno-escuro-480.webp';
import './History.css';

export default function AboutSection() {
  return (
    <section id="sobre" className="history-section section-space" aria-labelledby="history-title">
      <div className="site-container history-layout">
        <div className="history-copy">
          <h2 id="history-title">Nossa história</h2>
          <div className="history-chapter">
            <h3>Uma ideia que ganhou sabor</h3>
            <p>A Mais Sabor foi fundada em setembro de 2021, em Botucatu, no interior de São Paulo. Seu idealizador, Fernando Pedrozo, encontrou no gelo saborizado uma oportunidade de inovar e apresentar outras formas de preparar bebidas.</p>
            <p>Foi com essa proposta que a Gelo Mais Sabor começou sua trajetória: desenvolver produtos que levassem sabor e praticidade para o momento de servir.</p>
          </div>
          <div className="history-chapter">
            <h3>A evolução para Coco Cuesta</h3>
            <p>A Mais Sabor agora se apresenta como <span translate="no">Coco Cuesta</span>. A nova identidade se conecta à origem da marca em Botucatu e dá continuidade à história construída até aqui.</p>
            <p>A mudança de nome e apresentação acontece aos poucos. Durante a transição, você pode encontrar produtos com embalagens das duas marcas.</p>
          </div>
        </div>
        <div className="history-logo-panel">
          <img className="history-brand" src={historyLogoLarge} srcSet={`${historyLogo} 320w, ${historyLogoLarge} 480w`} sizes="(max-width:359px) calc(100vw - 100px), (max-width:700px) 240px, (max-width:999px) 320px, 400px" alt="Coco Cuesta" width={1620} height={971} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
