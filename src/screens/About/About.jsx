import React, { useState, useEffect, useRef } from 'react';
import { Code, TrendingUp, Zap, ChevronLeft, ChevronRight, Check, ArrowRight, Compass, Rocket, Users, Target } from 'lucide-react';
import CustomerJourney from '../../components/CustomerJourney';
import WhyKazm from './components/WhyKazm';
import ServiceCard from './components/ServiceCard';
import ManifestoHero from './components/ManifestoHero';
import SectionHeading from '../../components/SectionHeading';
import Pillars from './components/Pillars';

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


            <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 space-y-24 md:space-y-32">

                {/* MANIFESTO SECTION */}
                <section className="pt-20">
                    <ManifestoHero />
                </section>
                <CustomerJourney />

                {/* SERVICE PILLARS SECTION */}
                <section>


                    <Pillars />
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