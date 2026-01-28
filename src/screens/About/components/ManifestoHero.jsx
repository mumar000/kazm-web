import { Compass, Rocket, Target } from "lucide-react";
import { useState, useEffect } from "react";

const ManifestoHero = () => {
    const [rotation, setRotation] = useState(0);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [flipState, setFlipState] = useState('front'); // 'front', 'flipping', 'back'

    // Rotation animation
    useEffect(() => {
        let animationId;
        let lastTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const delta = now - lastTime;
            lastTime = now;

            const speed = isHovered ? 0.002 : 0.005;
            setRotation(prev => (prev + delta * speed) % 360);

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isHovered]);

    // Handle hover state changes
    useEffect(() => {
        if (hoveredItem !== null) {
            setFlipState('flipping');
            setTimeout(() => setFlipState('back'), 300);
        } else {
            setFlipState('flipping');
            setTimeout(() => setFlipState('front'), 300);
        }
    }, [hoveredItem]);

    const items = [
        {
            icon: Compass,
            title: "The Identity",
            sub: "Roots in Culture",
            description: "KAZM is a premier American digital agency and talent management firm. Born in the Bay Area, we represent the pinnacle of California-built technology and culture."
        },
        {
            icon: Rocket,
            title: "The Vision",
            sub: "Precision Built",
            description: "We bridge the gap between technical precision and cultural relevance. We don't just build websites; we build platforms. We don't just host events; we activate communities. From the Silicon Valley code to the SoCal stage, KAZM is the bridge."
        },
        {
            icon: Target,
            title: "The Scale",
            sub: "Global Reach",
            description: "While our roots are in the West, our reach is national. From West to East, we provide the digital and physical infrastructure for the world's most ambitious brands and artists."
        }
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center">
            {/* Radial Overlay Background - Black outside to transparent center */}
            <div
                className="absolute inset-0 z-1 pointer-events-none"
                style={{
                    // 10% is where it starts fading, 85% is where it becomes fully black
                    background: 'radial-gradient(circle at center, transparent 10%, #050505 85%)'
                }}
            />
            <div className="bg-linear-to-b z-1 from-black to-transparent absolute top-0 w-full h-20"></div>
            <div className="bg-linear-to-t z-1 from-black to-transparent absolute bottom-0 w-full h-20"></div>

            {/* Subtle Background Image */}
            <div className="absolute  inset-0 z-0 opacity-30">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=3408&auto=format&fit=crop')`,
                        filter: 'blur(2px)'
                    }}
                />
            </div>

            {/* Additional radial glow effect */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: 'radial-gradient(circle at center, rgba(46,91,255,0.05) 0%, transparent 60%)'
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Center Content Area with Flip Animation */}
                <div className="absolute w-[500px] h-[400px] flex items-center justify-center" style={{ perspective: '2000px' }}>
                    {/* Front Side - Manifesto */}
                    <div
                        className="absolute w-full h-full flex flex-col items-center justify-center transition-all duration-500"
                        style={{
                            transform: flipState === 'front' ? 'rotateY(0deg)' : 'rotateY(90deg)',
                            opacity: flipState === 'front' ? 1 : 0,
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        <div className="w-3 h-3 rounded-full bg-[#2E5BFF] shadow-[0_0_30px_8px_rgba(46,91,255,0.6)] mb-8 animate-pulse-slow" />

                        <h1 className="text-7xl font-extralight tracking-[0.3em] uppercase text-[#FCFCFC]/60 mb-[-8px]" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                            Mani
                        </h1>
                        <h1 className="text-8xl font-black tracking-[0.08em] uppercase text-[#FCFCFC]" style={{ fontFamily: 'Inter Tight, sans-serif', textShadow: '0 0 40px rgba(46,91,255,0.3)' }}>
                            Festo
                        </h1>

                        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent mt-8 shadow-[0_0_20px_rgba(46,91,255,0.5)]" />
                    </div>

                    {/* Back Side - Description Card */}
                    <div
                        className="absolute w-full h-full flex items-center justify-center transition-all duration-500"
                        style={{
                            transform: flipState === 'back' ? 'rotateY(0deg)' : 'rotateY(-90deg)',
                            opacity: flipState === 'back' ? 1 : 0,
                            backfaceVisibility: 'hidden'
                        }}
                    >
                        {hoveredItem !== null && (
                            <div className="w-[500px] bg-[#FCFCFC] border border-[#2E5BFF] rounded-sm p-8 shadow-[0_0_60px_rgba(46,91,255,0.3)]">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#2E5BFF]/20">
                                    <div className="w-12 h-12 rounded-sm bg-[#2E5BFF] flex items-center justify-center shadow-lg">
                                        {(() => {
                                            const Icon = items[hoveredItem].icon;
                                            return <Icon className="text-[#FCFCFC]" size={24} strokeWidth={2} />;
                                        })()}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-[#050505] uppercase tracking-[0.15em]" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                            {items[hoveredItem].title}
                                        </h4>
                                        <p className="text-xs text-[#2E5BFF] uppercase tracking-[0.25em] font-extrabold roboto-mono">
                                            {items[hoveredItem].sub}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm roboto-mono text-[#050505] leading-relaxed  mb-6" >
                                    {items[hoveredItem].description}
                                </p>

                                {/* Bottom Accent */}
                                <div className="pt-4 border-t border-[#2E5BFF]/20">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Orbit Ring */}
                <div className="absolute border border-[#FCFCFC]/10 w-[630px] h-[630px] rounded-full pointer-events-none shadow-[inset_0_0_40px_rgba(46,91,255,0.1)]" />

                {/* Rotating System */}
                <div
                    className="absolute w-full h-full flex items-center justify-center"
                    style={{ transform: `rotate(${rotation}deg)` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {items.map((item, i) => {
                        const rotationStep = 360 / items.length;
                        const itemAngle = i * rotationStep;

                        return (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-full h-0 pointer-events-auto"
                                style={{ transform: `translate(-50%, -50%) rotate(${itemAngle}deg)` }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[350px]">
                                    {/* Counter-rotation wrapper */}
                                    <div
                                        className="relative w-56 flex flex-col items-center justify-center group cursor-pointer"
                                        style={{
                                            transform: `rotate(${-rotation - itemAngle}deg)`,
                                            transition: 'transform 0.05s linear'
                                        }}
                                        onMouseEnter={() => setHoveredItem(i)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        {/* Connection Line to Center */}
                                        <div className="absolute top-1/2 left-1/2 w-[1px] h-[350px] bg-gradient-to-b from-transparent via-[#2E5BFF]/20 to-transparent -translate-x-1/2 group-hover:via-[#2E5BFF]/40 transition-all duration-500" />

                                        {/* Icon Container */}
                                        <div className="relative mb-6 transition-all duration-500 group-hover:scale-125 z-10">
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-[#2E5BFF] opacity-0 blur-[40px] rounded-full group-hover:opacity-60 transition-all duration-500" />

                                            {/* Icon circle */}
                                            <div className="relative w-16 h-16 rounded-sm border border-[#FCFCFC]/20 bg-[#050505] flex items-center justify-center group-hover:border-[#2E5BFF] group-hover:bg-[#050505] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                                                <item.icon
                                                    className="text-[#FCFCFC]/60 group-hover:text-[#2E5BFF] transition-colors duration-500"
                                                    size={28}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            {/* Bottom connector line */}
                                            <div className="absolute top-full left-1/2 w-[1px] h-6 bg-gradient-to-b from-[#FCFCFC]/20 to-transparent -translate-x-1/2 group-hover:from-[#2E5BFF] transition-colors duration-500" />
                                        </div>

                                        {/* Typography */}
                                        <div className="text-center space-y-2 z-10">
                                            <h3 className="text-xl font-black uppercase tracking-[0.2em] text-[#FCFCFC] transition-all duration-500 group-hover:text-[#2E5BFF] group-hover:tracking-[0.25em]" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                                                {item.title}
                                            </h3>
                                            <p className="text-[10px] text-[#2E5BFF]/80 uppercase tracking-[0.25em] font-bold group-hover:text-[#2E5BFF] transition-all duration-500" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                                                {item.sub}
                                            </p>
                                        </div>

                                        {/* Hover indicator */}
                                        <div className="mt-4 w-2 h-2 rounded-full bg-transparent group-hover:bg-[#2E5BFF] transition-all duration-300 shadow-[0_0_15px_rgba(46,91,255,0.8)]" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200;800;900&family=Roboto+Mono:wght@700&display=swap');
                
                @keyframes pulse-slow {
                    0%, 100% { 
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.6;
                        transform: scale(1.1);
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default ManifestoHero;