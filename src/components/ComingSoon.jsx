import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState({
    days: 32,
    hours: 24,
    mins: 8,
  });

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="relative min-h-screen bg-[#1b1B1B] text-white overflow-hidden flex items-center justify-center">
      {/* Moving "COMING SOON" Text at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden py-12">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-[120px] md:text-[180px] lg:text-[220px] font-black tracking-tight mx-12"
            >
              COMING SOON •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Center Form Container */}
      <div className="relative z-10 w-full max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-[40px] p-10 md:p-14 border border-white/10 shadow-2xl"
        >
          {/* Countdown Timer */}
          <div className="flex justify-center gap-6 md:gap-12 mb-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold">{timeLeft.days}</div>
              <div className="text-gray-400 text-sm md:text-base mt-2">Days</div>
            </div>
            <div className="text-5xl md:text-6xl font-bold self-center">·</div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold">{timeLeft.hours}</div>
              <div className="text-gray-400 text-sm md:text-base mt-2">Hours</div>
            </div>
            <div className="text-5xl md:text-6xl font-bold self-center">·</div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold">
                {String(timeLeft.mins).padStart(2, '0')}
              </div>
              <div className="text-gray-400 text-sm md:text-base mt-2">Mins</div>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-3 bg-white/10 backdrop-blur-md rounded-full p-2 border border-gray-600/30">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 bg-transparent px-6 py-3 text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>

          {/* People Joined */}
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
