import icon from '../assets/icons/icon-whatsapp.svg';
import { whatsappUrl } from '../data/contact';

export default function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Coco Cuesta pelo WhatsApp"><img src={icon} alt="" width={32} height={32}/></a>;
}
