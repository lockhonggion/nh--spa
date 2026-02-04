import React from 'react';
import SectionHeading from './SectionHeading';
import { Heart, CheckCircle, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-spa-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Therapy Session" 
                className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Calm Interior" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block">
               <p className="font-serif text-xl font-bold text-spa-dark italic">{t('about.badge')}</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-10">
            <SectionHeading 
                title={t('about.title')} 
                subtitle={t('about.subtitle')}
                center={false}
            />
            
            <p className="text-spa-dark/80 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />

            <p className="text-spa-dark/80 mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />

            <div className="space-y-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-spa-green/10 rounded-full">
                        <Heart className="w-5 h-5 text-spa-green" />
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-spa-dark">{t('about.f1_title')}</h4>
                        <p className="text-sm text-gray-600">{t('about.f1_desc')}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-spa-green/10 rounded-full">
                        <CheckCircle className="w-5 h-5 text-spa-green" />
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-spa-dark">{t('about.f2_title')}</h4>
                        <p className="text-sm text-gray-600">{t('about.f2_desc')}</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-spa-green/10 rounded-full">
                        <Coffee className="w-5 h-5 text-spa-green" />
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-spa-dark">{t('about.f3_title')}</h4>
                        <p className="text-sm text-gray-600">{t('about.f3_desc')}</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;