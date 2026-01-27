import React, { useState, useEffect, useRef } from 'react';
import { Code, TrendingUp, Zap, ChevronLeft, ChevronRight, Check, ArrowRight, Compass, Rocket, Users, Target } from 'lucide-react';
import CustomerJourney from '../../components/CustomerJourney';
import WhyKazm from './components/WhyKazm';
import ServiceCard from './components/ServiceCard';
import ManifestoHero from './components/ManifestoHero';

export default function About() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isPaused, setIsPaused] = useState(false);

    const services = [
        {
            icon: Code,
            tag: "BUILD",
            title: "The Digital Foundry",
            pitch: "We build the high-performance digital engines that power your revenue 24/7.",
            offerings: ["Web Design", "App Development", "Shopify Architecture", "UI/UX Engineering"]
        },
        {
            icon: TrendingUp,
            tag: "SCALE",
            title: "The Growth Lab",
            pitch: "We turn your digital assets into global authorities. We don't just find traffic; we own the search.",
            offerings: ["SEO Strategy", "Digital Marketing", "E-Book & Digital Publishing"]
        },
        {
            icon: Zap,
            tag: "LIVE",
            title: "Talent & Activation",
            pitch: "We manage the talent and produce the moments. We create the physical touchpoints that build community and career longevity.",
            offerings: ["Artist Management & Representation", "Event Management", "Live Production", "Brand Activations"]
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setSlidesToShow(1);
            else if (window.innerWidth < 1280) setSlidesToShow(2);
            else setSlidesToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, services.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    const goToSlide = (index) => setCurrentIndex(index);

    const getVisibleSlides = () => {
        const slides = [];
        for (let i = 0; i < slidesToShow; i++) {
            const index = (currentIndex + i) % services.length;
            slides.push({ ...services[index], originalIndex: index });
        }
        return slides;
    };

    return (
        <div className="min-h-screen bg-[#050505] relative ">
            {/* Grid Background */}
            <div
                className="fixed inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 space-y-24 md:space-y-32">

                {/* MANIFESTO SECTION */}
                <section className="pt-20">
                    <ManifestoHero />
                </section>
                <CustomerJourney />

                {/* SERVICE PILLARS SECTION */}
                <section>
                    <div className="mb-16 border-l-2 border-[#2E5BFF] pl-6">
                        <h2 className="text-5xl md:text-7xl font-black text-[#FCFCFC] tracking-tighter uppercase mb-2">
                            The Pillars
                        </h2>
                        <p className="text-gray-400 font-mono uppercase tracking-widest text-sm">
                            The Rule of Three
                        </p>
                    </div>

                    <div
                        className="relative px-4 md:px-12"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <button
                            onClick={prevSlide}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 items-center justify-center text-[#FCFCFC] hover:bg-[#2E5BFF] hover:border-[#2E5BFF] transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 items-center justify-center text-[#FCFCFC] hover:bg-[#2E5BFF] hover:border-[#2E5BFF] transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="overflow-hidden">
                            <div
                                className="grid gap-6 transition-all duration-700 ease-in-out"
                                style={{ gridTemplateColumns: `repeat(${slidesToShow}, minmax(0, 1fr))` }}
                            >
                                {getVisibleSlides().map((service, idx) => (
                                    <ServiceCard
                                        key={`${service.originalIndex}-${idx}`}
                                        service={service}
                                        index={service.originalIndex}
                                        isActive={idx === 0 || slidesToShow === 1}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-12">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 h-2 bg-[#2E5BFF]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CUSTOMER JOURNEY SECTION */}


                {/* WHY KAZM SECTION */}
                <section>
                    <WhyKazm />
                </section>

            </div>
            <style>{`
        .perspective-1000 { perspective: 1000px; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
        </div>
    );
}