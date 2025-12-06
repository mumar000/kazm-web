import { ExternalLink, Instagram, Youtube } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaMusic } from 'react-icons/fa';
// import { Link } from "react-router-dom";
// import cokeStudioLogo from '../asserts/coke studio.jpeg';
// import img from '../asserts/image-1.png';
// import pepsiLogo from '../asserts/papsi.png';

const HellboyFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [speechBubbleVisible, setSpeechBubbleVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay speech bubble animation
          setTimeout(() => setSpeechBubbleVisible(true), 1000);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[black] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-red-500/10 rounded-full transition-all duration-1000 ${
              isVisible ? 'animate-pulse opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transitionDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Hellboy Character and Logo */}

        {/* Animated Separator Line */}
        <div
          className={`w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12 transition-all duration-1000 delay-900 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}
        ></div>

        {/* Copyright and Logos */}
        <div
          className={`flex flex-col lg:flex-row items-center justify-between mb-12 transition-all duration-1000 delay-1100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          {/* Left */}
          <div className="flex flex-col  gap-6">
            <div className="text-lg text-gray-400 mb-6 lg:mb-0 lg:max-w-md">
              <p className="mb-2 hover:text-gray-300 transition-colors duration-300">
                Founded by Umar Qayyum & Shahrukh Kazim
              </p>
              <p className="hover:text-gray-300 transition-colors duration-300">KAZM™ 2025</p>
            </div>
            <div>
              <img src="logo.svg" alt="Logo" className="w-40 " />
            </div>
          </div>

          {/* Center - Pepsi & Coke Studio Logos */}
          <div className="flex items-center space-x-8 mb-6 lg:mb-0">
            {/* Pepsi Logo */}
            {/* <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white hover:scale-110 transition-all duration-300 cursor-pointer group">
              <img
                src={pepsiLogo}
                alt="Pepsi"
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div> */}

            {/* Coke Studio Logo */}
            {/* <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white hover:scale-110 transition-all duration-300 cursor-pointer group">
              <img
                src={cokeStudioLogo}
                alt="Coke Studio"
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>{' '} */}

            {/* Shahrukh Kazim Text */}
            <div className="text-white font-serif italic hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <span className="text-2xl group-hover:text-gray-300 transition-colors duration-300">
                Email: info@kazm.co
              </span>
            </div>
          </div>

          {/* Right - Animated Decorative Elements */}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative">
        <div className="container mx-auto px-4 py-6">
          <div
            className={`flex flex-col lg:flex-row items-center justify-between text-sm transition-all duration-1000 delay-1300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Left Links */}
            <div className="flex flex-wrap items-center justify-center space-x-6 mb-4 lg:mb-0">
              <p
                // href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 group relative"
              >
                DISCLAIMER
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p
                // href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 group relative"
              >
                PRIVACY POLICY
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>

            {/* Right - Social Icons and Wishlist */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a
                  href="https://youtube.com/@shahrukhkazimmusic?si=F-7AdhOpat7R0szv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Youtube className="h-7 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/shahrukhkazimmusic?igsh=cjJlcTNid2RlMDg%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>

                {/* Spotify */}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className={`text-center mt-4 text-xs text-gray-500 transition-all duration-1000 delay-1500 hover:text-gray-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            COPYRIGHT 2025, Powered by &nbsp;
            <a href="https://techxudo.com" target="_blank">
              Techxudo
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-4 left-10 w-1 h-1 bg-red-500/30 rounded-full animate-ping"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-4 right-20 w-1.5 h-1.5 bg-yellow-500/30 rounded-full animate-ping"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>
    </footer>
  );
};

export default HellboyFooter;
