import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const { scrollY } = useScroll();

  // Handle Scroll Logic for non-home pages
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isHomePage) {
      setIsHidden(false);
      return;
    }

    const previous = scrollY.getPrevious();

    // If scrolled down more than 100px and scrolling down -> Hide
    if (latest > previous && latest > 100) {
      setIsHidden(true);
    }
    // If scrolling up -> Show
    else {
      setIsHidden(false);
    }
  });

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQs', href: '#faqs' },
  ];

  // Animation variants for the Navbar itself
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="visible"
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`
        w-full z-50 transition-colors duration-300
        ${isHomePage ? 'absolute top-0 bg-transparent' : 'fixed top-0 bg-white shadow-sm'}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center relative">

          {/* Logo Section */}
          <div className="flex justify-gap-4 overflow-hidden">
            <Link to="/">
              <img
                src="logo-i.svg"
                alt="Logo"
                className={`
                  transition-all duration-300
                  ${isHomePage
                    ? 'lg:w-50 w-30 -translate-y-10' // Original size on Home
                    : ' w-16 -translate-y-2 py-2' // Smaller size on other pages
                  }
                `}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu - Centered Items */}
      <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 gap-2 ${isHomePage ? 'top-6' : 'top-1/2 -translate-y-1/2'}`}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {/* Note: Check if href is an anchor (#) or route (/) to choose Link vs a tag */}
            {item.href.startsWith('#') ? (
              <a
                href={item.href}
                className="px-5 py-2 text-xl inter font-medium text-gray-800 hover:text-black transition-all duration-300 relative group block"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ) : (
              <Link
                to={item.href}
                className="px-5 py-2 text-xl inter font-medium text-gray-800 hover:text-black transition-all duration-300 relative group block"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contact Button - Desktop */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 8px 20px rgba(27, 27, 27, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        className={`
          hidden md:block absolute right-8 px-6 py-3 bg-[#1B1B1B] text-white text-sm inter font-medium rounded-full transition-all duration-300 hover:bg-[#2a2a2a]
          ${isHomePage ? 'top-6' : 'top-1/2 -translate-y-1/2'}
        `}
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
            className="md:hidden bg-white shadow-lg absolute top-full w-full left-0 border-t"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;