import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Palette, Shield } from 'lucide-react';

interface WhyPoint {
    title: string;
    description: string;
}

interface HowStep {
    step: number;
    title: string;
    description: string;
}

interface EducationalSectionProps {
    what: {
        title: string;
        content: string;
    };
    why: {
        title: string;
        intro: string;
        points: WhyPoint[];
    };
    how: {
        title: string;
        intro: string;
        steps: HowStep[];
    };
}

const whyIcons = [Sparkles, Zap, Palette, Shield];

export const EducationalSection: React.FC<EducationalSectionProps> = ({
    what,
    why,
    how,
}) => {
    return (
        <section className="py-24 bg-[#F7F7F7]">
            <div className="max-w-6xl mx-auto px-6">
                {/* What Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">
                        Understanding
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        {what.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                        {what.content}
                    </p>
                </motion.div>

                {/* Why Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-24"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">
                        Benefits
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {why.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">{why.intro}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {why.points.map((point, index) => {
                            const Icon = whyIcons[index % whyIcons.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-5">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {point.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* How Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">
                        The Process
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {how.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">{how.intro}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {how.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="text-7xl font-bold text-gray-100 absolute -top-4 -left-2">
                                    {step.step}
                                </div>
                                <div className="relative pt-12 pl-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
