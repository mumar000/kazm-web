"use client"
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronRight } from 'lucide-react';

const GallerySection = ({ items, radius = 250, damping = 0.5 }) => {
    const rootRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    const demo = [
        { title: 'Digital Foundry', subtitle: 'Web Dev', desc: 'E-Commerce Platform.', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800', span: 'col-span-12 md:col-span-6 row-span-2' },
        { title: 'Live Action', subtitle: 'SEO', desc: 'Music Festival 2025', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800', span: 'col-span-6 md:col-span-3 row-span-1' },
        { title: 'Digital Foundry', subtitle: 'Events', desc: 'Mobile App Design', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800', span: 'col-span-6 md:col-span-3 row-span-2' },
        { title: 'Live Action', subtitle: 'Design', desc: 'Event Production', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800', span: 'col-span-6 md:col-span-3 row-span-1' },
        { title: 'Digital Foundry', subtitle: 'AI', desc: 'Web Platform', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800', span: 'col-span-12 md:col-span-5 row-span-1' },
        { title: 'Live Activation', subtitle: 'Data', desc: 'Concert Experience', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', span: 'col-span-6 md:col-span-4 row-span-1' },
        { title: 'Vision', subtitle: 'Ar', desc: 'Realms explored.', img: 'https://images.unsplash.com/photo-1626379953822-baec19c3bbcd?q=80&w=800', span: 'col-span-6 md:col-span-3 row-span-1' },
    ];

    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
    }, []);

    const handleMove = e => {
        const r = rootRef.current.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        gsap.to(pos.current, {
            x, y,
            duration: damping,
            ease: "power3.out",
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            }
        });
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            className="relative w-full min-h-screen bg-[#1c1c1c] p-6 md:p-12 overflow-hidden"
            style={{ '--r': `${radius}px` }}
        >
            {/* Background Gradient Accent - New Color: Indigo/Violet */}
            {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2e2b52]/20 rounded-full blur-[120px] pointer-events-none" /> */}

            {/* Collage Grid */}
            <div className="grid grid-cols-12 auto-rows-[220px] md:auto-rows-[280px] gap-4 relative z-10 max-w-7xl mx-auto">
                {data.map((c, i) => (
                    <article
                        key={i}
                        className={`${c.span} group relative rounded-2xl overflow-hidden border border-white/10  backdrop-blur-2xl transition-all duration-500 hover:border-white/30`}
                    >
                        {/* Image Layer */}
                        <div className="absolute inset-0 z-0">
                            <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                            {/* Accent Tint Layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2e2b52]/40 to-black/80" />
                        </div>

                        {/* Text Layer */}
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                            <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{c.subtitle}</span>
                            <h3 className="text-2xl inter font-black text-white mb-2 tracking-tighter leading-none">{c.title}</h3>

                            <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden">
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{c.desc}</p>
                                <button className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">
                                    View <ChevronRight size={12} />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </div>
    );
};

export default GallerySection;  