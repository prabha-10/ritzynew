import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Tv, ShieldCheck, Speaker, Building, Droplets, Plus, Minus, Wind, Zap, Film, MessageSquare, ClipboardList, Wrench, Cpu, GraduationCap, Target, Play, TriangleAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { SERVICES, PORTFOLIO_PROJECTS, FAQ_CATEGORIES } from '../constants';
import { ServiceSection } from '../types';
import { getNewServices } from '../lib/content';

// Design System Colors from Haven
const HAVEN_CREAM = '#F7F7F0';
const HAVEN_BLACK = 'rgba(0, 0, 0, 0.9)';

// -- Section Components --

// Hero Section (New Immersive Design)
const HeroSection: React.FC = () => {
  const servicePills = [
    { name: 'Home Automation', link: '/services/home-automation' },
    { name: 'Commercial', link: '/services/commercial' },
    { name: 'Home Theater', link: '/services/home-theater' },
    { name: 'Multi Room AV', link: '/services/multi-room-av' }
  ];

  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/services_hero.png"
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
              <span className="text-white/80 uppercase tracking-widest text-sm font-medium">BEYOND AUTOMATION</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[0.95] mb-8 font-heading">
              ORCHESTRATING <br />
              <span className="text-white/60">YOUR LIFESTYLE</span>
            </h1>

            <p className="max-w-xl text-lg text-white/80 leading-relaxed font-light mb-12">
              Experience the seamless symphony of light, sound, and security.
              Ritzy transforms your estate into a responsive entity that intuitively adapts to your every desire.
            </p>

            {/* Interactive Service Pills */}
            <div className="flex flex-wrap gap-4">
              {servicePills.map((service, i) => (
                <Link to={service.link} key={service.name}>
                  <button
                    className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {service.name}
                  </button>
                </Link>
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
  );
};

// Featured Properties / Solutions Grid (Haven Style)
const SolutionsGrid: React.FC = () => {
  const [services, setServices] = useState<ServiceSection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewServices().then((data) => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="py-32 bg-[#F7F7F0]">
        <Section>
          <div className="text-center">
            <p className="text-smart-muted">Loading solutions...</p>
          </div>
        </Section>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#F7F7F0]">
      <Section>
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-tight tracking-tight text-smart-text mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Discover solutions designed<br />to inspire.
          </motion.h2>
          <p
            className="text-lg text-smart-muted max-w-2xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
          >
            Handpicked services where cutting-edge technology meets elegant design.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || '/assets/images/img_4fbf3280f66f.jpg'}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="text-2xl font-medium text-smart-text group-hover:text-smart-accent transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <ArrowRight size={20} className="text-smart-muted group-hover:text-smart-text group-hover:translate-x-1 transition-all" />
                  </div>
                  <p
                    className="text-smart-muted text-sm leading-relaxed line-clamp-2"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                  >
                    {service.description}
                  </p>

                  {/* Feature Tags - Using offers from the service */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.offers && service.offers.slice(0, 3).map((offer, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-smart-muted bg-gray-100 rounded-full"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {offer.title}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-smart-text text-white hover:bg-gray-800 rounded-full px-10 py-4"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              View All Solutions <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </Section>
    </section>
  );
};


// Details / Craftsmanship Section (Haven Accordion Style)
const DetailsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const details = [
    {
      title: 'Unparalleled Craftsmanship',
      description: 'Every system is designed with meticulous attention to detail, ensuring seamless integration and a flawless user experience.',
      image: '/assets/images/img_b8938e49ff0e.jpg',
    },
    {
      title: 'Personalized Design',
      description: 'We tailor each installation to your unique lifestyle, creating spaces that are truly your own.',
      image: '/assets/images/img_d8c80cf3670c.jpg',
    },
    {
      title: 'Exclusive Technology',
      description: 'Access to the world\'s finest automation brands, curated for performance and aesthetic excellence.',
      image: '/assets/images/img_6ea09ac655b8.jpg',
    },
    {
      title: 'Modern Innovation',
      description: 'Future-proof your home with cutting-edge solutions that evolve with your needs.',
      image: '/assets/images/img_4fac6e45ff2c.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Section>
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-smart-text mb-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            The art of exceptional living<br />begins in the details.
          </motion.h2>
          <p
            className="text-base text-smart-muted max-w-xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
          >
            Discover what makes every Ritzy installation a masterpiece.
          </p>
        </div>

        {/* Accordion + Image Layout - items-center for vertical alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Accordion */}
          <div className="space-y-2">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-b border-gray-200 cursor-pointer transition-all ${activeTab === index ? 'border-smart-text' : 'hover:border-gray-300'}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center justify-between py-4">
                  <h3
                    className={`text-lg font-medium transition-colors ${activeTab === index ? 'text-smart-text' : 'text-smart-muted'}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {detail.title}
                  </h3>
                  {activeTab === index ? (
                    <Minus size={18} className="text-smart-text flex-shrink-0" />
                  ) : (
                    <Plus size={18} className="text-smart-muted flex-shrink-0" />
                  )}
                </div>

                <AnimatePresence>
                  {activeTab === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-smart-muted text-sm leading-relaxed overflow-hidden pb-4"
                      style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                    >
                      {detail.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Image - reduced height with 16/10 aspect ratio */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={details[activeTab].image}
                  alt={details[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </section>
  );
};

// FAQ Section (Haven Style)
const FAQSectionHaven: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  // Flatten all questions
  const allQuestions = FAQ_CATEGORIES.flatMap(cat => cat.questions);

  return (
    <section className="py-32 bg-[#F7F7F0]">
      <Section>
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight tracking-tight text-smart-text mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Frequently asked questions.
          </motion.h2>
          <p
            className="text-lg text-smart-muted max-w-2xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
          >
            Answers to your questions, every step of the way.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-2">
          {allQuestions.slice(0, 6).map((q) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === q.id ? null : q.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className="text-lg font-medium text-smart-text"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {q.question}
                </span>
                {openId === q.id ? (
                  <ChevronUp size={20} className="text-smart-muted shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-smart-muted shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openId === q.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p
                      className="px-6 pb-6 text-sm text-smart-muted leading-relaxed"
                      style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                    >
                      {q.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
};

// CTA Section (Haven Style Footer)
const CTASectionHaven: React.FC = () => {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/img_a151a9e5ca5f.jpg"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-tight tracking-tight text-white mb-8"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Your dream space awaits.
        </motion.h2>
        <p
          className="text-lg text-white/70 max-w-2xl mx-auto mb-12"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
        >
          Whether you're exploring our solutions or envisioning something custom,
          we're here to bring your dream to life.
        </p>
        <Link to="/contact">
          <Button
            size="lg"
            variant="white"
            className="rounded-full px-12 py-5 text-lg"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

// Audio Wave Animation Component
const AudioWave: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  return (
    <div className="flex items-end justify-center gap-1 h-8">
      {[1, 2, 3, 4, 5].map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-white rounded-full"
          animate={isPlaying ? {
            height: [8, 24, 12, 28, 8],
          } : { height: 4 }}
          transition={isPlaying ? {
            duration: 0.8,
            repeat: Infinity,
            delay: bar * 0.1,
            ease: "easeInOut"
          } : { duration: 0.3 }}
        />
      ))}
    </div>
  );
};

// Smart Widgets Section - 4 Interactive Widgets with Photo Backgrounds & Micro-animations
const SmartWidgetsSection: React.FC = () => {
  const [temp, setTemp] = useState(22);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isArmed, setIsArmed] = useState(true);
  const [movieActive, setMovieActive] = useState(false);

  const increaseTemp = () => setTemp(prev => Math.min(prev + 1, 30));
  const decreaseTemp = () => setTemp(prev => Math.max(prev - 1, 16));

  // Dynamic color based on temperature (16-30 range)
  const getTempColor = () => {
    if (temp <= 18) return 'from-blue-600/90 to-cyan-500/90';
    if (temp <= 22) return 'from-cyan-500/90 to-teal-400/90';
    if (temp <= 25) return 'from-orange-400/90 to-amber-500/90';
    return 'from-red-500/90 to-orange-600/90';
  };

  return (
    <section className="py-24 bg-smart-charcoal">
      <Section>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight tracking-tight text-white mb-6"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Experience Smart Living
          </motion.h2>
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
          >
            Interactive control at your fingertips. Try it yourself.
          </p>
        </div>

        {/* Widgets Grid - 4 Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Widget 1: Climate Control - Dynamic Color */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-white rounded-3xl shadow-xl h-[360px] flex flex-col justify-between overflow-hidden group"
          >
            {/* Background Image */}
            <img
              src="/assets/images/img_4fac6e45ff2c.jpg"
              alt="Climate"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dynamic Color Overlay */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${getTempColor()}`}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>Climate Control</h3>
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Wind size={24} />
                </motion.div>
              </div>

              <div className="text-center">
                <motion.div
                  key={temp}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-8xl font-bold tracking-tighter mb-1"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {temp}°
                </motion.div>
                <p className="text-white/80 text-sm">Living Room</p>
              </div>

              <div className="flex items-center justify-center gap-6">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={decreaseTemp}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all flex items-center justify-center font-bold text-2xl border border-white/30"
                >
                  −
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={increaseTemp}
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all flex items-center justify-center font-bold text-2xl border border-white/30"
                >
                  +
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Widget 2: Now Playing - Audio Wave Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative text-white rounded-3xl shadow-xl h-[360px] flex flex-col justify-between overflow-hidden"
          >
            {/* Background Image */}
            <img
              src="/assets/images/img_2557a3195bef.jpg"
              alt="Music"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>Now Playing</h3>
                <Tv size={24} />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                {/* Audio Wave Visualization */}
                <AudioWave isPlaying={isPlaying} />
                <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 mt-6 flex gap-4 items-center">
                  <motion.div
                    animate={isPlaying ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0 flex items-center justify-center"
                  >
                    <Tv size={24} />
                  </motion.div>
                  <div className="overflow-hidden">
                    <p className="font-bold truncate">Jazz Vibes</p>
                    <p className="text-sm text-white/70 truncate">Spotify • Living Room</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex-1 backdrop-blur py-3 rounded-xl font-semibold text-sm transition-all ${isPlaying ? 'bg-white/30' : 'bg-green-500/80'}`}
                >
                  {isPlaying ? '⏸ Pause' : '▶ Resume'}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-white/20 backdrop-blur hover:bg-white/30 transition-all py-3 rounded-xl font-semibold text-sm"
                >
                  ⏹ Stop
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Widget 3: Security Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative text-white rounded-3xl shadow-xl h-[360px] flex flex-col justify-between overflow-hidden"
          >
            {/* Background Image */}
            <img
              src="/assets/images/img_6ea09ac655b8.jpg"
              alt="Security"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 transition-all duration-500 ${isArmed ? 'bg-green-900/70' : 'bg-red-900/80'}`} />

            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>Security</h3>
                <motion.div
                  animate={isArmed ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {isArmed ? <ShieldCheck size={24} /> : <TriangleAlert size={24} className="text-red-400" />}
                </motion.div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={isArmed ? { boxShadow: ['0 0 0 0 rgba(34,197,94,0.4)', '0 0 0 20px rgba(34,197,94,0)', '0 0 0 0 rgba(34,197,94,0.4)'] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center border-4 ${isArmed ? 'bg-green-500/30 border-green-400' : 'bg-red-500/30 border-red-400'}`}
                  >
                    <motion.div
                      animate={{ rotate: isArmed ? 0 : 0 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center ${isArmed ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                      {isArmed ? <ShieldCheck size={32} /> : <TriangleAlert size={32} />}
                    </motion.div>
                  </motion.div>
                  <motion.p
                    key={isArmed ? 'armed' : 'disarmed'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-bold text-xl mb-1"
                  >
                    {isArmed ? 'System Armed' : 'System Disarmed'}
                  </motion.p>
                  <p className={`text-sm ${isArmed ? 'text-green-300' : 'text-red-200'}`}>
                    {isArmed ? '✓ All zones secure' : '⚠ Action Required'}
                  </p>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsArmed(!isArmed)}
                className={`backdrop-blur py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isArmed ? 'bg-white/20 hover:bg-white/30' : 'bg-red-600 hover:bg-red-700 text-white'}`}
              >
                {isArmed ? (
                  <>
                    Disarm System
                  </>
                ) : (
                  <>
                    <TriangleAlert size={18} /> Arm System
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Widget 4: Movie Night Scene */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative text-white rounded-3xl shadow-xl h-[360px] flex flex-col justify-between overflow-hidden"
          >
            {/* Background Image */}
            <img
              src="/assets/images/img_e3ab2c634130.jpg"
              alt="Movie"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              style={{ filter: movieActive ? 'brightness(0.3)' : 'brightness(0.6)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>Movie Night</h3>
                <motion.div
                  animate={movieActive ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <Film size={24} />
                </motion.div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={movieActive ? { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={`w-20 h-20 rounded-full backdrop-blur mx-auto mb-4 flex items-center justify-center transition-all duration-500 ${movieActive ? 'bg-purple-500/50' : 'bg-white/20'}`}
                  >
                    <Film size={36} />
                  </motion.div>
                  <motion.p
                    key={movieActive ? 'active' : 'ready'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-bold text-xl mb-1"
                  >
                    {movieActive ? 'Scene Active' : 'Scene Ready'}
                  </motion.p>
                  <p className="text-white/70 text-sm">
                    {movieActive ? '🎬 Enjoy the show!' : 'Dim lights, close shades, turn on TV'}
                  </p>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setMovieActive(!movieActive)}
                className={`backdrop-blur py-3 rounded-xl font-semibold transition-all ${movieActive ? 'bg-red-500/80 hover:bg-red-600/80' : 'bg-purple-500/80 hover:bg-purple-600/80'}`}
              >
                {movieActive ? '⏹ End Scene' : '▶ Start Movie Scene'}
              </motion.button>
            </div>
          </motion.div>

        </div>
      </Section>
    </section>
  );
};

// Portfolio/Projects Carousel Section (Haven Style - Exact)
const PortfolioSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  // Sample portfolio projects
  const projects = [
    {
      id: 'luxury-villa-automation',
      title: 'Luxury Villa Automation',
      price: 'Premium',
      description: 'Complete smart home integration for a 10,000 sq ft villa with cinema room, wine cellar, and pool automation.',
      image: '/assets/images/img_b8938e49ff0e.jpg',
      stats: { rooms: 24, systems: 8 },
    },
    {
      id: 'modern-penthouse',
      title: 'Modern Penthouse',
      price: 'Executive',
      description: 'Minimalist automation design with hidden speakers, motorized art displays, and panoramic shade control.',
      image: '/assets/images/img_d8c80cf3670c.jpg',
      stats: { rooms: 12, systems: 6 },
    },
    {
      id: 'smart-office-tower',
      price: 'Enterprise',
      title: 'Commercial Office Tower',
      description: 'Enterprise-grade automation for a 15-floor commercial building with conference rooms and digital signage.',
      image: '/assets/images/img_7bff115f22ef.jpg',
      stats: { rooms: 120, systems: 15 },
    },
    {
      id: 'beachfront-retreat',
      title: 'Beachfront Retreat',
      price: 'Luxury',
      description: 'Weather-resistant outdoor automation with landscape lighting, irrigation, and hurricane shutters.',
      image: '/assets/images/img_6ea09ac655b8.jpg',
      stats: { rooms: 8, systems: 5 },
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Get indices for prev, active, next
  const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;

  const getCardStyle = (index: number) => {
    if (index === activeIndex) {
      return { scale: 1, opacity: 1, zIndex: 10 };
    }
    return { scale: 0.85, opacity: 0.5, zIndex: 1 };
  };

  return (
    <section className="py-20 bg-[#F7F7F0] overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-medium leading-tight tracking-tight text-smart-text"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Discover projects<br />designed to inspire.
          </motion.h2>
          <p
            className="text-base text-smart-muted max-w-xs lg:text-right lg:pt-4"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
          >
            Handpicked installations where luxury, design, and technology meet.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient masks for fade effect - wider and stronger */}
        <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-[#F7F7F0] via-[#F7F7F0]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-[#F7F7F0] via-[#F7F7F0]/80 to-transparent z-20 pointer-events-none" />

        {/* Cards Container - items-center for vertical alignment */}
        <div className="flex items-center justify-center gap-6 px-4">
          {/* Previous Card */}
          <motion.div
            key={`prev-${prevIndex}`}
            animate={getCardStyle(prevIndex)}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 w-[280px] lg:w-[320px]"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projects[prevIndex].image}
                  alt={projects[prevIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-smart-muted">{projects[prevIndex].price}</p>
                <p className="text-xs text-smart-muted/60 mt-1">{projects[prevIndex].stats.rooms} rooms</p>
              </div>
            </div>
          </motion.div>

          {/* Active Card (Center) */}
          <motion.div
            key={`active-${activeIndex}`}
            animate={getCardStyle(activeIndex)}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 w-[340px] lg:w-[440px] relative"
          >
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/3 -translate-x-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors z-30 shadow-lg"
            >
              <ChevronUp size={18} className="rotate-[-90deg]" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/3 translate-x-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors z-30 shadow-lg"
            >
              <ChevronUp size={18} className="rotate-90" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                {/* Title + Price Row */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3
                    className="text-xl font-medium text-smart-text"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {projects[activeIndex].title}
                  </h3>
                  <span className="text-lg font-semibold text-smart-text whitespace-nowrap">
                    {projects[activeIndex].price}
                  </span>
                </div>

                {/* Description + Stats Row */}
                <div className="flex items-start justify-between gap-6">
                  <p
                    className="text-sm text-smart-muted leading-relaxed flex-1"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                  >
                    {projects[activeIndex].description}
                  </p>
                  <div className="text-right text-sm text-smart-muted flex-shrink-0">
                    <p>{projects[activeIndex].stats.rooms} rooms</p>
                    <p>{projects[activeIndex].stats.systems} systems</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Card */}
          <motion.div
            key={`next-${nextIndex}`}
            animate={getCardStyle(nextIndex)}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 w-[280px] lg:w-[320px]"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={projects[nextIndex].image}
                  alt={projects[nextIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-smart-muted">{projects[nextIndex].title}</p>
                <p className="text-xs text-smart-muted/60 mt-1">{projects[nextIndex].stats.rooms} rooms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-smart-text' : 'w-4 bg-gray-300'
              }`}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Link to="/portfolio">
          <Button
            size="lg"
            className="bg-smart-text text-white hover:bg-gray-800 rounded-full px-10 py-4"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            View All Projects <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
};


// Differentiation Section
const DifferentiationSection: React.FC = () => {
  return (
    <section className="bg-white py-32 overflow-hidden">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-square"
            >
              <img
                src="/assets/images/img_dc1759ad49a0.jpg"
                alt="Our Comparison"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Floating Stat Check Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-sm hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-smart-accent/20 flex items-center justify-center text-smart-accent font-bold">★</div>
                <h4 className="font-bold">Platinum Integration</h4>
              </div>
              <p className="text-sm text-smart-muted leading-relaxed italic">"Ritzy isn't just an installer; they're our design partners. They solve problems before we even see them."</p>
            </motion.div>
          </div>

          <div>
            <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The Differentiation</span>
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.1] mb-12"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Why Homeowners <br /> Choose Ritzy
            </h2>

            <div className="space-y-12">
              {[
                {
                  title: "vs. DIY Solutions",
                  desc: "Professional design vs. piecemeal gadgets. Unified control vs. a dozen apps. Commercial reliability vs. constant reset cycles."
                },
                {
                  title: "vs. General Electricians",
                  desc: "Specialized expertise in complex logic and aesthetics. Ongoing white-glove relationships vs. one-time utility jobs."
                },
                {
                  title: "vs. Other Premium Installers",
                  desc: "Industry-leading response times, diamond-tier partner certifications, and a design-first philosophy that respects your space."
                }
              ].map((diff, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-smart-accent flex items-center justify-center text-white text-[10px]">✓</span>
                    {diff.title}
                  </h3>
                  <p className="text-smart-muted pl-9 leading-relaxed">{diff.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
};

// Process Section (Your Journey to Smart Living)
const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[#F7F7F0]">
      <Section className="!pt-32 !pb-32 overflow-hidden">
        <div className="text-center mb-20">
          <span className="text-smart-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Transparency Builds Trust</span>
          <h2
            className="text-[clamp(2.5rem,5vw,4rem)] font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Your Journey to Smart Living
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line (Mobile/Tablet) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 hidden lg:block" />

          <div className="space-y-16 relative">
            {[
              {
                step: "01",
                title: "Discovery & Design",
                timing: "2-4 Weeks",
                desc: "Initial consultation, lifestyle interview, and system architecture proposal with visual renderings.",
                icon: <MessageSquare />
              },
              {
                step: "02",
                title: "Planning & Engineering",
                timing: "2-6 Weeks",
                desc: "Detailed blueprints, component selection, and integration planning with your architects.",
                icon: <ClipboardList />
              },
              {
                step: "03",
                title: "Professional Installation",
                timing: "1-4 Weeks",
                desc: "Clean-workspace protocol installations with minimal disruption and daily progress updates.",
                icon: <Wrench />
              },
              {
                step: "04",
                title: "Programming & Testing",
                timing: "1-2 Weeks",
                desc: "Automation scene creation and rigorous stress-testing of every possible scenario.",
                icon: <Cpu />
              },
              {
                step: "05",
                title: "Training & Handoff",
                timing: "1 Week",
                desc: "Comprehensive homeowner training, guest mode walkthrough, and digital user guides.",
                icon: <GraduationCap />
              },
              {
                step: "06",
                title: "Lifetime Support",
                timing: "Ongoing",
                desc: "24/7 technical assistance, annual health checks, and priority software upgrades.",
                icon: <ShieldCheck />
              }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-32`}
              >
                <div className="flex-1 lg:text-right w-full">
                  <div className={i % 2 === 0 ? 'block' : 'lg:hidden'}>
                    <span className="text-[5rem] font-bold text-smart-accent/10 leading-none mb-2 block">{phase.step}</span>
                    <h3 className="text-3xl font-medium mb-2">{phase.title}</h3>
                    <span className="text-sm font-bold text-smart-accent uppercase tracking-widest">{phase.timing}</span>
                  </div>
                </div>

                {/* Center Node */}
                <div className="w-16 h-16 rounded-full bg-white shadow-xl border-4 border-[#F7F7F0] z-10 flex items-center justify-center text-smart-accent lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  {phase.icon}
                </div>

                <div className="flex-1 w-full">
                  <div className={i % 2 !== 0 ? 'block' : 'lg:hidden'}>
                    <span className="text-[5rem] font-bold text-smart-accent/10 leading-none mb-2 block">{phase.step}</span>
                    <h3 className="text-3xl font-medium mb-2">{phase.title}</h3>
                    <span className="text-sm font-bold text-smart-accent uppercase tracking-widest">{phase.timing}</span>
                  </div>
                  <p className="text-smart-muted mt-6 max-w-sm text-lg leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
};

// Main Home Component
export const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <SolutionsGrid />
      <SmartWidgetsSection />
      <ProcessSection />
      <DetailsSection />
      <PortfolioSection />
      <DifferentiationSection />
      <FAQSectionHaven />
      <CTASectionHaven />
    </div>
  );
};
