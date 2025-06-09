import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/LogoImg.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Verifica se o usuário está rolando a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logoImg}
            alt="Cubos de gelo coloridos"
            className="w-12 h-12 rounded-full"
            //tamanho
            style={{ width: '140px', height: '100px'  }}
          />
          <span 
            className={`ml-2 font-nunito font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}
          >
            {/* <Instagram size={25} className="text-gray-700 mr-2" />
            <Facebook size={25} className="text-gray-700 mr-2" /> */}
         
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {['Home', 'Produtos', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`font-nunito font-bold hover:text-primary-300 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={28} className="text-gray-700" />
          ) : (
            <Menu 
              size={28} 
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`} 
            />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="text-center space-y-8">
              {['Home', 'Sobre', 'Sabores', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-nunito text-2xl font-semibold text-gray-700 hover:text-primary-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;