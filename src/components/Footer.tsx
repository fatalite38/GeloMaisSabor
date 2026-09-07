import React, { useRef, useState } from 'react';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import logoImg from '../assets/coco-cuesta/logo-coco-cuesta.webp';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current || status === 'loading') return;

    setStatus('loading');
    try {
      await emailjs.sendForm('service_3ea3dpt', 'template_nb4tujg', formRef.current, 'dbTIX8HhSJ8iTOdL7');
      formRef.current.reset();
      setStatus('success');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setStatus('error');
    }
  };

  return (
    <footer id="contato" className="bg-ink-950 text-white">
      <div className="site-container py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker text-cuesta-300">Vamos conversar</p>
            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">Leve Coco Cuesta para o seu negócio ou evento.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">Fale com nossa equipe para conhecer os sabores, consultar disponibilidade e encontrar a melhor forma de atendimento.</p>

            <div className="mt-10 space-y-5 text-white/75">
              <a href="https://maps.google.com/?q=R.%20Mirabeau%20Camargo%20Pach%C3%AAco%2C%201065%2C%20Botucatu%20SP" target="_blank" rel="noopener noreferrer" className="focus-ring flex items-start gap-3 rounded-lg transition-colors hover:text-white">
                <MapPin className="mt-0.5 flex-none text-cuesta-300" size={21} aria-hidden="true" />
                <span>R. Mirabeau Camargo Pachêco, 1065<br />Botucatu — SP, 18601-420</span>
              </a>
              <a href="tel:+5514997445680" className="focus-ring flex items-center gap-3 rounded-lg transition-colors hover:text-white">
                <Phone className="flex-none text-cuesta-300" size={21} aria-hidden="true" />
                <span>(14) 99744-5680</span>
              </a>
              <a href="mailto:gelomaissabor@hotmail.com" className="focus-ring flex items-center gap-3 rounded-lg transition-colors hover:text-white">
                <Mail className="flex-none text-cuesta-300" size={21} aria-hidden="true" />
                <span>gelomaissabor@hotmail.com</span>
              </a>
            </div>

            <a href="https://api.whatsapp.com/send?phone=5514997445680&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%20Coco%20Cuesta." target="_blank" rel="noopener noreferrer" className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-cuesta-300 px-7 py-4 font-bold text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-cuesta-100">
              <MessageCircle size={20} aria-hidden="true" />
              Conversar pelo WhatsApp
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-9">
            <h3 className="text-2xl font-extrabold">Envie uma mensagem</h3>
            <p className="mt-2 text-white/60">Responderemos assim que possível.</p>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-white/75">
                  Nome
                  <input type="text" name="name" required autoComplete="name" className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3.5 text-base text-white placeholder:text-white/25" placeholder="Seu nome" />
                </label>
                <label className="block text-sm font-semibold text-white/75">
                  E-mail
                  <input type="email" name="email" required autoComplete="email" className="focus-ring mt-2 w-full rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3.5 text-base text-white placeholder:text-white/25" placeholder="seu@email.com" />
                </label>
              </div>
              <label className="block text-sm font-semibold text-white/75">
                Como podemos ajudar?
                <textarea name="message" required rows={5} className="focus-ring mt-2 w-full resize-y rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3.5 text-base text-white placeholder:text-white/25" placeholder="Conte o que você precisa" />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className={`text-sm ${status === 'error' ? 'text-red-300' : 'text-cuesta-300'}`} role="status" aria-live="polite">
                  {status === 'success' && 'Mensagem enviada com sucesso!'}
                  {status === 'error' && 'Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.'}
                </p>
                <button type="submit" disabled={status === 'loading'} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-ink-950 transition-colors hover:bg-cuesta-100 disabled:cursor-wait disabled:opacity-60">
                  {status === 'loading' ? 'Enviando…' : 'Enviar mensagem'}
                  <Send size={18} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-8 py-9 sm:flex-row sm:items-center sm:justify-between">
          <img src={logoImg} alt="Coco Cuesta" className="h-16 w-auto self-start" />
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/cococuestaoficial/" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-white/10 p-3 text-white/70 transition-colors hover:border-cuesta-300 hover:text-cuesta-300" aria-label="Instagram da Coco Cuesta"><Instagram size={21} /></a>
            <a href="https://www.facebook.com/profile.php?id=100068796457626" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-white/10 p-3 text-white/70 transition-colors hover:border-cuesta-300 hover:text-cuesta-300" aria-label="Facebook da Coco Cuesta"><Facebook size={21} /></a>
          </div>
        </div>
        <div className="site-container flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Coco Cuesta. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://www.linkedin.com/in/luiz-dpedrozo/" target="_blank" rel="noopener noreferrer" className="focus-ring rounded text-white/70 hover:text-cuesta-300">Luiz Fernando</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
