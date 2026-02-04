import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { MessageCircle, X } from 'lucide-react';

// Wrapper component to use the hook
const AppContent = () => {
  const { t } = useLanguage();
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <BookingForm />
      </main>
      <Footer />
      
      {/* Custom Support Widget Toggle */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {showSupport ? (
          <div className="relative animate-in slide-in-from-bottom-5 fade-in duration-300">
            <button 
              onClick={() => setShowSupport(false)}
              className="absolute -top-12 right-0 bg-white text-spa-dark p-2 rounded-full shadow-lg hover:bg-gray-100 border border-gray-200 transition-colors z-50"
              aria-label="Close support"
            >
              <X className="w-5 h-5" />
            </button>
            {/* @ts-ignore */}
            <elevenlabs-convai agent-id="agent_0601kgk6va4pfh2bg4e49shdjyew"></elevenlabs-convai>
          </div>
        ) : (
          <button
            onClick={() => setShowSupport(true)}
            className="group flex items-center gap-2 bg-spa-green text-white px-5 py-3 rounded-full shadow-lg hover:bg-spa-dark transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-medium whitespace-nowrap">{t('nav.support')}</span>
          </button>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;