import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { BookingFormData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const BookingForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            title={t('booking.title')} 
            subtitle={t('booking.subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl overflow-hidden shadow-xl border border-spa-beige">
          
          {/* Left: Contact Info & Map */}
          <div className="bg-spa-dark text-white p-10 lg:p-14">
             <h3 className="text-2xl font-serif font-bold mb-8">{t('booking.contact_info')}</h3>
             
             <div className="space-y-8">
                <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-spa-sage mt-1 flex-shrink-0" />
                    <div className="ml-4">
                        <p className="font-bold text-spa-beige text-sm uppercase tracking-wide mb-1">{t('booking.address')}</p>
                        <p className="text-gray-300 leading-relaxed">
                            {language === 'vi' ? BUSINESS_INFO.address_vi : BUSINESS_INFO.address_en}
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <Phone className="w-6 h-6 text-spa-sage mt-1 flex-shrink-0" />
                    <div className="ml-4">
                        <p className="font-bold text-spa-beige text-sm uppercase tracking-wide mb-1">{t('booking.phone')}</p>
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl text-white hover:text-spa-sage transition-colors">
                            {BUSINESS_INFO.displayPhone}
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <Clock className="w-6 h-6 text-spa-sage mt-1 flex-shrink-0" />
                    <div className="ml-4">
                        <p className="font-bold text-spa-beige text-sm uppercase tracking-wide mb-1">{t('booking.hours')}</p>
                        <p className="text-gray-300">{t('booking.hours_desc')}</p>
                        <p className="text-gray-400 text-sm mt-1">{t('booking.last_booking')}</p>
                    </div>
                </div>
             </div>

             <div className="mt-12 w-full h-48 rounded-lg overflow-hidden bg-gray-700">
                <iframe 
                    src={BUSINESS_INFO.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Spa Location"
                ></iframe>
             </div>
          </div>

          {/* Right: Booking Form */}
          <div className="p-10 lg:p-14 bg-white">
            <h3 className="text-2xl font-serif font-bold text-spa-dark mb-6">{t('booking.req_title')}</h3>
            
            {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                        <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-green-900">{t('booking.success_title')}</h3>
                    <p className="mt-2 text-sm text-green-600">
                        {t('booking.success_desc')}
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.label_name')}</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-spa-green focus:border-transparent outline-none transition-all bg-stone-50"
                                placeholder={t('booking.ph_name')}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.label_phone')}</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-spa-green focus:border-transparent outline-none transition-all bg-stone-50"
                                placeholder={t('booking.ph_phone')}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.label_service')}</label>
                        <select 
                            id="service" 
                            name="service" 
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-spa-green focus:border-transparent outline-none transition-all bg-stone-50"
                        >
                            <option value="">{t('booking.ph_service')}</option>
                            {SERVICES.map(s => (
                                <option key={s.id} value={s.id}>
                                    {language === 'vi' ? s.title_vi : s.title_en} ({language === 'vi' ? s.duration_vi : s.duration_en})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.label_date')}</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date" 
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-spa-green focus:border-transparent outline-none transition-all bg-stone-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.label_time')}</label>
                            <input 
                                type="time" 
                                id="time" 
                                name="time" 
                                required
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-spa-green focus:border-transparent outline-none transition-all bg-stone-50"
                            />
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        fullWidth 
                        disabled={status === 'submitting'}
                        className={status === 'submitting' ? 'opacity-75 cursor-wait' : ''}
                    >
                        {status === 'submitting' ? t('booking.btn_submitting') : t('booking.btn_submit')}
                        {!status && <Send className="ml-2 w-4 h-4" />}
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                        {t('booking.disclaimer')}
                    </p>
                </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;