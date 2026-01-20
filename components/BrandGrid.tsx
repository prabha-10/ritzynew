import React from 'react';
import { motion } from 'framer-motion';
import { Brand } from '../../types';

interface BrandGridProps {
    brands: Brand[];
    title?: string;
    className?: string;
}

export const BrandGrid: React.FC<BrandGridProps> = ({
    brands,
    title = "Our Partners",
    className = ""
}) => {
    if (brands.length === 0) return null;

    return (
        <div className={`space-y-8 ${className}`}>
            {title && (
                <h3 className="text-2xl font-bold text-smart-text text-center md:text-left">
                    {title}
                </h3>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                {brands.map((brand, index) => (
                    <motion.div
                        key={brand.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full h-24 p-4 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center bg-white/50 rounded-xl hover:bg-white hover:shadow-lg"
                        title={brand.name}
                    >
                        {/* Fallback to text if logo is missing or error */}
                        {brand.logo ? (
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                loading="lazy"
                                decoding="async"
                                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.parentElement!.innerText = brand.name;
                                }}
                            />
                        ) : (
                            <span className="font-bold text-gray-400">{brand.name}</span>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
