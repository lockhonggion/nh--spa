import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICES } from '../constants';
import { Sparkles, Flower, Activity, Smile, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
    Sparkles: Sparkles,
    Flower: Flower,
    Activity: Activity,
    Smile: Smile
};

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            title={t('services.title')} 
            subtitle={t('services.subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service: Service) => {
                const Icon = iconMap[service.iconName];
                const title = language === 'vi' ? service.title_vi : service.title_en;
                const description = language === 'vi' ? service.description_vi : service.description_en;
                const duration = language === 'vi' ? service.duration_vi : service.duration_en;

                return (
                    <div key={service.id} className="group relative bg-spa-beige rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-spa-green/5 rounded-full transition-transform group-hover:scale-150 duration-500"></div>

                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-spa-green group-hover:bg-spa-green group-hover:text-white transition-colors">
                            <Icon size={28} strokeWidth={1.5} />
                        </div>

                        <h3 className="text-xl font-serif font-bold text-spa-dark mb-3">
                            {title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[60px]">
                            {description}
                        </p>

                        <div className="flex items-center justify-between mt-auto border-t border-gray-200 pt-4">
                            <span className="text-xs font-bold text-spa-brown tracking-wider uppercase">
                                {duration}
                            </span>
                            <a href="#contact" className="text-spa-green hover:text-spa-dark transition-colors">
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">{t('services.not_sure')}</p>
            <a href={`tel:${'0764446560'}`} className="inline-flex items-center font-bold text-spa-green hover:text-spa-dark underline decoration-2 underline-offset-4">
                {t('services.call')}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Services;