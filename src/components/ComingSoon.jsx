import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen bg-[#1b1b1b] text-white overflow-hidden flex items-center justify-center">
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
      <div className="relative z-10 w-full py-20 max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-[40px] p-10 md:p-14 border border-white/10 shadow-2xl"
        >
          {/* Countdown Timer */}
          <div className="flex justify-center gap-6 md:gap-12 mb-8">
            <h1 className="text-6xl font-bold">Contact Us Now!</h1>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mb-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/10 transition-all"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/10 transition-all"
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 border border-white/10 transition-all resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02]"
            >
              Submit
            </button>
          </form>

          {/* People Joined */}
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
