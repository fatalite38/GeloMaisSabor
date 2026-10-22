import { whatsappUrl } from '../data/contact';

export default function TradeSection() {
  return (
    <section id="revenda" className="trade-section trade-compact" aria-labelledby="trade-title">
      <div className="site-container trade-compact-layout">
        <div>
          <h2 id="trade-title">Para seu negócio ou evento</h2>
          <p>Converse com a equipe sobre disponibilidade e condições para revenda ou eventos.</p>
        </div>
        <a className="button button-light" href={whatsappUrl('Olá! Gostaria de consultar Coco Cuesta para meu negócio ou evento. Podem me informar os sabores disponíveis e as condições?')}
          target="_blank" rel="noopener noreferrer">Falar com a equipe</a>
      </div>
    </section>
  );
}
