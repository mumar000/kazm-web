import React, { useState } from 'react';
import { Code, TrendingUp, Zap, Check, ArrowRight } from 'lucide-react';
import SectionHeading from '../../../components/SectionHeading';

const Pillars = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            icon: Code,
            tag: "BUILD",
            title: "The Digital Foundry",
            pitch: "We build the high-performance digital engines that power your revenue 24/7.",
            offerings: ["Web Design", "App Development", "Shopify Architecture", "UI/UX Engineering"],
            number: "01"
        },
        {
            icon: TrendingUp,
            tag: "SCALE",
            title: "The Growth Lab",
            pitch: "We turn your digital assets into global authorities. We don't just find traffic; we own the search.",
            offerings: ["SEO Strategy", "Digital Marketing", "E-Book & Digital Publishing"],
            number: "02"
        },
        {
            icon: Zap,
            tag: "LIVE",
            title: "Talent & Activation",
            pitch: "We manage the talent and produce the moments. We create the physical touchpoints that build community and career longevity.",
            offerings: ["Artist Management & Representation", "Event Management", "Live Production", "Brand Activations"],
            number: "03"
        }
    ];

    // FIX: Assign the active icon to a Capitalized variable BEFORE using it in JSX
    const ActiveIcon = services[activeIndex].icon;

    return (
        <div className="relative w-full bg-[#050505] ">

            <SectionHeading
                title="The Pillars"
                subtitle="The Rule of Three"
                className="mb-16 "
                titleClassName="text-[#FCFCFC] text-5xl md:text-7xl inter"
                subtitleClassName="text-gray-400 roboto-mono"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}


                {/* Main Layout: Tabs + Content */}
                <div className="grid md:grid-cols-12 gap-8">

                    {/* LEFT: Tab Navigation */}
                    <div className="md:col-span-4 space-y-4">
                        {services.map((service, index) => {
                            // FIX: Destructure icon for safer usage in map loop
                            const ServiceIcon = service.icon;

                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-full text-left p-6 border transition-all duration-300 group relative overflow-hidden ${activeIndex === index
                                        ? 'bg-[#2E5BFF] border-[#2E5BFF]'
                                        : 'bg-[#0a0a0a] border-white/10 hover:border-[#2E5BFF]/50'
                                        }`}
                                >

                                    <div className="relative z-10 flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeIndex === index
                                            ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                            : 'bg-[#2E5BFF] shadow-[0_0_20px_rgba(46,91,255,0.2)]'
                                            }`}>
                                            <ServiceIcon
                                                className={activeIndex === index ? 'text-[#2E5BFF]' : 'text-[#FCFCFC]'}
                                                size={24}
                                                strokeWidth={2}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`text-xs roboto-mono font-bold tracking-[0.2em] uppercase ${activeIndex === index ? 'text-white' : 'text-[#2E5BFF]'
                                                    }`}>
                                                    {service.tag}
                                                </span>
                                                <span className={`text-2xl font-black ${activeIndex === index ? 'text-white/30' : 'text-white/10'
                                                    }`}>
                                                    {service.number}
                                                </span>
                                            </div>

                                            <h3 className={`text-xl inter font-black uppercase tracking-tight ${activeIndex === index ? 'text-white' : 'text-[#FCFCFC]'
                                                }`}>
                                                {service.title}
                                            </h3>

                                            {/* Arrow indicator */}
                                            <div className={`flex items-center gap-2 mt-3 transition-all duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                                                }`}>
                                                <div className="h-[1px] w-8 bg-white" />
                                                <ArrowRight size={16} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT: Active Content Display */}
                    <div className="md:col-span-8">
                        <div className="relative bg-[#0a0a0a] border border-white/10 p-8 md:p-12 min-h-[500px] overflow-hidden">

                            {/* Animated Glow */}
                            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#2E5BFF]/10 rounded-full blur-3xl transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Number Badge */}
                                <div className="inline-flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                    <div className="w-12 h-12 bg-[#2E5BFF] flex items-center justify-center shadow-[0_0_20px_rgba(46,91,255,0.4)]">
                                        {/* FIX: Use the capitalized variable here */}
                                        <ActiveIcon className="text-white" size={24} strokeWidth={2} />
                                    </div>
                                    <div>
                                        <span className="text-xs roboto-mono text-[#2E5BFF] font-bold tracking-[0.2em] uppercase block">
                                            {services[activeIndex].tag}
                                        </span>
                                        <span className="text-lg inter font-black text-white uppercase tracking-tight">
                                            {services[activeIndex].title}
                                        </span>
                                    </div>
                                </div>

                                {/* The Pitch */}
                                <div className="mb-8">
                                    <h4 className="text-xs roboto-mono uppercase tracking-widest text-gray-500 mb-4">
                                        The Pitch
                                    </h4>
                                    <p key={activeIndex} className="text-2xl md:text-3xl inter font-bold text-[#FCFCFC] leading-tight animate-[fadeIn_0.5s_ease-out]">
                                        "{services[activeIndex].pitch}"
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="h-[1px] w-full bg-white/10 mb-8" />

                                {/* Core Offerings */}
                                <div>
                                    <h4 className="text-xs roboto-mono uppercase tracking-widest text-gray-500 mb-6">
                                        Core Offerings
                                    </h4>
                                    <div key={activeIndex + "-offerings"} className="grid md:grid-cols-2 gap-4">
                                        {services[activeIndex].offerings.map((offering, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3 bg-[#2E5BFF]/5 border border-white/10 p-4 hover:border-[#2E5BFF]/50 transition-all duration-300"
                                                style={{
                                                    opacity: 0,
                                                    animation: `fadeInUp 0.5s ease forwards ${i * 0.1}s`
                                                }}
                                            >
                                                <div className="w-5 h-5 bg-[#2E5BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check size={14} className="text-white" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-bold text-[#FCFCFC]">
                                                    {offering}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                {/* <div className="mt-8 pt-6 border-t border-white/10">
                                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2E5BFF] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#FCFCFC] hover:text-[#2E5BFF] transition-all duration-300 border border-[#2E5BFF]">
                                        <span>Explore {services[activeIndex].tag}</span>
                                        <ArrowRight size={16} />
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex gap-2 mt-4">
                            {services.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 flex-1 transition-all duration-500 ${index === activeIndex ? 'bg-[#2E5BFF]' : 'bg-white/10'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Pillars;