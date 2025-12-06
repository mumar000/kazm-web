import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-0 left-0 w-full z-50 bg-transparent"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center relative">
          <div className="flex justify- gap-4">
            <img src="logo-i.svg" alt="Logo" className="lg:w-50 w-30  -translate-y-10 " />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu - Centered Items */}
      <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 gap-2">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            className="px-5 py-2 text-xl font-medium text-gray-800 hover:text-black transition-all duration-300 relative group"
          >
            {item.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
          </motion.a>
        ))}
      </div>

      {/* Contact Button - Desktop (Right aligned with nav items) */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 8px 20px rgba(27, 27, 27, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:block absolute right-8 top-6 px-6 py-3 bg-[#1B1B1B] text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-[#2a2a2a]"
      >
        Contact
      </motion.a>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
