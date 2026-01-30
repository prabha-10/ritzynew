
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { getNewServices } from '../lib/content';
import { ServiceSection } from '../types';
import { ServiceCard } from '../components/home/ServiceCard';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceSection[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case of fetch failure
  const fallbackServices: ServiceSection[] = [
    {
      id: 'home-automation',
      title: 'Home Automation',
      description: 'Smart living solutions for your home.',
      image: '/assets/images/home_automation_banner.webp',
      slug: 'home-automation',
      heading: 'Smart Living',
      offers: [],
      icon: 'Home',
      supportedBrands: []
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Automation for commercial spaces.',
      image: '/assets/images/img_03aeedc2754c.jpg',
      slug: 'commercial',
      heading: 'Commercial Automation',
      offers: [],
      icon: 'Briefcase',
      supportedBrands: []
    }
  ];

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        console.log("Fetching services...");
        const data = await getNewServices();
        console.log("Services loaded:", data);
        if (data && data.length > 0) {
          setServices(data);
        } else {
          console.warn("No services returned, using fallback.");
          setServices(fallbackServices);
        }
      } catch (error) {
        console.error("Error loading services:", error);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Map service IDs to generated visual assets
  const getServiceImage = (id: string, defaultImage: string) => {
    const assetMap: Record<string, string> = {
      'home-automation': '/assets/images/home_automation_banner.webp',
      'commercial': '/assets/images/service_commercial_automation.webp',
      'home-theater': '/assets/images/service_home_theatre.webp',
      'security': '/assets/images/service_security.webp',
      'multi-room-av': '/assets/images/service_multi_room_av.webp',
      'living-room': '/assets/images/service_living_room.webp',
    };
    return assetMap[id] || defaultImage || '/assets/images/img_4fbf3280f66f.jpg';
  };

  if (loading) {
    return (
      <div className="bg-[#111111] min-h-screen flex items-center justify-center">
        <p className="text-white/60 font-light">Loading Experience...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Immersive Hero Section */}
      <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/services_hero_v2.png"
            alt="Futuristic Living Space"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white/80 uppercase tracking-widest text-sm font-medium">Smart Home Experience</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] mb-8 font-heading">
                THE NEW STANDARD <br />
                <span className="text-white/60">OF LUXURY LIVING</span>
              </h1>

              <p className="max-w-xl text-lg text-white/80 leading-relaxed font-light mb-12">
                Transform your space into an intelligent environment that anticipates your needs.
                Seamlessly integrated technology for the modern estate.
              </p>

              {/* Interactive Room Pills */}
              <div className="flex flex-wrap gap-4">
                {['Lounge', 'Bedroom', 'Kitchen', 'Terrace'].map((room, i) => (
                  <button
                    key={room}
                    className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {room}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Product Highlight (Decorative) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:block"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl w-64 flex items-center gap-4">
            <div className="w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center text-white">
              <Play size={20} fill="white" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Concept Tour</p>
              <p className="text-white/60 text-xs">Watch the film</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Intro Text */}
      <Section className="py-24 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <h2 className="text-4xl md:text-5xl font-medium text-smart-dark max-w-2xl leading-tight font-heading">
            Intelligent automation and <br /> premium security.
          </h2>
          <Link to="/contact" className="hidden md:flex items-center gap-2 text-smart-dark font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity">
            See All Capabilities <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="!pt-0 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              image={getServiceImage(service.id, service.image)}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Feature Section - "How it works" Style */}
      <section className="bg-smart-bg py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-smart-accent font-medium uppercase tracking-wider text-sm mb-4 block">Seamless Integration</span>
              <h3 className="text-4xl md:text-5xl font-medium text-smart-dark mb-6 font-heading">
                Experience True<br />Home Automation
              </h3>
              <p className="text-smart-muted text-lg leading-relaxed mb-8 max-w-md">
                Unify all your home's systems into one intuitive interface.
                From lighting and climate to security and entertainment, control your entire estate with a single touch.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-smart-accent transition-colors">
                Discover Possibilities
              </button>
            </div>

            <div className="order-1 lg:order-2 relative group cursor-pointer">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 relative">
                <img
                  src="/assets/images/img_a151a9e5ca5f.jpg"
                  alt="Home Automation Feature"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play size={32} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
