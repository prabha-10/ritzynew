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
        <section className="py-32 bg-[#F7F7F7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* What Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    <div className="lg:col-span-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">
                            Understanding
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            {what.title}
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                            {what.content}
                        </p>
                    </div>
                </motion.div>

                {/* Why Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-32"
                >
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">
                            Benefits
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {why.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                            {why.intro}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {why.points.map((point, index) => {
                            const Icon = whyIcons[index % whyIcons.length];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-10 lg:p-12 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group"
                                >
                                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {point.title}
                                    </h3>
                                    <p className="text-xl text-gray-600 leading-relaxed">
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
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">
                            The Process
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {how.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl">{how.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
                        {how.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="text-8xl font-bold text-gray-100 absolute -top-10 -left-6 z-0">
                                    {step.step}
                                </div>
                                <div className="relative z-10 pt-8 pl-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-gray-600 leading-relaxed">
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
