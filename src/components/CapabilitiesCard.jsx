import React, { useState, useEffect } from 'react';
import { Code, TrendingUp, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const glassPanel = 'bg-black/40 backdrop-blur-2xl border border-white/20';

const ServiceCard = ({ icon: Icon, number, title, description, tags, isActive }) => {
    return (
        <motion.div
            animate={{
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0.5,
                filter: isActive ? 'blur(0px)' : 'blur(4px)',
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-[350px] md:w-[450px] shrink-0 h-full"
        >
            <div className={`relative h-full ${glassPanel} rounded-[2.5rem] overflow-hidden min-h-[520px] group transition-all duration-500 hover:border-white/40 shadow-2xl`}>

                {/* Subtle internal gradient highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <div className="relative p-10 h-full flex flex-col">
                    {/* Header: Icon & Number */}
                    <div className="flex items-start justify-between mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            <Icon className="w-8 h-8 text-black" />
                        </div>
                        <span className="text-white/20 text-4xl font-black tracking-tighter italic">0{number}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl font-black text-white mb-6 tracking-tighter leading-none">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow font-medium">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-4 py-1.5 text-[11px] uppercase tracking-widest font-bold text-white/70 bg-white/5 border border-white/10 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Shine Effect on Hover */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </motion.div>
    );
};

export default function CapabilitiesCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(450); // Default for md/lg
    const gap = 32; // gap-8 = 32px

    const services = [
        {
            icon: Code,
            number: 1,
            title: "Digital Foundry",
            description: "Technical excellence in web design, app development, and Shopify ecosystems that move culture.",
            tags: ["Web Design", "App Dev", "Shopify"],
        },
        {
            icon: TrendingUp,
            number: 2,
            title: "Growth Lab",
            description: "Data-driven strategies for SEO dominance, high-end publishing, and digital expansion.",
            tags: ["SEO", "E-Publishing", "Strategy"],
        },
        {
            icon: Zap,
            number: 3,
            title: "Live Activation",
            description: "High-energy event management and artist booking designed to create impact.",
            tags: ["Events", "Artist Booking", "Activation"],
        }
    ];

    // Handle responsive card width calculation
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setCardWidth(350);
            else setCardWidth(450);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <div className="min-h-screen relative z-10 w-full bg-[#1b1b1b] flex items-center justify-center py-20 font-sans overflow-hidden">

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-20 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
                    >
                        Our Services.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Let’s Create What Moves Culture through technical excellence.
                    </motion.p>
                </div>

                {/* Slider Navigation Buttons */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-full max-w-[1200px] flex justify-between px-10 z-50 pointer-events-none">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl pointer-events-auto shadow-white/10"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl pointer-events-auto shadow-white/10"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>

                {/* SLIDER TRACK */}
                <div className="relative overflow-visible">
                    <motion.div
                        animate={{
                            // This math keeps the current card perfectly in the center of the screen
                            x: `calc(50% - ${currentIndex * (cardWidth + gap) + cardWidth / 2}px)`
                        }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-8 px-4"
                    >
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.number}
                                {...service}
                                isActive={index === currentIndex}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Dots Navigation */}
                <div className="flex items-center justify-center gap-3 mt-16">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                                    ? 'w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                                    : 'w-3 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}