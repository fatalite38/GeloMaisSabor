import { CupSoda, GlassWater, Snowflake } from 'lucide-react';
import './HowToUse.css';

// General serving directions already present in ExperienceSection and data/flavors.
// No manufacturer-verified freezing duration, temperature or storage data is available.
const steps = [
  { title: 'Prepare o gelo', text: 'Separe o sabor escolhido para servir congelado.', Icon: Snowflake },
  { title: 'Coloque no copo', text: 'Abra a embalagem e coloque o gelo no copo.', Icon: GlassWater },
  { title: 'Complete com a bebida', text: 'Adicione sua bebida e misture antes de servir.', Icon: CupSoda },
];

export default function HowToUseSection() {
  return (
    <section id="como-usar" className="usage-section" aria-labelledby="usage-title">
      <div className="site-container">
        <h2 id="usage-title">Servir é simples.</h2>
        <ol className="usage-steps">
          {steps.map(({ title, text, Icon }, index) => (
            <li key={title} className="usage-step">
              <div className="usage-mark" aria-hidden="true"><Icon size={25} strokeWidth={1.8} /><span>{index + 1}</span></div>
              <div className="usage-copy"><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
