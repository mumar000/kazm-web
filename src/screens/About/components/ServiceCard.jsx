import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";

const ServiceCard = ({ service, index, isActive }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className={`px-4 transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div className="group h-[500px] perspective-1000 cursor-pointer">
                <div
                    className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                >
                    {/* FRONT FACE */}
                    <div
                        className="absolute inset-0 h-full w-full bg-[#0a0a0a] border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between shadow-2xl"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2E5BFF] via-purple-500 to-[#2E5BFF] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>


                        <div className="flex justify-between items-start relative z-10">
                            <div className="w-14 h-14 rounded-full bg-[#2E5BFF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(46,91,255,0.4)]">
                                <service.icon size={28} />
                            </div>
                            <span className="text-4xl font-black text-white/10 tracking-tighter">0{index + 1}</span>
                        </div>

                        <div className="relative z-10">
                            <span className="text-xs roboto-mono font-bold tracking-[0.2em] text-[#2E5BFF] mb-2 block uppercase">
                                {service.tag}
                            </span>
                            <h3 className="text-3xl inter font-bold text-white mb-4 uppercase tracking-tight leading-none">
                                {service.title}
                            </h3>
                            <div className="h-1 w-12 bg-white/20" />
                        </div>

                        <div className="flex items-center gap-2 text-white/40 text-sm roboto-mono uppercase relative z-10">
                            <span>Hover for details</span>
                            <ChevronRight size={14} />
                        </div>
                    </div>

                    {/* BACK FACE */}
                    <div
                        className="absolute inset-0 h-full w-full bg-[#2E5BFF] rounded-2xl p-8 flex flex-col overflow-hidden"
                        style={{
                            transform: 'rotateY(180deg)',
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h4 className="text-white text-xl inter font-bold mb-4 relative z-10">The Pitch</h4>
                        <p className="text-white/90 text-sm leading-relaxed mb-8 relative z-10 font-medium">
                            "{service.pitch}"
                        </p>

                        <div className="mt-auto relative z-10">
                            <h5 className="text-xs roboto-mono uppercase tracking-widest text-white/60 mb-4 border-b border-white/20 pb-2">
                                Core Offerings
                            </h5>
                            <ul className="space-y-2">
                                {service.offerings.map((offer, i) => (
                                    <li key={i} className="flex items-center gap-2 text-white text-sm font-bold">
                                        <Check size={14} className="text-black/50" />
                                        {offer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;