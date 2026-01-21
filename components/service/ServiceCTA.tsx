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
        <section className="py-24 bg-[#F7F7F7]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center text-white"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">{headline}</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                    <Link to="/contact">
                        <Button
                            variant="primary"
                            size="lg"
                            className="px-10 py-4 text-base inline-flex items-center gap-3 group"
                        >
                            {buttonText}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
