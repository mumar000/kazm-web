import { Instagram, Mail, Youtube, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import cokeStudioLogo from '../asserts/coke studio.jpeg';
// import img from '../asserts/image-1.png';
// import pepsiLogo from '../asserts/papsi.png';

const HellboyFooter = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleXIn = {
    hidden: { opacity: 0, scaleX: 0, originX: 0.5 },
    show: { opacity: 1, scaleX: 1, originX: 0.5, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      className="bg-[black] text-white relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Hellboy Character and Logo */}

        {/* Animated Separator Line */}
        <motion.div
          variants={scaleXIn}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"
        />

        {/* Copyright and Logos */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center justify-between mb-12"
        >
          {/* Left */}
          <div className="flex flex-col md:items-start items-center   gap-6">
            <div className="text-lg text-gray-400 mb-6 lg:mb-0 lg:max-w-md">
              <p className="hover:text-gray-300 transition-colors duration-300">KAZM™ 2025</p>
            </div>
            <div>
              <img src="logo.svg" alt="Logo" className="w-40 py-4 " />
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
            <div className="text-white hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <span className="text-xl group-hover:text-gray-300 transition-colors duration-300 flex items-center space-x-2">
                {/* Using the Lucide Mail icon */}
                <Mail size={24} className="flex-shrink-0" />
                <span>info@kazm.io</span>
              </span>
            </div>
          </div>

          {/* Right - Animated Decorative Elements */}
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-between text-sm"
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
                  <Youtube size={25} />
                  <span className="sr-only">YouTube</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/shahrukhkazimmusic?igsh=cjJlcTNid2RlMDg%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Instagram size={22} />
                  <span className="sr-only">Instagram</span>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                  <span className="sr-only">Twitter</span>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Facebook"
                >
                  <Facebook size={22} />
                  <span className="sr-only">Facebook</span>
                </a>

                {/* Spotify */}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-4 text-xs text-gray-500 hover:text-gray-400"
          >
            COPYRIGHT 2025, Powered by &nbsp;
            <a href="https://techxudo.com" target="_blank">
              Techxudo
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default HellboyFooter;
