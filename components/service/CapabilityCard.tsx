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
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 ${index !== 0 ? 'border-t border-gray-200' : ''
                }`}
        >
            {/* Image */}
            <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
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
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                        {subtitle}
                    </p>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {description}
                </p>

                <div className="space-y-6">
                    {features.map((feature, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-2 h-2 bg-gray-900 rounded-full mt-2.5 shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                <p className="text-gray-600 leading-relaxed">
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
