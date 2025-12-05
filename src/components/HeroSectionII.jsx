import React from 'react';

const HeroSectionII = () => {
  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden">
      {/* Background Mountain Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/background-image.avif"
          alt="Mountain Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Main Heading with Center Image */}
        <div className="relative flex items-center justify-center">
          {/* Large Text "ERONT ARAYA" split by image */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[120px] z-30 md:text-[180px] lg:text-[220px] xl:text-[280px] font-black tracking-tighter leading-none text-slate-900/60">
              KAZM
            </h1>
          </div>

          {/* Center Image */}
          <div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px]">
            <img
              src="/center-picture.avif"
              alt="Center Visual"
              className="w-full h-full object-cover opacity-80 shadow-2xl"
            />
          </div>

          <h1 className="text-[120px] z-30 md:text-[180px] lg:text-[220px] xl:text-[280px] font-black tracking-tighter leading-none text-slate-900/60"></h1>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-10 md:bottom-2 text-center text-white px-6">
          <p className="text-xs md:text-sm lg:text-base font-light tracking-wider uppercase">
            KAZM is a culture-forward collective shaping
          </p>
          <p className="text-xs md:text-sm lg:text-base font-light tracking-wider uppercase">
            experiences across Events, Music, Motion,
          </p>
          <p className="text-xs md:text-sm lg:text-base font-light tracking-wider uppercase">
            Direction, and Storytelling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionII;
