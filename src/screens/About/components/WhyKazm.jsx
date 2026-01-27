const WhyKazm = () => {
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
        <div className="bg-[#FCFCFC] text-black rounded-none md:rounded-3xl p-8 md:p-16 relative overflow-hidden">
            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }} />

            <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase">
                    Why KAZM?
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className="border-t-2 border-black pt-6 group hover:border-[#2E5BFF] transition-colors duration-300"
                        >
                            <h4 className="text-2xl font-bold mb-3 uppercase group-hover:text-[#2E5BFF] transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex items-center gap-4">
                    <div className="h-px flex-1 bg-black/20" />
                    <span className="text-xs font-mono text-[#2E5BFF] tracking-widest">CALIFORNIA BUILT</span>
                    <div className="h-px flex-1 bg-black/20" />
                </div>
            </div>
        </div>
    );
};
export default WhyKazm