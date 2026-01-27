// import { Compass, Rocket, Target } from "lucide-react";
// import { useState } from "react";

// const ManifestoHero = () => {
//     const [scrollY, setScrollY] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [hoveredItem, setHoveredItem] = useState(null);

//     // Handle scroll
//     useState(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     });

//     // Handle rotation
//     useState(() => {
//         let animationId;
//         let lastTime = Date.now();

//         const animate = () => {
//             const now = Date.now();
//             const delta = now - lastTime;
//             lastTime = now;

//             const speed = isHovered ? 0.003 : 0.006;
//             setRotation(prev => (prev + delta * speed) % 360);

//             animationId = requestAnimationFrame(animate);
//         };

//         animationId = requestAnimationFrame(animate);
//         return () => cancelAnimationFrame(animationId);
//     });

//     // Parallax calculations
//     const yOffset = Math.min(scrollY * 0.3, 250);
//     const opacity = Math.max(1 - scrollY / 500, 0);
//     const bgY = scrollY * 0.2;

//     const items = [
//         {
//             icon: Compass,
//             title: "The Identity",
//             sub: "Roots in Culture",
//             description: "KAZM is a premier American digital agency and talent management firm. Born in the Bay Area, we represent the pinnacle of California-built technology and culture."
//         },
//         {
//             icon: Rocket,
//             title: "The Vision",
//             sub: "Precision Built",
//             description: "We bridge the gap between technical precision and cultural relevance. We don't just build websites; we build platforms. We don't just host events; we activate communities. From the Silicon Valley code to the SoCal stage, KAZM is the bridge."
//         },
//         {
//             icon: Target,
//             title: "The Scale",
//             sub: "Global Reach",
//             description: "While our roots are in the West, our reach is national. From West to East, we provide the digital and physical infrastructure for the world's most ambitious brands and artists."
//         }
//     ];

//     return (
//         <div className="relative h-[110vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center font-sans text-white">
//             {/* --- PARALLAX BACKGROUND --- */}
//             <div
//                 className="absolute inset-0 z-0"
//                 style={{ transform: `translateY(${bgY}px)` }}
//             >
//                 <div
//                     className="absolute inset-0 bg-cover bg-center opacity-40"
//                     style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=3408&auto=format&fit=crop')` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-[#050505]/60" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
//             </div>
//             {/* --- MAIN CONTENT --- */}
//             <div
//                 className="relative z-10 w-full h-[800px] flex items-center justify-center"
//                 style={{
//                     transform: `translateY(${-yOffset}px)`,
//                     opacity: opacity,
//                     perspective: '1000px'
//                 }}
//             >
//                 {/* --- CENTER CORE --- */}
//                 <div className="absolute z-20 flex flex-col items-center justify-center select-none mix-blend-screen">
//                     <div className="w-2 h-2 rounded-full bg-[#2E5BFF] shadow-[0_0_25px_5px_#2E5BFF] mb-6 animate-pulse" />

//                     <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] uppercase text-center mix-blend-overlay opacity-50">
//                         Mani
//                     </h1>
//                     <h1 className="text-5xl md:text-7xl font-bold tracking-[0.05em] uppercase text-center text-white mt-[-10px] drop-shadow-2xl">
//                         Festo
//                     </h1>

//                     <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent mt-6 opacity-100 shadow-[0_0_15px_#2E5BFF]" />
//                 </div>

//                 {/* --- ORBIT TRACK --- */}
//                 <div className="absolute border-[2px] border-white/15 w-[650px] h-[650px] rounded-full pointer-events-none shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]" />

//                 {/* --- ROTATING SYSTEM --- */}
//                 <div
//                     className="absolute w-full h-full flex items-center justify-center cursor-pointer"
//                     style={{ transform: `rotate(${rotation}deg)` }}
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[325px] w-1 h-20 bg-gradient-to-b from-transparent via-[#2E5BFF] to-transparent blur-sm" />

//                     {items.map((item, i) => {
//                         const rotationStep = 360 / items.length;
//                         const itemAngle = i * rotationStep;
//                         const isItemHovered = hoveredItem === i;

//                         return (
//                             <div
//                                 key={i}
//                                 className="absolute top-1/2 left-1/2 w-full h-0 pointer-events-auto"
//                                 style={{ transform: `translate(-50%, -50%) rotate(${itemAngle}deg)` }}
//                             >
//                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[325px]">
//                                     {/* --- COUNTER-ROTATION --- */}
//                                     <div
//                                         className="relative w-48 flex flex-col items-center justify-center group"
//                                         style={{
//                                             transform: `rotate(${-rotation - itemAngle}deg)`,
//                                             transition: 'transform 0.05s linear'
//                                         }}
//                                         onMouseEnter={() => setHoveredItem(i)}
//                                         onMouseLeave={() => setHoveredItem(null)}
//                                     >
//                                         {/* Icon Wrapper */}
//                                         <div className="relative mb-6 transition-transform duration-500 group-hover:scale-110 z-10">
//                                             <div className="absolute inset-0 bg-[#2E5BFF] opacity-0 blur-[30px] rounded-full group-hover:opacity-40 transition-opacity duration-500" />

//                                             <div className="relative w-14 h-14 rounded-full border border-white/20 bg-[#0a0a0a] flex items-center justify-center z-10 group-hover:border-[#2E5BFF] transition-colors duration-500 shadow-xl">
//                                                 <item.icon className="text-gray-400 group-hover:text-[#2E5BFF] transition-colors duration-500" size={24} strokeWidth={1.5} />
//                                             </div>

//                                             <div className="absolute top-full left-1/2 w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent -translate-x-1/2 -z-10 group-hover:from-[#2E5BFF] transition-colors duration-500" />
//                                         </div>

//                                         {/* Typography */}
//                                         <div className="text-center space-y-2 z-10">
//                                             <h3 className="text-xl font-bold uppercase tracking-widest text-white drop-shadow-md">
//                                                 {item.title}
//                                             </h3>
//                                             <p className="text-xs text-[#2E5BFF] font-mono uppercase tracking-[0.2em] opacity-90">
//                                                 {item.sub}
//                                             </p>
//                                         </div>

//                                         {/* --- POPUP DESCRIPTION --- */}
//                                         <div
//                                             className={`absolute top-1/2 -translate-y-1/2 w-96 transition-all duration-500 ${isItemHovered
//                                                 ? 'opacity-100 scale-100 pointer-events-auto'
//                                                 : 'opacity-0 scale-95 pointer-events-none'
//                                                 }`}
//                                             style={{
//                                                 left: i === 0 ? '100%' : i === 1 ? '100%' : 'auto',
//                                                 right: i === 2 ? '100%' : 'auto',
//                                                 marginLeft: i === 0 || i === 1 ? '2rem' : '0',
//                                                 marginRight: i === 2 ? '2rem' : '0'
//                                             }}
//                                         >
//                                             {/* Connection Line */}
//                                             <div
//                                                 className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[#2E5BFF] to-transparent"
//                                                 style={{
//                                                     left: i === 2 ? 'auto' : '-2rem',
//                                                     right: i === 2 ? '-2rem' : 'auto',
//                                                     transform: i === 2 ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)'
//                                                 }}
//                                             />

//                                             {/* Light Card */}
//                                             <div className="relative bg-[#FCFCFC] border-2 border-[#2E5BFF] rounded-2xl p-6 shadow-2xl">
//                                                 {/* Subtle Pattern */}
//                                                 <div
//                                                     className="absolute inset-0 opacity-[0.02] rounded-2xl"
//                                                     style={{
//                                                         backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
//                                                         backgroundSize: '20px 20px'
//                                                     }}
//                                                 />

//                                                 <div className="relative z-10">
//                                                     {/* Header */}
//                                                     <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#2E5BFF]/20">
//                                                         <div className="w-10 h-10 rounded-full bg-[#2E5BFF] flex items-center justify-center shadow-lg">
//                                                             <item.icon className="text-white" size={20} strokeWidth={2.5} />
//                                                         </div>
//                                                         <div>
//                                                             <h4 className="text-base font-black text-black uppercase tracking-wider">
//                                                                 {item.title}
//                                                             </h4>
//                                                             <p className="text-[10px] text-[#2E5BFF] font-mono uppercase tracking-widest font-bold">
//                                                                 {item.sub}
//                                                             </p>
//                                                         </div>
//                                                     </div>

//                                                     {/* Description */}
//                                                     <p className="text-sm text-black leading-relaxed font-medium">
//                                                         {item.description}
//                                                     </p>

//                                                     {/* Bottom Accent */}
//                                                     <div className="mt-4 pt-3 border-t border-[#2E5BFF]/20">
//                                                         <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2E5BFF] to-transparent" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* Scroller Hint */}
//             <div className="absolute bottom-10 z-20 flex flex-col items-center opacity-30">
//                 <span className="text-[10px] tracking-widest uppercase mb-2">Scroll</span>
//                 <div className="w-[1px] h-10 bg-white" />
//             </div>

//             <style>{`
//                 @keyframes pulse {
//                     0%, 100% { opacity: 1; }
//                     50% { opacity: 0.5; }
//                 }
//                 .animate-pulse {
//                     animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ManifestoHero;

import { Compass, Rocket, Target } from "lucide-react";
import { useState } from "react";

const ManifestoHero = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
        <div className="relative w-full bg-[#050505] py-20 md:py-32">

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="mb-16 border-l-2 border-[#2E5BFF] pl-6">
                    <h2 className="text-5xl md:text-7xl font-black text-[#FCFCFC] tracking-tighter uppercase mb-2">
                        Manifesto
                    </h2>
                    <p className="text-gray-400 font-mono uppercase tracking-widest text-sm">
                        Infrastructure + Impact
                    </p>
                </div>

                {/* Bento Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Main Card */}
                            <div className="relative bg-[#0a0a0a] border border-white/10 p-8 transition-all duration-300 hover:border-[#2E5BFF]">
                                {/* Mesh Pattern Background */}
                                <div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
                                        backgroundSize: '40px 40px'
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-12 h-12 bg-[#2E5BFF] flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] transition-shadow duration-300">
                                        <item.icon className="text-[#FCFCFC]" size={24} strokeWidth={2} />
                                    </div>

                                    {/* Tag */}
                                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2E5BFF] mb-3 block uppercase">
                                        {item.sub}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-[#FCFCFC] mb-4 uppercase tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="h-[1px] w-12 bg-white/20 mb-6" />

                                    {/* Description */}
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        {item.description}
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

                {/* Bottom Stats Bar (Optional) */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#0a0a0a] border border-white/10 p-6 flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Founded</span>
                        <span className="font-black text-xl text-[#FCFCFC]">Bay Area</span>
                    </div>
                    <div className="bg-[#0a0a0a] border border-white/10 p-6 flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Coverage</span>
                        <span className="font-black text-xl text-[#FCFCFC]">National</span>
                    </div>
                    <div className="bg-[#0a0a0a] border border-white/10 p-6 flex justify-between items-center">
                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Focus</span>
                        <span className="font-black text-xl text-[#FCFCFC]">Premium</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManifestoHero;