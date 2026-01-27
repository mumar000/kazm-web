import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

const CustomerJourney = () => {
    const targetRef = useRef(null);

    // Track scroll progress of this specific section
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Transform scroll progress (0 -> 1) into horizontal movement (start -> end)
    // Adjust percentages based on number of cards to ensure smooth exit
    const x = useTransform(scrollYProgress, [0, 1], ["50%", "-95%"]);

    const journey = [
        {
            phase: "Phase 01",
            title: "Audit & Architect",
            subtitle: "FOUNDRY",
            content: "We build your high-end digital home—custom artist sites, Shopify merch stores, or interactive fan platforms.",
            color: "from-cyan-500 to-blue-600",
            offerings: ["Custom Artist Sites", "Shopify Merch Stores", "Fan Platforms", "High-Performance Arch"]
        },
        {
            phase: "Phase 02",
            title: "Authority & Traffic",
            subtitle: "GROWTH",
            content: "We optimize your digital footprint. We publish your story and ensure your brand/music is discoverable via global SEO.",
            color: "from-purple-500 to-pink-600",
            offerings: ["Global SEO Strategy", "Content Publishing", "Digital Storytelling", "Brand Optimization"]
        },
        {
            phase: "Phase 03",
            title: "Physical Activation",
            subtitle: "LIVE",
            content: "We manage the tour, host the launch, and produce the live experience that turns followers into a movement.",
            color: "from-orange-500 to-yellow-600",
            offerings: ["Tour Management", "Launch Events", "Live Production", "Community Building"]
        }
    ];

    return (
        // Height 300vh allows enough space to scroll through the horizontal content
        <section ref={targetRef} className="relative h-[300vh] bg-[#050505] ">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                {/* Background Grid & Ambient Effects */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2E5BFF]/10 blur-[120px] rounded-full pointer-events-none" />
                </div>

                {/* Static Header Elements */}
                <div className="absolute top-10 left-8 md:left-20 z-20">
                    <div className="border-l-2 border-[#2E5BFF] pl-6">
                        <h2 className="text-5xl font-black text-white tracking-tighter uppercase mb-2">The Loop</h2>
                        <p className="text-gray-400 font-mono uppercase tracking-widest text-sm">Scroll to Explore</p>
                    </div>
                </div>

                {/* Horizontal Motion Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-12 pl-10 md:pl-0 z-10 relative items-center"
                >
                    {/* Introductory Text Node (Optional, gives context before cards) */}
                    <div className="w-[300px] shrink-0 text-right pr-12 hidden md:block">
                        <span className="text-[#2E5BFF] font-mono text-xs uppercase tracking-widest block mb-4">Start Here</span>
                        <ArrowRight className="ml-auto text-white/50" size={32} />
                    </div>

                    {/* Cards Loop */}
                    {journey.map((item, index) => (
                        <JourneyCard key={index} item={item} index={index} />
                    ))}
                </motion.div>

                {/* Footer / Progress Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 font-mono text-xs uppercase tracking-[0.2em] z-20">
                    KAZM Customer Journey
                </div>
            </div>
        </section>
    );
};

// Extracted Card Component for Cleanliness
const JourneyCard = ({ item, index }) => {
    return (
        <div className="group w-[350px] md:w-[380px] h-[520px] perspective-1000 shrink-0 cursor-pointer">
            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between [backface-visibility:hidden] overflow-hidden shadow-2xl">

                    {/* Internal Glow */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2`} />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <span className="text-[#2E5BFF] font-mono font-bold text-xs uppercase tracking-widest border border-[#2E5BFF]/30 px-3 py-1 rounded-full">
                                {item.phase}
                            </span>
                            <span className="text-4xl font-black text-white/10">0{index + 1}</span>
                        </div>

                        <h3 className="text-4xl font-black text-white mb-3 uppercase tracking-tight leading-[0.9]">
                            {item.title}
                        </h3>
                        <p className="text-white/50 font-mono text-xs uppercase tracking-widest mb-6">
                            {item.subtitle}
                        </p>

                        <div className="w-12 h-1 bg-white/10 mb-6" />

                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                            {item.content}
                        </p>
                    </div>

                    {/* Bottom Action Hint */}
                    <div className="flex items-center gap-2 text-white/40 text-xs font-mono uppercase mt-auto">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#2E5BFF] group-hover:border-[#2E5BFF] group-hover:text-white transition-colors">
                            <ArrowRight size={14} />
                        </div>
                        <span>Hover details</span>
                    </div>
                </div>

                {/* --- BACK FACE --- */}
                <div
                    className={`absolute inset-0 w-full h-full bg-[#0a0a0a] border border-white/20 rounded-[2rem] p-8 flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden relative`}
                >
                    {/* Full Color Overlay on Back */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full blur-[100px] opacity-10" />

                    <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-6 border-b border-white/10 pb-4">
                            <span className="text-[#2E5BFF] font-mono text-[10px] uppercase tracking-widest mb-2 block">
                                Deliverables
                            </span>
                            <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                                What we build
                            </h4>
                        </div>

                        <ul className="space-y-4 flex-1">
                            {item.offerings.map((offer, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <div className={`mt-1 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                                        <Check size={10} className="text-white font-bold" />
                                    </div>
                                    <span className="text-sm font-bold">{offer}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto text-center pt-4">
                            <p className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
                                KAZM Infrastructure
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CustomerJourney;