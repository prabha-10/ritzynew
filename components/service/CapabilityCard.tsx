import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface Feature {
    title: string;
    description: string;
}

interface CapabilityCardProps {
    title: string;
    subtitle: string;
    description: string;
    features: Feature[];
    icon: string;
    image: string;
    index: number;
    isReversed?: boolean;
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
    title,
    subtitle,
    description,
    features,
    icon,
    image,
    index,
    isReversed = false,
}) => {
    const Icon = (Icons as any)[icon] || Icons.Zap;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-24 ${index !== 0 ? 'border-t border-gray-200' : ''
                }`}
        >
            {/* Image */}
            <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group shadow-2xl">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
            </div>

            {/* Content */}
            <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-5 mb-8">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">
                        {subtitle}
                    </p>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {title}
                </h3>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {description}
                </p>

                <div className="space-y-8">
                    {features.map((feature, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="w-2.5 h-2.5 bg-gray-900 rounded-full mt-3 shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
