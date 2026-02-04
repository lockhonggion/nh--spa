import React from 'react';
import Button from './Button';
import { Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Relaxing Spa Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/40"></div>
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 fade-in-up">
            <ShieldCheck className="w-4 h-4 mr-2 text-spa-beige" />
            <span className="text-sm font-medium tracking-wide">{t('hero.badge')}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight fade-in-up delay-100">
          {t('hero.title_1')} <br />
          <span className="text-spa-beige italic">{t('hero.title_2')}</span>
        </h1>

        <div className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-normal fade-in-up delay-200 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: t('hero.desc') }} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
            <a href="#contact">
                <Button variant="primary" className="w-full sm:w-auto min-w-[160px]">
                    {t('hero.btn_book')}
                </Button>
            </a>
            <a href="#services">
                <Button variant="white" className="w-full sm:w-auto min-w-[160px]">
                    {t('hero.btn_services')}
                </Button>
            </a>
        </div>

        <div className="mt-12 flex flex-col items-center fade-in-up delay-300">
            <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <p className="text-sm font-medium opacity-90">
                {t('hero.rating').replace('{count}', BUSINESS_INFO.reviewCount.toString())}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;