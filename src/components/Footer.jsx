import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  // Graffiti SVG Background Elements
  const GraffitiBackground = () => (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Abstract Paint Strokes */}
      <svg className="absolute top-0 right-0 w-96 h-96" viewBox="0 0 400 400">
        <path
          d="M 50 100 Q 150 50 250 100 T 350 150"
          stroke="url(#gradient1)"
          strokeWidth="40"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="300" cy="100" r="60" fill="url(#gradient2)" opacity="0.5" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
          <radialGradient id="gradient2">
            <stop offset="0%" stopColor="#FFE66D" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </radialGradient>
        </defs>
      </svg>

      {/* Bottom Left Graffiti Elements */}
      <svg className="absolute bottom-0 left-0 w-80 h-80" viewBox="0 0 400 400">
        <path
          d="M 100 300 Q 200 250 300 300"
          stroke="url(#gradient3)"
          strokeWidth="35"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="150" cy="320" rx="80" ry="50" fill="url(#gradient4)" opacity="0.4" />
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A8E6CF" />
            <stop offset="100%" stopColor="#FFD3B6" />
          </linearGradient>
          <linearGradient id="gradient4">
            <stop offset="0%" stopColor="#FFAAA5" />
            <stop offset="100%" stopColor="#FF8B94" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Abstract Shapes */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" viewBox="0 0 800 400">
        <path
          d="M 200 200 Q 400 100 600 200"
          stroke="url(#gradient5)"
          strokeWidth="50"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
        <circle cx="400" cy="200" r="100" fill="url(#gradient6)" opacity="0.2" />
        <defs>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B4A7D6" />
            <stop offset="100%" stopColor="#F4A6D7" />
          </linearGradient>
          <radialGradient id="gradient6">
            <stop offset="0%" stopColor="#FFD93D" />
            <stop offset="100%" stopColor="#6BCF7F" />
          </radialGradient>
        </defs>
      </svg>

      {/* Paint Drips Effect */}
      <div className="absolute top-0 left-1/4 w-2 h-32 bg-gradient-to-b from-pink-500/30 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-3 h-40 bg-gradient-to-b from-purple-500/30 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-2 h-24 bg-gradient-to-b from-cyan-500/30 to-transparent"></div>
    </div>
  );

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="footer" className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Graffiti Background - Outside Container */}
      <GraffitiBackground />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        {/* Large Rectangle Container */}
        <div className="bg-[#1B1B1B] rounded-3xl p-12 lg:p-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
            {/* Left - Brand */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">KAZM</h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                A culture-driven collective crafting experiences across events, music, motion, and
                storytelling.
              </p>
            </div>

            {/* Right - Links */}
            <div className="flex flex-col lg:items-end justify-center space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-lg transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {currentYear} KAZM. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333333] transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact Email */}
            <a
              href="mailto:hello@kazm.studio"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
            >
              hello@kazm.studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
