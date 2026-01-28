import { useState } from "react";
import SectionHeading from "../../../components/SectionHeading";

const WhyKazm = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const reasons = [
        {
            title: "The Tech-Enabled Artist",
            content: "We give artists the same technical tools as a tech startup. Data-driven management meets creative freedom."
        },
        {
            title: "Unified Stack",
            content: "No more managing five different freelancers. We own the entire brand lifecycle from code to crowd."
        },
        {
            title: "California Standards",
            content: "We combine Bay Area technical rigor with LA creative energy."
        },
        {
            title: "Proven Legitimacy",
            content: "We treat every project—and every artist—as an architectural build, not just a \"gig.\""
        }
    ];

    return (
        <div className="relative w-full bg-[#050505] py-20 md:py-32">


            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <SectionHeading
                    title="Why KAZM?"
                    subtitle="The Competitive Edge"
                    className="mb-16 "
                    titleClassName="text-[#FCFCFC] text-5xl md:text-7xl inter"
                    subtitleClassName="text-gray-400 roboto-mono"
                />

                {/* Bento Grid - 2x2 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Main Card */}
                            <div className="relative bg-[#0a0a0a] border border-white/10 p-8 transition-all duration-300 hover:border-[#2E5BFF] min-h-[200px] flex flex-col">

                                {/* Content */}
                                <div className="relative z-10 flex-1 flex flex-col">
                                    {/* Number Badge */}
                                    <div className="w-8 h-8 bg-[#2E5BFF] flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-shadow duration-300">
                                        <span className="text-[#FCFCFC] roboto-mono text-sm font-bold">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl inter font-black text-[#FCFCFC] mb-4 uppercase tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="h-[1px] w-12 bg-white/20 mb-6" />

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        {item.content}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2E5BFF]/0 to-[#2E5BFF]/0 group-hover:from-[#2E5BFF]/5 group-hover:to-transparent transition-all duration-500" />
                            </div>

                            {/* Bottom Accent Bar */}
                            <div className={`h-1 bg-[#2E5BFF] transition-all duration-300 ${hoveredIndex === index ? 'w-full' : 'w-0'
                                }`} />
                        </div>
                    ))}
                </div>

                {/* California Built Banner */}
                <div className="bg-[#0a0a0a] border border-white/10 p-6 flex items-center justify-center">
                    <div className="flex items-center gap-6 w-full max-w-2xl">
                        <div className="h-[1px] flex-1 bg-white/20" />
                        <span className="text-xs roboto-mono text-[#2E5BFF] tracking-[0.3em] uppercase font-bold">
                            California Built
                        </span>
                        <div className="h-[1px] flex-1 bg-white/20" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default WhyKazm;