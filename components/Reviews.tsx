import React from 'react';
import SectionHeading from './SectionHeading';
import { REVIEWS, BUSINESS_INFO } from '../constants';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="reviews" className="py-20 bg-spa-beige relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-spa-green/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spa-brown/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
            <SectionHeading 
                title={t('reviews.title')} 
                subtitle={t('reviews.subtitle').replace('{rating}', BUSINESS_INFO.rating.toString())}
            />
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-0 scroll-smooth no-scrollbar md:justify-start md:pl-[max(1rem,calc((100vw-80rem)/2))] md:pr-4">
            {REVIEWS.map((review) => (
                <div key={review.id} className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-xl shadow-sm border border-stone-100 flex flex-col hover:shadow-md transition-shadow duration-300">
                    <div className="mb-4 text-spa-green opacity-30">
                        <Quote size={32} />
                    </div>
                    
                    <p className="text-gray-600 italic mb-6 flex-grow leading-relaxed text-sm md:text-base">
                        "{review.content}"
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                        <div>
                            <h4 className="font-bold text-spa-dark font-serif truncate max-w-[150px]">{review.author}</h4>
                            <span className="text-xs text-gray-400">{review.date}</span>
                        </div>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            {/* Spacer for end of scroll */}
            <div className="w-4 md:w-0 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;