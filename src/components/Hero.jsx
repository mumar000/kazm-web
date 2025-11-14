import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-[#111314] text-white min-h-screen flex items-center justify-center font-sans lg:px-8 px-6 py-12">
      {/* Main Content Container */}
      <div className="w-full 2xl:max-w-[1350px] max-w-5xl relative">
        {/* Center - Main Heading */}
        <div className="flex flex-col lg:items-center items-center lg:text-center text-left mb-8 lg:mb-0">
          <h1 className="text-7xl lg:text-8xl 2xl:text-[160px] leading-none tracking-tight">
            Unlimited
          </h1>
          <div className="relative -rotate-8 lg:-mt-6 -mt-4">
            <h2 className="text-8xl lg:text-9xl 2xl:text-[199px] caveat leading-none tracking-tight">
              ambitious
            </h2>
            <img src="/line.svg" alt="Lien" className="absolute 2xl:-mt-10 lg:-mt-6 -mt-4" />
          </div>
          <div className="flex items-center gap-4 lg:-mt-4 -mt-2">
            <h1 className="text-7xl lg:text-8xl 2xl:text-[160px] font-light leading-none tracking-tight">
              ideas.
            </h1>
            <div className="lg:mt-8 mt-4 animate-spin" style={{ animationDuration: '5s' }}>
              <img src="/picture.png" alt="Smiley Face" className="lg:w-16 2xl:w-26 w-14" />
            </div>
          </div>
        </div>

        {/* Left Text - Hidden on mobile, absolute positioned on desktop */}
        <div className="hidden lg:block absolute left-0 bottom-0 max-w-[250px]">
          <p className="text-sm 2xl:text-lg leading-5">
            We are a forward-thinking team of designers and developers driven by passion — and
            fuelled by curiosity.
          </p>
        </div>

        {/* Mobile Text Sections */}
        <div className="lg:hidden flex flex-col gap-10 mt-8">
          <p className="text-lg leading-6">
            We are a forward-thinking team of designers and developers driven by passion — and
            fuelled by curiosity.
          </p>

          <p className="text-lg leading-6">
            We believe that the human dimensions essential to start any successful project and that
            this is where splendid emotional relationships between the company and people are born.
          </p>

          <a
            href="#"
            className="border-b-2 border-yellow-400 w-fit pb-1 text-sm hover:text-yellow-400 transition-colors"
          >
            View on Designer
          </a>
        </div>

        {/* Right Text - Hidden on mobile, absolute positioned on desktop */}
        <div className="hidden lg:block absolute right-0 2xl:top-12 top-0 max-w-[230px]">
          <p className="text-sm 2xl:text-lg leading-5 mb-6">
            We believe that the human dimensions essential to start any successful project and that
            this is where splendid emotional relationships between the company and people are born.
          </p>
          <a href="#" className="underline text-sm hover:text-yellow-400 transition-colors">
            View on Desiigner
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute opacity-50 bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
