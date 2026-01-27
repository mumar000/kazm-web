import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/HomePage';
import About from './screens/About/About';
import KazmLoader from './components/KazmLoader';
import Navbar from './components/Navbar';
import HellboyFooter from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const MIN_DURATION = 1500;
    const start = Date.now();
    let cleanupTimer = null;
    let onLoad;

    const finish = () => {
      if (cleanupTimer) return;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);
      cleanupTimer = setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      onLoad = () => {
        window.removeEventListener('load', onLoad);
        finish();
      };
      window.addEventListener('load', onLoad);
    }

    // Hard fallback in case 'load' doesn't fire
    const hardTimeout = setTimeout(() => finish(), MIN_DURATION + 2000);

    return () => {
      if (onLoad) window.removeEventListener('load', onLoad);
      clearTimeout(cleanupTimer);
      clearTimeout(hardTimeout);
    };
  }, []);

  return (
    <>
      {/* App content renders immediately under the loader for smooth reveal */}
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }}>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <HellboyFooter />

        </Router>
      </motion.div>

      {/* Loader overlay fades out smoothly */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="kazm-loader"
            className="fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <KazmLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
