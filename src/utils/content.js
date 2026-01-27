import {
    Code, TrendingUp, Mic2,
    Cpu, Globe, Zap, Layers,
    Smartphone, Search, Music
} from 'lucide-react';

export const kazmData = {
    header: {
        title: "KAZM",
        subtitle: "STRATEGIC BRAND & DIGITAL BLUEPRINT 2026",
        desc: "Infrastructure + Impact."
    },
    manifesto: {
        title: "The Brand Manifesto",
        subtitle: "Infrastructure + Impact",
        text: "KAZM is a premier American digital agency and talent management firm. Born in the Bay Area, we represent the pinnacle of California-built technology and culture. We bridge the gap between technical precision and cultural relevance. From the Silicon Valley code to the SoCal stage, KAZM is the bridge.",
        stats: [
            { label: "Identity", value: "Premier Agency" },
            { label: "Vision", value: "Tech + Culture" },
            { label: "Scale", value: "National Reach" }
        ]
    },
    visualIdentity: {
        title: "Visual Identity",
        desc: "Modern Industrial Minimalism. Sharp, fast, and architectural.",
        items: [
            {
                title: "Obsidian",
                hex: "#050505",
                role: "Foundation",
                desc: "The deep void foundation of the brand.",
                icon: Layers
            },
            {
                title: "Titanium",
                hex: "#FCFCFC",
                role: "Typography",
                desc: "Razor-sharp typography and clarity.",
                icon: Cpu
            },
            {
                title: "KAZM Cobalt",
                hex: "#2E5BFF",
                role: "Pulse",
                desc: "High-energy pulse for interactions.",
                icon: Zap
            }
        ]
    },
    servicePillars: [
        {
            id: "I",
            title: "The Digital Foundry",
            tag: "BUILD",
            icon: Code,
            offerings: ["Web Design", "App Development", "Shopify Architecture", "UI/UX Engineering"],
            pitch: "We build the high-performance digital engines that power your revenue 24/7."
        },
        {
            id: "II",
            title: "The Growth Lab",
            tag: "SCALE",
            icon: TrendingUp,
            offerings: ["SEO Strategy", "Digital Marketing", "E-Book Publishing", "Global Authority"],
            pitch: "We turn your digital assets into global authorities. We don't just find traffic; we own the search."
        },
        {
            id: "III",
            title: "Talent & Activation",
            tag: "LIVE",
            icon: Mic2,
            offerings: ["Artist Management", "Event Management", "Live Production", "Brand Activations"],
            pitch: "We manage the talent and produce the moments. We create the physical touchpoints that build community."
        }
    ],
    journey: {
        title: "The KAZM Loop",
        subtitle: "The Customer Journey",
        steps: [
            {
                title: "Audit & Architect",
                phase: "Phase 01",
                desc: "We build your high-end digital home—custom artist sites, Shopify merch stores, or interactive fan platforms.",
                icon: Smartphone
            },
            {
                title: "Authority & Traffic",
                phase: "Phase 02",
                desc: "We optimize your digital footprint. We publish your story and ensure your brand is discoverable via global SEO.",
                icon: Search
            },
            {
                title: "Physical Activation",
                phase: "Phase 03",
                desc: "We manage the tour, host the launch, and produce the live experience that turns followers into a movement.",
                icon: Music
            }
        ]
    },
    competitiveEdge: {
        title: "Why KAZM?",
        items: [
            { title: "The Tech-Enabled Artist", desc: "Data-driven management meets creative freedom." },
            { title: "Unified Stack", desc: "No more freelancers. We own the lifecycle from code to crowd." },
            { title: "California Standards", desc: "Bay Area technical rigor meets LA creative energy." },
            { title: "Proven Legitimacy", desc: "Every project is an architectural build, not just a gig." }
        ]
    },
    websiteArch: {
        title: "Website Architecture",
        points: [
            "Hero: Split-screen video (SF Tech vs. LA Live)",
            "Capabilities: Interactive Bento Box",
            "Portfolio: Filterable Masonry Grid",
            "Inquiry Lab: Logic-based form",
            "Global Footer: Live SF/LA Clocks"
        ]
    }
};