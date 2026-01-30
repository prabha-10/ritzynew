import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Play,
    Pause,
    Lightbulb,
    Smartphone,
    Leaf,
    Sun,
    Moon,
    Sparkles,
    Check,
    ChevronRight
} from 'lucide-react';

// Hero Section: Left Text, Right Image
const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#FCFCF9]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
                        Treat your space
                        <br />
                        <span className="text-gray-900">to a luxurious</span>
                        <br />
                        <span className="text-gray-900">lighting experience</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
                        Elevate your lifestyle with intelligent lighting that adapts to your environment, mood, and daily routines.
                    </p>
                    <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-semibold hover:bg-black transition-all flex items-center gap-2">
                        Get started <ChevronRight size={18} />
                    </button>

                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <img src={`/assets/images/img_064aab9f12a0.jpg`} alt="Client" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400 font-medium">Joined by 500+ luxury homeowners</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                        <img
                            src="/assets/images/home_automation_lighting.webp"
                            alt="Luxury Lighting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-500 rounded-2xl -z-10 blur-2xl opacity-20" />
                </motion.div>
            </div>
        </section>
    );
};

// Stats Section: Title Left, Stats Right
const StatsSection: React.FC = () => {
    const stats = [
        { value: '12+', label: 'Years of Innovation' },
        { value: '500+', label: 'Luxury Homes Lit' },
        { value: '100%', label: 'Seamless Integration' },
        { value: '25+', label: 'Partner Brands' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-amber-600 font-semibold mb-4 block uppercase tracking-wider text-sm">Experience</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        The premium choice for
                        <br />
                        architectural lighting.
                    </h2>
                    <p className="mt-6 text-gray-500 text-lg max-w-md">
                        We blend cutting-edge technology with elegant design to create environments that inspire and comfort.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-12">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Image + Text Section
const DetailSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#FCFCF9]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="/assets/images/home_automation_lighting_tyba_product.webp"
                            alt="Tyba Lighting Control"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <span className="text-amber-600 font-semibold mb-4 block uppercase tracking-wider text-sm">About us</span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Designed for those who appreciate the finer things.</h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                        Every project is a unique canvas. We specialize in bespoke lighting systems that highlight the architectural beauty of your home while providing intuitive control.
                    </p>
                    <ul className="space-y-4">
                        {['Bespoke Designs', 'State-of-the-Art Controls'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                                <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-amber-600" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

// Video Section
const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-amber-600 font-semibold mb-4 block uppercase tracking-wider text-sm">Action</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">See light in action</h2>
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl max-w-5xl mx-auto group bg-black cursor-pointer" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src="/assets/videos/lighting.mp4"
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                    />
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-xl"
                            >
                                <Play fill="black" size={24} className="ml-1" />
                            </motion.button>
                        </div>
                    )}
                    {isPlaying && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                                <Pause size={24} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// Tabbed Packages Section
const PackagesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const packages = [
        {
            title: 'Ambient Packages',
            items: ['Scene Control', 'Dynamic Dimming', 'Voice Integration', 'Climate Sync'],
            image: '/assets/images/Home_automation_lighting_cerasonar_product.webp'
        },
        {
            title: 'Mood Enhancement',
            items: ['Tunable White', 'Circadian Rhythm', 'Art Highlight', 'Color Zones'],
            image: '/assets/images/home_automation_keypads.webp'
        },
        {
            title: 'Outdoor Brilliance',
            items: ['Automated Gating', 'Landscape Illumination', 'Pool Ambiance', 'Motion Sync'],
            image: '/assets/images/home_automation_outdoor_garden.webp'
        }
    ];

    return (
        <section className="py-24 bg-[#FCFCF9]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-amber-600 font-semibold mb-4 block uppercase tracking-wider text-sm">Options</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Tailored packages for every space</h2>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {packages.map((pkg, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === i
                                ? 'bg-[#1A1A1A] text-white shadow-lg'
                                : 'bg-white text-gray-400 hover:text-gray-900'
                                }`}
                        >
                            {pkg.title}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-[3rem] p-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left shadow-sm"
                    >
                        <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
                            <img src={packages[activeTab].image} alt={packages[activeTab].title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Designed to inspired you</h3>
                            <ul className="space-y-4 mb-8">
                                {packages[activeTab].items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button className="px-8 py-3 bg-[#1A1A1A] text-white rounded-full font-semibold hover:bg-black transition-all">
                                Get started
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

// Grid Section (Steps)
const FeaturesGrid: React.FC = () => {
    const steps = [
        {
            number: '1',
            title: 'Design Consultation',
            desc: 'We meet to understand your vision and architectural nuances.'
        },
        {
            number: '2',
            title: 'Seamless Integration',
            desc: 'Expert technicians install and configure your smart lighting.'
        },
        {
            number: '3',
            desc: 'Enjoy intuitive control via elegant keypads or your mobile device.',
            title: 'Effortless Control'
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-amber-600 font-semibold mb-4 block uppercase tracking-wider text-sm">Process</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customize your perfect day</h2>
                <p className="text-gray-500 mb-16">Creating the right ambiance has never been easier.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-6xl font-black text-gray-100 mb-6 transition-colors group-hover:text-amber-500/10">{step.number}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="mt-16 px-10 py-4 bg-[#1A1A1A] text-white rounded-full font-semibold hover:bg-black transition-all">
                    View packages
                </button>
            </div>
        </section>
    );
};

// Gallery Strip Section (Brands)
// Gallery Strip Section (Brands Infinite Scroll)
// Gallery Strip Section (Brands Infinite Scroll)
const GallerySection: React.FC = () => {
    const brands = [
        { name: 'Lutron', logo: '/assets/images/lutron_logo.svg', bgColor: 'bg-white' },
        { name: 'Philips Hue', logo: '/assets/images/philips_hue_logo.svg', bgColor: 'bg-white' },
        { name: 'Schneider Electric', logo: '/assets/images/schneider_electric_logo.jpg', bgColor: 'bg-white' },
        { name: 'RTI', logo: '/assets/images/rti_logo.jpg', bgColor: 'bg-white' },
        { name: 'Blacknova', logo: '/assets/images/black_nova_recreated.svg', bgColor: 'bg-black' },
        { name: 'Tyba', logo: '/assets/images/tyba_logo.webp', bgColor: 'bg-black' }
    ];

    return (
        <section className="py-24 bg-[#FCFCF9] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <span className="text-amber-600 font-semibold mb-4 block uppercase tracking-wider text-sm">Our Partners</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Brands We Trust</h2>
                <p className="text-gray-500">We partner with the world's leading lighting innovators to provide the best experience.</p>
            </div>

            <div className="relative w-full overflow-hidden mask-linear-fade">
                {/* Infinite Scroll Container */}
                <div className="flex w-max animate-scroll">
                    {/* First Loop */}
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <div key={i} className={`mx-4 w-[250px] h-[250px] rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${brand.bgColor} flex-shrink-0`}>
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="w-[80%] h-[80%] object-contain transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .mask-linear-fade {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
};

// Main Component
export const LightingProducts: React.FC = () => {
    return (
        <div className="min-h-screen font-sans selection:bg-amber-500 selection:text-white">
            <HeroSection />
            <StatsSection />
            <DetailSection />
            <VideoSection />
            <PackagesSection />
            <FeaturesGrid />
            <GallerySection />

            {/* Added a small bottom spacer for the fixed footer */}
            <div className="h-20" />
        </div>
    );
};
