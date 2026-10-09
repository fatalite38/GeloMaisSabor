import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import logoImg from '../assets/coco-cuesta/logo-coco-cuesta.webp';

const navigation = [
  { label: 'Início', href: '#home' },
  { label: 'Sabores', href: '#produtos' },
  { label: 'Nossa história', href: '#sobre' },
  { label: 'Avaliações', href: '#depoimentos' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ink-950/95 shadow-xl shadow-black/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="border-b border-white/10 bg-cuesta-300 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-ink-950 sm:text-sm">
        A Mais Sabor agora é Coco Cuesta
      </div>

      <div className="site-container flex h-20 items-center justify-between">
        <a href="#home" className="focus-ring rounded-lg" aria-label="Coco Cuesta — início">
          <img src={logoImg} alt="Coco Cuesta" className="h-14 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-md text-sm font-semibold text-white/75 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://api.whatsapp.com/send?phone=5514997445680&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%20Coco%20Cuesta."
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink-950 transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          <MessageCircle size={18} aria-hidden="true" />
          Fale conosco
        </a>

        <button
          type="button"
          className="focus-ring rounded-xl border border-white/15 p-3 text-white lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      <div id="mobile-menu" className={`absolute inset-x-0 top-full border-t border-white/10 bg-ink-950 px-5 transition-all duration-300 lg:hidden ${isMenuOpen ? 'visible opacity-100' : 'invisible -translate-y-3 opacity-0'}`}>
        <nav className="mx-auto flex max-w-7xl flex-col py-6" aria-label="Navegação móvel">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="focus-ring rounded-lg border-b border-white/10 py-4 text-lg font-semibold text-white">
              {item.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5514997445680&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20produtos%20Coco%20Cuesta."
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 flex items-center justify-center gap-2 rounded-full bg-cuesta-300 px-5 py-4 font-bold text-ink-950"
          >
            <MessageCircle size={19} aria-hidden="true" />
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
