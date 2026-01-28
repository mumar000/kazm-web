import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  description,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = ""
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && (
        <p className={`text-gray-400 roboto-mono uppercase tracking-widest text-sm mb-2 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl inter font-black text-white mb-4 tracking-tighter uppercase ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-xl text-gray-300 max-w-3xl mx-auto roboto-mono ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;