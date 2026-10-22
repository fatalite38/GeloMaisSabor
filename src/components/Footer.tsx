import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Instagram, Loader2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import logoImg from '../assets/coco-cuesta/logo-coco-cuesta.webp';
import { whatsappUrl } from '../data/contact';
import './Contact.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'message';
type FormErrors = Partial<Record<FieldName, string>>;
type ContactControl = HTMLInputElement | HTMLTextAreaElement;

const fieldOrder: FieldName[] = ['name', 'email', 'message'];

function getFieldError(field: FieldName, control: ContactControl): string | undefined {
  if (!control.value.trim()) {
    return {
      name: 'Informe seu nome.',
      email: 'Informe um e-mail para receber a resposta.',
      message: 'Conte como podemos ajudar.',
    }[field];
  }

  if (field === 'email' && control.validity.typeMismatch) {
    return 'Digite um e-mail válido, como nome@exemplo.com.';
  }

  return undefined;
}

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sendingRef = useRef(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const protectDraft = (event: BeforeUnloadEvent) => {
      const form = formRef.current;
      if (form && fieldOrder.some(field => (form.elements.namedItem(field) as ContactControl).value.trim())) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', protectDraft);
    return () => window.removeEventListener('beforeunload', protectDraft);
  }, []);

  const validateField = (field: FieldName, control: ContactControl) => {
    setErrors((previous) => ({ ...previous, [field]: getFieldError(field, control) }));
  };

  const handleFieldChange = (field: FieldName, control: ContactControl) => {
    if (errors[field]) validateField(field, control);
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleFieldBlur = (field: FieldName, event: React.FocusEvent<ContactControl>) => {
    // Submit validates all fields; don't move its hit target between pointerdown and click.
    if (event.relatedTarget === formRef.current?.querySelector('button[type="submit"]')) return;
    validateField(field, event.currentTarget);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form || sendingRef.current) return;

    const nextErrors: FormErrors = {};
    for (const field of fieldOrder) {
      const control = form.elements.namedItem(field) as ContactControl;
      const error = getFieldError(field, control);
      if (error) nextErrors[field] = error;
    }
    setErrors(nextErrors);

    const firstInvalidField = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalidField) {
      setStatus('idle');
      const firstInvalidControl = form.elements.namedItem(firstInvalidField) as ContactControl;
      requestAnimationFrame(() => firstInvalidControl.focus());
      return;
    }

    sendingRef.current = true;
    setStatus('loading');
    try {
      await emailjs.sendForm('service_nj6znvq', 'template_80se6qx', form, 'rgB6ULLD6ZTXk_Oyo');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sendingRef.current = false;
    }
  };

  const hasErrors = fieldOrder.some((field) => errors[field]);

  return (
    <>
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="site-container contact-content">
        <div id="revenda" className="contact-copy">
          <p className="contact-eyebrow">Vamos conversar</p>
          <h2 id="contact-title">Leve <span translate="no">Coco Cuesta</span> para o seu negócio ou evento.</h2>
          <p className="contact-intro">Fale com nossa equipe para conhecer os sabores, consultar disponibilidade e encontrar a melhor forma de atendimento.</p>
          <address className="contact-details">
            <a href="https://maps.google.com/?q=Botucatu%20SP" target="_blank" rel="noopener noreferrer">
              <MapPin size={21} aria-hidden="true" /><span>Botucatu, São Paulo</span>
            </a>
            <a href="tel:+5514997445680">
              <Phone size={21} aria-hidden="true" /><span>(14) 99744-5680</span>
            </a>
            <a href="mailto:gelocococuesta@gmail.com">
              <Mail size={21} aria-hidden="true" /><span>gelocococuesta@gmail.com</span>
            </a>
          </address>
          <a className="button button-light contact-whatsapp" href={whatsappUrl('Olá! Gostaria de conversar sobre os produtos Coco Cuesta para meu negócio ou evento. Podem me informar a disponibilidade e as condições?')} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} aria-hidden="true" />Conversar pelo WhatsApp
          </a>
        </div>
        <div className="contact-form-panel">
          <h3 id="contact-form-title">Envie uma mensagem</h3>
          <p id="contact-form-help" className="contact-form-help">Responderemos assim que possível. Todos os campos são obrigatórios.</p>
          <form ref={formRef} onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title" aria-describedby="contact-form-help" className="contact-form">
            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Nome</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Seu nome…"
                  readOnly={status === 'loading'}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  onBlur={(event) => handleFieldBlur('name', event)}
                  onChange={(event) => handleFieldChange('name', event.currentTarget)}
                />
                {errors.name && <p id="contact-name-error" className="contact-field-error">{errors.name}</p>}
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">E-mail</label>
                <input
                  id="contact-email"
                  type="email"
                  inputMode="email"
                  name="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  spellCheck={false}
                  autoCapitalize="none"
                  placeholder="nome@exemplo.com…"
                  readOnly={status === 'loading'}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  onBlur={(event) => handleFieldBlur('email', event)}
                  onChange={(event) => handleFieldChange('email', event.currentTarget)}
                />
                {errors.email && <p id="contact-email-error" className="contact-field-error">{errors.email}</p>}
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">Como podemos ajudar?</label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={4000}
                rows={4}
                autoComplete="off"
                placeholder="Quais sabores você procura? Conte para a gente…"
                readOnly={status === 'loading'}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                onBlur={(event) => handleFieldBlur('message', event)}
                onChange={(event) => handleFieldChange('message', event.currentTarget)}
              />
              {errors.message && <p id="contact-message-error" className="contact-field-error">{errors.message}</p>}
            </div>
            <div className="contact-actions">
            <div className={`contact-feedback${status === 'error' ? ' contact-feedback-error' : ''}`} role="status" aria-live="polite" aria-atomic="true">
              {status === 'idle' && hasErrors && <p>Confira os campos indicados antes de enviar.</p>}
              {status === 'loading' && <p>Enviando sua mensagem. Aguarde um momento.</p>}
              {status === 'success' && <p>Mensagem enviada! A equipe responderá pelo e-mail informado.</p>}
              {status === 'error' && (
                <p>
                  Não foi possível enviar. Seus dados continuam aqui. Tente novamente ou{' '}
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">fale pelo WhatsApp</a>.
                </p>
              )}
            </div>
            <button type="submit" disabled={status === 'loading'} className="button button-light contact-submit" aria-busy={status === 'loading'}>
              {status === 'loading' ? 'Enviando mensagem…' : 'Enviar mensagem'}
              {status === 'loading' ? <span className="contact-spinner" aria-hidden="true"><Loader2 size={19} /></span> : <Send size={18} aria-hidden="true" />}
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <footer className="contact-footer" aria-label="Coco Cuesta">
      <div className="site-container contact-bottom">
        <div className="contact-brand-row">
          <img src={logoImg} alt="Coco Cuesta" width={900} height={570} loading="lazy" decoding="async" className="contact-logo" />
          <div className="contact-socials">
            <a href="https://www.instagram.com/cococuestaoficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Coco Cuesta">
              <Instagram size={21} aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100068796457626" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Coco Cuesta">
              <Facebook size={21} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="contact-credits">
          <p>&copy; {new Date().getFullYear()} <span translate="no">Coco Cuesta</span>. Todos os direitos reservados.</p>
          <a href="https://www.linkedin.com/in/luiz-dpedrozo/" target="_blank" rel="noopener noreferrer">
            Desenvolvido por Luiz Fernando
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
