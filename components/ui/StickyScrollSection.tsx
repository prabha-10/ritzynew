import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-[#F5F5F0]">
            {/* Section Header */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 text-center">
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

            {/* Stacked Cards Container */}
            <div ref={containerRef} className="relative w-[75%] mx-auto pb-[50vh]">
                {items.map((item, index) => (
                    <StackedCard
                        key={item.id}
                        item={item}
                        index={index}
                        totalItems={items.length}
                        isLast={index === items.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

const StackedCard: React.FC<{
    item: ScrollItem;
    index: number;
    totalItems: number;
    isLast: boolean;
}> = ({ item, index, totalItems, isLast }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const Icon = (Icons as any)[item.icon] || Icons.Zap;

    // Alternate background colors
    const isDark = index % 2 === 1;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"]
    });

    // Scale down slightly as it becomes the "background" card
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, y }}
            className={`sticky top-[calc(50vh-250px)] mb-8 rounded-3xl overflow-hidden shadow-2xl ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'
                }`}
        >
            <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-2/5 p-6 lg:p-8">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className={`w-full lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center ${isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                            }`}>
                            {item.subtitle}
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700'
                            }`}>
                            Smart Home
                        </span>
                    </div>

                    {/* Quote/Features Section */}
                    <div className={`border-l-2 pl-6 ${isDark ? 'border-gray-700' : 'border-gray-200'
                        }`}>
                        <div className={`text-4xl font-serif mb-3 ${isDark ? 'text-gray-500' : 'text-gray-300'
                            }`}>"</div>
                        <div className="space-y-4">
                            {item.features.map((feature, i) => (
                                <div key={i}>
                                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <strong className={isDark ? 'text-white' : 'text-gray-900'}>
                                            {feature.title}:
                                        </strong>{' '}
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Author/Brand Attribution */}
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white/20' : 'bg-gray-100'
                                    }`}>
                                    <Icon className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-700'}`} />
                                </div>
                                <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                    Ritzy Lifestyle
                                </span>
                            </div>
                            <Link
                                to={item.id === 'lighting' ? '/products/lighting' : `/products#${item.id}`}
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${isDark
                                    ? 'bg-white text-gray-900 hover:bg-gray-200'
                                    : 'bg-gray-900 text-white hover:bg-gray-700'
                                    }`}
                            >
                                View Products
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
