import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/coco-cuesta/logo-coco-cuesta.webp';

const navigation = [
  { label: 'Sabores', href: '#produtos' },
  { label: 'Nossa história', href: '#sobre' },
  { label: 'Avaliações', href: '#depoimentos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1180px)');
    const closeOnResize = () => { if (desktop.matches) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    desktop.addEventListener('change', closeOnResize);
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      desktop.removeEventListener('change', closeOnResize);
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      <div className="site-container header-inner">
        <a href="#home" className="brand-link" aria-label="Coco Cuesta — início" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Coco Cuesta" width={900} height={570} />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="button button-light header-contact" href="#contato">Contato</a>
          <button className="menu-toggle" ref={menuButton} type="button" onClick={() => setOpen(!open)}
            aria-controls="mobile-menu" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel" hidden={!open}>
        {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </nav>
    </header>
  );
}
