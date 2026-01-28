import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading";

const WhyKazm = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const reasons = [
        {
            title: "The Tech-Enabled Artist",
            content: "We give artists the same technical tools as a tech startup. Data-driven management meets creative freedom.",
            detail: "Advanced analytics, automated workflows, and real-time insights power every creative decision."
        },
        {
            title: "Unified Stack",
            content: "No more managing five different freelancers. We own the entire brand lifecycle from code to crowd.",
            detail: "End-to-end solutions from development and design to marketing, events, and community management."
        },
        {
            title: "California Standards",
            content: "We combine Bay Area technical rigor with LA creative energy.",
            detail: "Silicon Valley innovation meets Hollywood storytelling in every project we deliver."
        },
        {
            title: "Proven Legitimacy",
            content: "We treat every project—and every artist—as an architectural build, not just a \"gig.\"",
            detail: "Structural integrity, lasting foundations, and meticulous attention to every detail."
        }
    ];

    return (
        <div className="relative w-full bg-[#050505] py-20 md:py-32 overflow-hidden">
            {/* Radial Background Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(46,91,255,0.08) 0%, transparent 50%)'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <SectionHeading
                    title="Why KAZM?"
                    subtitle="The Competitive Edge"
                    className="mb-16"
                    titleClassName="text-[#FCFCFC] text-5xl md:text-7xl inter"
                    subtitleClassName="text-gray-400 roboto-mono"
                />

                {/* Modern Flip Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="relative h-[280px] md:h-[320px] cursor-pointer group"
                            style={{ perspective: '1500px' }}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            {/* Flip Container */}
                            <div
                                className="relative w-full h-full transition-transform duration-700 preserve-3d"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: activeIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}
                            >
                                {/* FRONT SIDE */}
                                <div
                                    className="absolute inset-0 bg-[#0a0a0a] border border-[#FCFCFC]/10 backface-hidden"
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <div className="relative h-full p-8 flex flex-col justify-between">
                                        {/* Animated corner accent */}
                                        <div
                                            className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#2E5BFF] transition-all duration-500 group-hover:w-24 group-hover:h-24"
                                            style={{
                                                opacity: activeIndex === index ? 0 : 1
                                            }}
                                        />

                                        {/* Number Badge */}
                                        <div className="flex items-start justify-between">
                                            <div className="w-12 h-12 bg-[#2E5BFF] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(46,91,255,0.6)] group-hover:scale-110">
                                                <span className="text-[#FCFCFC] roboto-mono text-lg font-bold">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            {/* Hover indicator */}
                                            <div className="flex gap-1">
                                                {[...Array(3)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 h-8 bg-[#2E5BFF]/20 transition-all duration-300"
                                                        style={{
                                                            height: activeIndex === index ? '32px' : '8px',
                                                            backgroundColor: activeIndex === index ? '#2E5BFF' : 'rgba(46,91,255,0.2)',
                                                            transitionDelay: `${i * 50}ms`
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col justify-center">
                                            {/* Title */}
                                            <h3 className="text-3xl md:text-4xl inter font-black text-[#FCFCFC] mb-4 uppercase tracking-tight leading-tight">
                                                {item.title}
                                            </h3>

                                            {/* Animated Divider */}
                                            <div className="h-[2px] bg-gradient-to-r from-[#2E5BFF] to-transparent mb-6 transition-all duration-500"
                                                style={{
                                                    width: activeIndex === index ? '100%' : '60px'
                                                }}
                                            />

                                            {/* Description */}
                                            <p className="text-sm text-gray-400 leading-relaxed roboto-mono">
                                                {item.content}
                                            </p>
                                        </div>

                                        {/* Bottom Indicator */}
                                        <div className="flex items-center gap-2">
                                            <div className="h-[1px] flex-1 bg-[#FCFCFC]/10" />
                                            <span className="text-[10px] text-[#2E5BFF] roboto-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Explore
                                            </span>
                                            <div className="w-2 h-2 bg-[#2E5BFF] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        </div>

                                        {/* Gradient Overlay on Hover */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-[#2E5BFF]/0 via-transparent to-[#2E5BFF]/0 transition-all duration-700 pointer-events-none"
                                            style={{
                                                opacity: activeIndex === index ? 0.1 : 0
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* BACK SIDE */}
                                <div
                                    className="absolute inset-0 bg-[#FCFCFC] border border-[#2E5BFF] backface-hidden"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)'
                                    }}
                                >
                                    <div className="relative h-full p-8 flex flex-col">
                                        {/* Geometric pattern overlay */}
                                        <div
                                            className="absolute top-0 left-0 w-full h-1 bg-[#2E5BFF]"
                                        />
                                        <div
                                            className="absolute bottom-0 right-0 w-1 h-full bg-[#2E5BFF]"
                                        />

                                        {/* Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-10 h-10 bg-[#2E5BFF] flex items-center justify-center">
                                                <span className="text-[#FCFCFC] roboto-mono text-base font-bold">
                                                    0{index + 1}
                                                </span>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(3)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 h-6 bg-[#2E5BFF]"
                                                        style={{
                                                            opacity: 1 - (i * 0.3)
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl md:text-3xl inter font-black text-[#050505] mb-4 uppercase tracking-tight">
                                            {item.title}
                                        </h3>

                                        {/* Divider */}
                                        <div className="h-[2px] w-full bg-gradient-to-r from-[#2E5BFF] via-[#2E5BFF]/50 to-transparent mb-6" />

                                        {/* Main Content */}
                                        <p className="text-base text-[#050505] leading-relaxed mb-6 roboto-mono font-medium">
                                            {item.content}
                                        </p>

                                        {/* Additional Detail */}
                                        <div className="mt-auto">
                                            <div className="h-[1px] w-full bg-[#2E5BFF]/20 mb-4" />
                                            <p className="text-sm text-[#050505]/70 leading-relaxed roboto-mono">
                                                {item.detail}
                                            </p>
                                        </div>

                                        {/* Bottom accent */}
                                        <div className="mt-6 flex items-center gap-2">
                                            <div className="w-3 h-3 bg-[#2E5BFF]" />
                                            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#2E5BFF] to-transparent" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Accent Bar */}
                            <div
                                className="absolute bottom-0 left-0 h-1 bg-[#2E5BFF] transition-all duration-500"
                                style={{
                                    width: activeIndex === index ? '100%' : '0%'
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* California Built Banner */}
                <div className="relative bg-[#0a0a0a] border border-[#FCFCFC]/10 p-8 overflow-hidden">
                    {/* Animated scan line */}
                    <div
                        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
                    >
                        <div
                            className="absolute top-0 left-0 w-1 h-full bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent animate-scan"
                        />
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                        {/* Left Line */}
                        <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#FCFCFC]/20 to-[#FCFCFC]/20" />

                        {/* Center Badge */}
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-[#2E5BFF] animate-pulse-slow" />
                            <span className="text-xs md:text-sm roboto-mono text-[#2E5BFF] tracking-[0.3em] uppercase font-bold">
                                California Built
                            </span>
                            <div className="w-3 h-3 bg-[#2E5BFF] animate-pulse-slow" />
                        </div>

                        {/* Right Line */}
                        <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#FCFCFC]/20 to-[#FCFCFC]/20" />
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#2E5BFF]/30" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#2E5BFF]/30" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#2E5BFF]/30" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#2E5BFF]/30" />
                </div>
            </div>

            <style>{`
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backfaceVisibility: hidden;
                    -webkit-backfaceVisibility: hidden;
                }

                @keyframes scan {
                    0% {
                        left: -10%;
                    }
                    100% {
                        left: 110%;
                    }
                }

                .animate-scan {
                    animation: scan 8s linear infinite;
                }

                @keyframes pulse-slow {
                    0%, 100% { 
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.5;
                        transform: scale(1.2);
                    }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default WhyKazm;