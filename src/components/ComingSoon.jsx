import { useState } from 'react';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';

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
    }, 600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setDirection(1);
    setCurrentPage(4);
  };

  // UI CONSTANTS: Industrial / Bento Box Style
  // Sharp edges (rounded-[4px]), Fine borders, Obsidian BG
  const bentoPanel = 'bg-[#0a0a0a] border border-white/10 backdrop-blur-md';
  const cobaltAccent = '#2E5BFF';

  // Animation Variants (Preserved)
  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: 'left center',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
      transformOrigin: 'left center',
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      transition: { duration: 0.4 },
      transformOrigin: 'left center',
    }),
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-[#050505] text-[#FCFCFC] overflow-hidden flex items-center justify-center font-sans"
    >

      {/* --- MOVING TEXT (Background Ambience) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-12 opacity-5 pointer-events-none select-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[120px] md:text-[200px] font-black tracking-tighter mx-8 text-white uppercase">
              Start Project •
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- MAIN 3D CONTAINER --- */}
      <div className="relative z-10 w-full max-w-5xl px-4" style={{ perspective: '2000px' }}>
        <AnimatePresence mode="wait">

          {/* STATE 1: BOOK CLOSED (COVER) */}
          {!isBookOpen ? (
            <motion.div
              key="cover"
              initial={{ opacity: 0, rotateY: 30, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, transition: { duration: 0.5 } }}
              transition={{ duration: 0.8, type: 'spring' }}
              className={`mx-auto max-w-xl ${bentoPanel} rounded-[4px] p-12 text-center shadow-[0_0_50px_-20px_rgba(46,91,255,0.1)]`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <SectionHeading
                title="HELLO."
                description="LET'S CREATE WHAT MOVES CULTURE."
                className="mb-10"
                titleClassName="text-6xl md:text-8xl inter font-black tracking-tighter text-[#FCFCFC]"
                descriptionClassName="text-sm md:text-base roboto-mono uppercase tracking-[0.2em] text-[#2E5BFF] mt-4"
              />

              {/* Industrial Button */}
              <motion.button
                onClick={openBook}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#2E5BFF] border border-[#2E5BFF] rounded-[2px] text-white overflow-hidden transition-all hover:bg-white hover:text-[#2E5BFF]"
              >
                <span className="relative z-10 roboto-mono font-bold uppercase tracking-widest text-sm">
                  Initialize Contact
                </span>
                <ArrowRight size={16} className="relative z-10" />
              </motion.button>
            </motion.div>
          ) : (

            // STATE 2: BOOK OPEN
            <motion.div
              key="book"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
              className="flex flex-col md:flex-row"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* LEFT PAGE (Static Info) */}
              <div
                className={`w-full md:w-1/2 bg-[#080808] border border-white/10 border-r-0 md:border-r border-b md:border-b-0 rounded-t-[4px] md:rounded-l-[4px] md:rounded-tr-none p-10 md:p-14 relative z-10`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-[#2E5BFF]" />
                      <span className="roboto-mono text-xs text-[#2E5BFF] tracking-widest uppercase">System IO</span>
                    </div>

                    <SectionHeading
                      title="LET'S CONNECT"
                      className=""
                      titleClassName="text-4xl md:text-5xl inter font-black tracking-tighter text-white text-left mb-6 uppercase"
                    />

                    <p className="text-gray-400 roboto-mono text-xs leading-relaxed tracking-wide uppercase border-l border-[#2E5BFF] pl-4 py-2">
                                            // Data Entry Required<br />
                      We analyze every transmission.<br />
                      Response time: Optimized.
                    </p>
                  </div>

                  {/* Industrial Progress Indicators */}
                  <div className="mt-12">
                    <div className="flex items-center gap-2 text-xs roboto-mono text-gray-500 uppercase tracking-widest mb-3">
                      Sequence 0{currentPage} / 03
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`h-1 transition-all duration-300 ${currentPage >= step
                              ? 'w-12 bg-[#2E5BFF]'
                              : 'w-4 bg-white/10'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PAGE (Dynamic Form Steps) */}
              <div
                className={`w-full md:w-1/2 bg-[#050505] border border-white/10 rounded-b-[4px] md:rounded-r-[4px] md:rounded-bl-none p-10 md:p-14 relative perspective-[1000px]`}
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
                        <label className="text-[#2E5BFF] text-xs roboto-mono font-bold uppercase tracking-widest mb-4">
                                                    // 01. Identity
                        </label>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-8">What's your name?</h3>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          autoFocus
                          placeholder="ENTER DESIGNATION..."
                          className="w-full bg-transparent border-b border-white/20 py-4 text-xl roboto-mono text-white placeholder-white/20 focus:outline-none focus:border-[#2E5BFF] transition-colors rounded-none"
                        />
                        <div className="flex justify-between items-center mt-auto pt-8">
                          <button
                            onClick={closeBook}
                            className="text-gray-500 hover:text-white roboto-mono text-xs uppercase tracking-widest transition-colors"
                          >
                            Terminate
                          </button>
                          <button
                            onClick={nextPage}
                            disabled={!formData.name}
                            className="flex items-center gap-2 bg-[#FCFCFC] text-black px-6 py-3 rounded-[2px] roboto-mono font-bold text-xs uppercase tracking-widest hover:bg-[#2E5BFF] hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                          >
                            Proceed <ArrowRight size={14} />
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
                        <label className="text-[#2E5BFF] text-xs roboto-mono font-bold uppercase tracking-widest mb-4">
                                                    // 02. Coordinates
                        </label>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Your email address?</h3>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoFocus
                          placeholder="USER@NETWORK.IO"
                          className="w-full bg-transparent border-b border-white/20 py-4 text-xl roboto-mono text-white placeholder-white/20 focus:outline-none focus:border-[#2E5BFF] transition-colors rounded-none"
                        />
                        <div className="flex justify-between items-center mt-auto pt-8">
                          <button
                            onClick={prevPage}
                            className="text-gray-500 hover:text-white roboto-mono text-xs uppercase tracking-widest transition-colors"
                          >
                            Return
                          </button>
                          <button
                            onClick={nextPage}
                            disabled={!formData.email}
                            className="flex items-center gap-2 bg-[#FCFCFC] text-black px-6 py-3 rounded-[2px] roboto-mono font-bold text-xs uppercase tracking-widest hover:bg-[#2E5BFF] hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                          >
                            Proceed <ArrowRight size={14} />
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
                        <label className="text-[#2E5BFF] text-xs roboto-mono font-bold uppercase tracking-widest mb-4">
                                                    // 03. Intel
                        </label>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-8">What's the mission?</h3>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          autoFocus
                          rows={3}
                          placeholder="PROJECT DETAILS..."
                          className="w-full bg-transparent border-b border-white/20 py-4 text-lg roboto-mono text-white placeholder-white/20 focus:outline-none focus:border-[#2E5BFF] transition-colors resize-none rounded-none"
                        />
                        <div className="flex justify-between items-center mt-auto pt-8">
                          <button
                            onClick={prevPage}
                            className="text-gray-500 hover:text-white roboto-mono text-xs uppercase tracking-widest transition-colors"
                          >
                            Return
                          </button>
                          <button
                            onClick={handleSubmit}
                            disabled={!formData.message}
                            className="bg-[#2E5BFF] text-white px-8 py-3 rounded-[2px] roboto-mono font-bold text-xs uppercase tracking-widest hover:bg-[#FCFCFC] hover:text-[#2E5BFF] transition-all disabled:opacity-20 border border-[#2E5BFF]"
                          >
                            Transmit
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
                        <CheckCircle className="w-16 h-16 text-[#2E5BFF] mb-6" strokeWidth={1} />
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-3">Transmission Received</h3>
                        <p className="text-gray-400 roboto-mono text-xs max-w-md mb-8 uppercase tracking-wide">
                          We are reviewing your data. <br />Standby for uplink.
                        </p>
                        <div className="flex gap-4">
                          <button
                            onClick={closeBook}
                            className="bg-[#FCFCFC] text-black px-8 py-3 rounded-[2px] roboto-mono font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
                          >
                            Close System
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