import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-spa-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Nhẹ Spa Logo" className="h-16 w-auto" />
              <h2 className="text-2xl font-serif font-bold tracking-wider">NHẸ SPA</h2>
            </div>
            <p className="text-spa-sage text-sm uppercase tracking-widest font-medium">{t('footer.tagline')}</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-spa-beige">{t('footer.quick_links')}</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">{t('nav.reviews')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('nav.book')}</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-spa-beige">{t('footer.visit_us')}</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-spa-green" />
                <span>{language === 'vi' ? BUSINESS_INFO.address_vi : BUSINESS_INFO.address_en}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-spa-green" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.displayPhone}</a>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-spa-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-spa-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">{t('footer.designed')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;