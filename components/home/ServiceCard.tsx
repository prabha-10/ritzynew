import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group"
        >
            <Link to={`/services/${id}`} className="block relative h-[500px] w-full rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-3xl font-medium text-white mb-3 tracking-tight font-heading">
                            {title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-[90%] font-sans font-light">
                            {description}
                        </p>

                        {/* Explore Button */}
                        <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:bg-smart-accent hover:text-white group-hover:gap-3">
                            Explore Now
                            <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
