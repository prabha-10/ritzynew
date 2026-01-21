import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
    headline: string;
    description: string;
    buttonText: string;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
    headline,
    description,
    buttonText,
}) => {
    return (
        <section className="py-24 md:py-32 bg-[#F7F7F7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden"
                >
                    {/* Subtle background pill */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">{headline}</h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            {description}
                        </p>
                        <Link to="/contact">
                            <Button
                                variant="primary"
                                size="lg"
                                className="px-12 py-5 text-lg inline-flex items-center gap-3 group"
                            >
                                {buttonText}
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
