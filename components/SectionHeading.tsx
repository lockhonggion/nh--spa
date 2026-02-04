import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-spa-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`h-1 w-20 bg-spa-brown mb-6 ${center ? 'mx-auto' : ''}`}></div>
      )}
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-200' : 'text-spa-green'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;