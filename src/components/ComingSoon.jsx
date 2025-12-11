import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ComingSoon = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 = Closed, 1,2,3 = Form Steps
  const [direction, setDirection] = useState(1); // 1 = Next, -1 = Prev

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openBook = () => {
    setIsBookOpen(true);
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage < 3) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const closeBook = () => {
    setIsBookOpen(false);
    setTimeout(() => {
      setCurrentPage(0);
      setFormData({ name: '', email: '', message: '' });
    }, 600); // Wait for close animation
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
    // Show confirmation page instead of closing immediately
    setDirection(1);
    setCurrentPage(4);
  };

  // Glass styles constant for consistency
  const glassPanel = 'bg-black/40  backdrop-blur-2xl border border-white/20';

  // Animation Variants for the Page Flip Effect
  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90, // Enters from 90deg (right) or -90deg (left)
      opacity: 0,
      transformOrigin: 'left center', // IMPORTANT: Anchors rotation to the spine
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0], // Cubic bezier for smooth paper feel
      },
      transformOrigin: 'left center',
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? -90 : 90, // Exits to -90deg (flip left) or 90deg (flip right)
      opacity: 0,
      transition: { duration: 0.4 },
      transformOrigin: 'left center',
    }),
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-[#1b1b1b] text-white overflow-hidden flex items-center justify-center font-sans"
    >
      {/* Background Ambience */}

      {/* Moving Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-12 opacity-20 pointer-events-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[120px] md:text-[200px] font-black tracking-tight mx-8">
              COMING SOON •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main 3D Container */}
      <div className="relative z-10 w-full max-w-5xl px-4" style={{ perspective: '2000px' }}>
        <AnimatePresence mode="wait">
          {/* STATE 1: BOOK CLOSED (COVER) */}
          {!isBookOpen ? (
            <motion.div
              key="cover"
              initial={{ opacity: 0, rotateY: 30, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, type: 'spring' }}
              className={`mx-auto max-w-xl ${glassPanel} rounded-3xl p-12 text-center`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h1 className="text-6xl font-black mb-6 tracking-tighter">Hello.</h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Let’s Create What Moves Culture.
              </p>
              <motion.button
                onClick={openBook}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white cursor-pointer text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
              >
                Contact Us
              </motion.button>
            </motion.div>
          ) : (
            // STATE 2: BOOK OPEN
            <motion.div
              key="book"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
              className="flex flex-col md:flex-row shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* LEFT PAGE (Static Info) */}
              <div
                className={`w-full md:w-1/2 ${glassPanel} rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-10 md:p-14 relative z-10`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                    <div className="w-12 h-1 bg-white mb-8 rounded-full"></div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Fill out the form on the right page. We read every message and will get back
                      to you faster than you think.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400 uppercase tracking-widest mb-2">
                      Step
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            currentPage >= step ? 'w-8 bg-white' : 'w-4 bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PAGE (Dynamic Form Steps) */}
              <div
                className={`w-full md:w-1/2 ${glassPanel} rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-10 md:p-14 relative perspective-[1000px] border-l-0 md:border-l border-white/10`}
              >
                <div className="h-full relative" style={{ perspective: '1000px' }}>
                  <AnimatePresence custom={direction} mode="wait">
                    {/* STEP 1: NAME */}
                    {currentPage === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 flex flex-col justify-center h-full backface-hidden"
                      >
                        <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
                          01. Identity
                        </label>
                        <h3 className="text-3xl font-bold mb-8">What's your name?</h3>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          autoFocus
                          placeholder="Type your name here..."
                          className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                        />
                        <div className="flex justify-between items-center mt-auto pt-8">
                          <button
                            onClick={closeBook}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Close
                          </button>
                          <button
                            onClick={nextPage}
                            disabled={!formData.name}
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next <span className="text-xl">→</span>
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: EMAIL */}
                    {currentPage === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 flex flex-col justify-center h-full backface-hidden"
                      >
                        <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
                          02. Contact
                        </label>
                        <h3 className="text-3xl font-bold mb-8">Your email address?</h3>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoFocus
                          placeholder="name@example.com"
                          className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors"
                        />
                        <div className="flex justify-between items-center mt-auto pt-8">
                          <button
                            onClick={prevPage}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Back
                          </button>
                          <button
                            onClick={nextPage}
                            disabled={!formData.email}
                            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Next <span className="text-xl">→</span>
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: MESSAGE */}
                    {currentPage === 3 && (
                      <motion.div
                        key="step3"
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 flex flex-col justify-center h-full backface-hidden"
                      >
                        <label className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
                          03. Thoughts
                        </label>
                        <h3 className="text-3xl font-bold mb-8">What's on your mind?</h3>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          autoFocus
                          rows={3}
                          placeholder="Tell us about your project..."
                          className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl text-white placeholder-white/20 focus:outline-none focus:border-white transition-colors resize-none"
                        />
                        <div className="flex justify-between items-center mt-auto pt-8">
                          <button
                            onClick={prevPage}
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleSubmit}
                            disabled={!formData.message}
                            className="bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                          >
                            Submit
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: CONFIRMATION */}
                    {currentPage === 4 && (
                      <motion.div
                        key="step4"
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 flex flex-col justify-center items-center h-full text-center px-4 backface-hidden"
                      >
                        <CheckCircle className="w-16 h-16 text-green-400 mb-6" />
                        <h3 className="text-3xl font-bold mb-3">Thanks for reaching out!</h3>
                        <p className="text-gray-300 max-w-md mb-8">
                          We’ve received your message and will get back to you shortly.
                        </p>
                        <div className="flex gap-4">
                          <button
                            onClick={closeBook}
                            className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                          >
                            Close
                          </button>
                          <button
                            onClick={() => {
                              // Reset to start a new entry without closing the book
                              setFormData({ name: '', email: '', message: '' });
                              setDirection(-1);
                              setCurrentPage(1);
                            }}
                            className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
                          >
                            Send another
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ComingSoon;
