import React, { useState, useRef } from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import whatsappIcon from '../assets/icons/icon-whatsapp.svg';

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_3ea3dpt',
        'template_nb4tujg',
        formRef.current,
        'dbTIX8HhSJ8iTOdL7'
      )
      .then(() => {
        console.log('Email enviado com sucesso!');
        setFormState({
          ...formState,
          submitted: true
        });

        setTimeout(() => {
          setFormState({
            name: '',
            email: '',
            message: '',
            submitted: false
          });
        }, 3000);
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <footer id="contato" className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Formulário de Contato */}
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <h3 className="font-nunito font-bold text-2xl mb-6">Fale Conosco</h3>

            {formState.submitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-white">
                <p className="font-nunito">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-nunito text-sm mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-primary-700 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-pineapple-500 text-white placeholder-primary-300"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-nunito text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-primary-700 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-pineapple-500 text-white placeholder-primary-300"
                    placeholder="Seu email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-nunito text-sm mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-primary-700 border border-primary-500 focus:outline-none focus:ring-2 focus:ring-pineapple-500 text-white placeholder-primary-300"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-pineapple-500 hover:bg-pineapple-600 text-primary-800 font-nunito font-bold rounded-lg transition-all duration-300 flex items-center"
                >
                  Enviar Mensagem
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
          </div>

          {/* Informações e Redes Sociais */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:pl-10">
              <h3 className="font-nunito font-bold text-2xl mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-4 mb-10">
                <div className="flex items-start">
                  <MapPin className="mr-3 text-pineapple-500 flex-shrink-0" />
                  <p className="font-nunito">
                    R. Mirabeau Camargo Pachêco, 1065 - Botucatu
                    <br />
                    São Paulo, SP - 18601-420
                  </p>
                </div>

                <div className="flex items-center">
                  <Phone className="mr-3 text-pineapple-500 flex-shrink-0" />
                  <p className="font-nunito">(14) 99744-5680</p>
                </div>

                <div className="flex items-center">
                  <Mail className="mr-3 text-pineapple-500 flex-shrink-0" />
                  <p className="font-nunito">gelomaissabor@hotmail.com</p>
                </div>
              </div>

              <h3 className="font-nunito font-bold text-2xl mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/gelomaissabor/"
                  target="blank"
                  className="bg-primary-700 hover:bg-primary-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100068796457626"
                  target="blank"
                  className="bg-primary-700 hover:bg-primary-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5514997445680&text=Olá,%20gostaria%20de%20obter%20mais%20informações%20sobre%20os%20seus%20produtos."
                  target="blank"
                  className="bg-primary-700 hover:bg-primary-800 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <img
                    src={whatsappIcon}
                    className="w-6 h-6"
                    alt="WhatsApp"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-primary-500 mt-12 pt-8 text-center">
          <p className="font-nunito text-sm text-primary-200">
            &copy; {new Date().getFullYear()} Mais Sabor. Todos os direitos reservados.
            <br />
            Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/luiz-dpedrozo/"
              target="blank"
              className="text-pineapple-500"
            >
              Luiz Fernando
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
