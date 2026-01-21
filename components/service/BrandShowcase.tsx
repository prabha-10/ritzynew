import React from 'react';
import { motion } from 'framer-motion';

interface BrandCategory {
    category: string;
    brands: string[];
}

interface BrandShowcaseProps {
    categories: BrandCategory[];
    title?: string;
    subtitle?: string;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({
    categories,
    title = 'Powered by World-Class Technology',
    subtitle = 'Reliability is our priority. We partner exclusively with heritage brands and innovators.',
}) => {
    return (
        <section className="py-24 md:py-32 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-bold">
                        Our Partners
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
                </motion.div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="text-left py-6 px-8 text-sm uppercase tracking-wider text-gray-500 font-bold w-1/3">
                                    Category
                                </th>
                                <th className="text-left py-6 px-8 text-sm uppercase tracking-wider text-gray-500 font-bold">
                                    Premium Partners
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                                >
                                    <td className="py-5 px-6 font-semibold text-white">
                                        {category.category}
                                    </td>
                                    <td className="py-5 px-6">
                                        <div className="flex flex-wrap gap-3">
                                            {category.brands.map((brand, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-1.5 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                                                >
                                                    {brand}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
