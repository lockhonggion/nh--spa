import React from 'react';
import SectionHeading from './SectionHeading';
import { WHY_CHOOSE_US } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-spa-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            title={t('why.title')} 
            subtitle={t('why.subtitle')}
            light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
                const title = language === 'vi' ? item.title_vi : item.title_en;
                const description = language === 'vi' ? item.description_vi : item.description_en;
                
                return (
                    <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="h-1 w-12 bg-spa-green mb-6"></div>
                        <h3 className="text-xl font-serif font-bold mb-3 text-spa-beige">{title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;