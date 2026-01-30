
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Blinds, LayoutGrid, Thermometer, Tv, Flower2, Sun } from 'lucide-react';

// Product categories matching the Home Automation capabilities
const productCategories = [
  {
    id: 'lighting',
    title: 'Lighting',
    description: 'Transform your home\'s atmosphere with intelligent lighting. Scene setting, circadian rhythm support, and energy efficiency.',
    image: '/assets/images/home_automation_lighting.webp',
    icon: Lightbulb,
    link: '/products/lighting',
  },
  {
    id: 'curtains',
    title: 'Curtains & Shading',
    description: 'Automated window treatments that provide convenience, privacy, and energy efficiency with sunlight harvesting.',
    image: '/assets/images/home_automation_curtain.webp',
    icon: Blinds,
    link: '/products/curtains',
  },
  {
    id: 'keypads',
    title: 'Keypad Automation',
    description: 'Replace wall clutter with sophisticated, architectural keypads with designer finishes and custom engraving.',
    image: '/assets/images/home_automation_keypads.webp',
    icon: LayoutGrid,
    link: '/products/keypads',
  },
  {
    id: 'climate',
    title: 'Climate Control',
    description: 'Maintain the ideal temperature and humidity in every room with smart scheduling and zoned comfort.',
    image: '/assets/images/home_automation_climate_control.webp',
    icon: Thermometer,
    link: '/products/climate',
  },
  {
    id: 'devices',
    title: 'Devices (Fan, TV, Geyser)',
    description: 'Seamlessly integrate everyday appliances into your smart home ecosystem with unified control.',
    image: '/assets/images/home_automation_devices.webp',
    icon: Tv,
    link: '/products/devices',
  },
  {
    id: 'garden',
    title: 'Garden Automation',
    description: 'Keep your outdoor spaces lush and inviting with smart irrigation and landscape lighting.',
    image: '/assets/images/home_automation_outdoor_garden.webp',
    icon: Flower2,
    link: '/products/garden',
  },
  {
    id: 'outdoor',
    title: 'Outdoor Automation',
    description: 'Extend your entertainment experience to the patio and pool with outdoor media and pool control.',
    image: '/assets/images/home_automation_outdoor_motorized_gate.webp',
    icon: Sun,
    link: '/products/outdoor',
  },
];

export const Products: React.FC = () => {
  return (
    <div className="bg-[#F7F7F0] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/assets/images/home_automation_lighting.webp"
            alt="Product Ecosystem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        </div>

        <Section className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-tight tracking-tight text-white mb-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Product Ecosystem
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/90"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
            >
              Premium hardware and integrated solutions from the world's leading technology partners.
            </motion.p>
          </div>
        </Section>
      </section>

      {/* Section Header */}
      <Section className="!py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-4 block">
            Explore Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Home Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive range of automation products designed to transform your living space.
          </p>
        </motion.div>
      </Section>

      {/* Product Categories Grid */}
      <Section className="!pt-0 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={category.link}
                className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <category.icon className="w-6 h-6 text-gray-800" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {category.title}
                    </h3>
                    <ArrowRight
                      size={20}
                      className="text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all mt-1"
                    />
                  </div>

                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                  >
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
                      Explore Products
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
