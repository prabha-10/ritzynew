import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import * as Icons from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface ScrollItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: Feature[];
    icon: string;
    image: string;
}

interface StickyScrollSectionProps {
    items: ScrollItem[];
    title?: string;
    description?: string;
}

export const StickyScrollSection: React.FC<StickyScrollSectionProps> = ({
    items,
    title = "Our Capabilities",
    description = "Experience total control across every dimension of your smart home.",
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">
                        Our Expertise
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">{title}</h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        {description}
                    </p>
                </motion.div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                {/* Sticky Image Section (Left) */}
                <div className="hidden lg:block w-1/2 relative">
                    <div className="sticky top-0 h-screen flex items-center justify-center">
                        <div className="w-full h-[550px] relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                                    {/* Text Overlay on Image */}
                                    <div className="absolute bottom-10 left-10 right-10 text-white">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl">
                                                {React.createElement((Icons as any)[item.icon] || Icons.Zap, { className: "w-6 h-6 text-white" })}
                                            </div>
                                            <span className="text-sm uppercase tracking-widest font-bold">{item.subtitle}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Section (Right) */}
                <div className="w-full lg:w-1/2 flex flex-col snap-y snap-mandatory">
                    {items.map((item, index) => (
                        <ContentBlock
                            key={item.id}
                            item={item}
                            index={index}
                            setActiveIndex={setActiveIndex}
                            isActive={activeIndex === index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContentBlock: React.FC<{
    item: ScrollItem;
    index: number;
    setActiveIndex: (index: number) => void;
    isActive: boolean;
}> = ({ item, index, setActiveIndex, isActive }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    const Icon = (Icons as any)[item.icon] || Icons.Zap;

    return (
        <div
            ref={ref}
            className="h-screen flex flex-col justify-center p-8 snap-center"
        >
            <motion.div
                animate={{
                    opacity: isActive ? 1 : 0.1, // Fade out inactive items significantly
                    filter: isActive ? "blur(0px)" : "blur(4px)", // Blur inactive items
                    y: isActive ? 0 : 20
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Mobile Image (Visible only on small screens) */}
                <div className="lg:hidden mb-8 rounded-3xl overflow-hidden aspect-video shadow-lg">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex items-center gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-colors duration-500 ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-400'}`}>
                        <Icon className="w-7 h-7" />
                    </div>
                    <span className="lg:hidden text-sm uppercase tracking-widest text-gray-500 font-bold">
                        {item.subtitle}
                    </span>
                </div>

                <h3 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-300'}`}>
                    {item.title}
                </h3>

                <p className={`text-xl mb-8 leading-relaxed font-light transition-colors duration-500 ${isActive ? 'text-gray-600' : 'text-gray-200'}`}>
                    {item.description}
                </p>

                <div className={`space-y-6 pl-4 border-l-2 transition-colors duration-500 ${isActive ? 'border-gray-100' : 'border-transparent'}`}>
                    {item.features.map((feature, i) => (
                        <div key={i}>
                            <h4 className={`text-lg font-bold mb-1 transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-300'}`}>{feature.title}</h4>
                            <p className={`text-lg leading-relaxed transition-colors duration-500 ${isActive ? 'text-gray-500' : 'text-gray-200'}`}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
