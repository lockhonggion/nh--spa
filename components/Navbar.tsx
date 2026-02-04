import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2">
              <img src="/logo.png" alt="Nhẹ Spa Logo" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className={`font-serif text-2xl font-bold tracking-wider ${scrolled ? 'text-spa-dark' : 'text-spa-dark lg:text-white'}`}>
                  NHẸ SPA
                </span>
                <span className={`text-xs uppercase tracking-widest ${scrolled ? 'text-spa-green' : 'text-spa-green lg:text-stone-200'}`}>
                  {t('nav.no_tip')}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-sm font-medium hover:text-spa-brown transition-colors uppercase tracking-wide ${scrolled ? 'text-spa-dark' : 'text-white shadow-black drop-shadow-md'
                  }`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className={`flex items-center font-medium text-sm px-2 py-1 rounded transition-colors ${scrolled ? 'text-spa-dark hover:bg-spa-beige' : 'text-white hover:bg-white/20'}`}
            >
              <Globe className="w-4 h-4 mr-1" />
              {language === 'vi' ? 'EN' : 'VI'}
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-spa-brown hover:bg-spa-dark transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.book')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center font-medium text-sm px-2 py-1 rounded ${scrolled ? 'text-spa-dark' : 'text-spa-dark'}`}
            >
              <Globe className="w-5 h-5 mr-1" />
              {language === 'vi' ? 'EN' : 'VI'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-spa-dark' : 'text-spa-dark'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-spa-dark hover:bg-spa-beige hover:text-spa-green"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="block w-full text-center mt-4 px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-spa-green hover:bg-spa-dark"
          >
            {t('nav.call_book')} {BUSINESS_INFO.displayPhone}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;