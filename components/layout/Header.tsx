import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronRight, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../ui/Button';
import { getNewServices } from '../../lib/content';
import { ServiceSection } from '../../types';
import { AnimatePresence, motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [services, setServices] = useState<ServiceSection[]>([]);
  const [activeService, setActiveService] = useState<ServiceSection | null>(null);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Fetch Mega Menu Data
    getNewServices().then(data => {
      setServices(data);
      if (data.length > 0) setActiveService(data[0]);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsProductsHovered(false);
  }, [location]);

  // Pages with light backgrounds that need dark header text
  const isLightPage = location.pathname === '/contact';

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsProductsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductsHovered(false);
    }, 200); // Small delay to prevent flickering
  };

  const handleServiceHover = (service: ServiceSection) => {
    setActiveService(service);
  };

  // Helper to extract brands - prioritize supportedBrands, fallback to offer brands
  const getBrands = (service: ServiceSection) => {
    if (service.supportedBrands && service.supportedBrands.length > 0) {
      return service.supportedBrands;
    }
    // Fallback: collect unique brands from offers
    if (service.offers) {
      const allBrands = service.offers.flatMap(o => o.brands || []);
      return Array.from(new Set(allBrands));
    }
    return [];
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isProductsHovered || isLightPage
        ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-100'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group relative z-50">
          <div className="w-16 h-16 relative">
            <img
              src="/logo.png"
              alt="Ritzy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center rounded-full px-2 py-1 transition-all duration-300 ${isScrolled || isProductsHovered || isLightPage ? 'bg-transparent border-none' : 'bg-transparent backdrop-blur-xl border border-black/5 shadow-sm'
          }`}>
          <div className="flex items-center gap-1 px-4 py-2.5 relative">
            {NAV_ITEMS.map((item) => {
              if (item.label === 'Products') {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        `px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer ${isActive || isProductsHovered
                          ? 'bg-gray-100 text-smart-dark'
                          : `${isScrolled || isLightPage ? 'text-smart-dark' : 'text-white'} hover:bg-white/10 hover:text-smart-dark`
                        }`
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`}
                      />
                    </NavLink>
                  </div>
                );
              }
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                      ? 'bg-white text-smart-dark shadow-md'
                      : `${isScrolled || isProductsHovered || isLightPage ? 'text-smart-dark' : 'text-white'} hover:bg-white/10`
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4 relative z-50">
          <div className={`flex items-center gap-4 ${isScrolled || isProductsHovered || isLightPage ? 'text-smart-text' : 'text-white'}`}>
            <Search size={20} className="cursor-pointer hover:text-smart-accent transition-colors" />
          </div>
          <Link to="/contact">
            <Button variant="primary" size="sm" className="shadow-none">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden relative z-50 ${isScrolled ? 'text-smart-text' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MEGA MENU DROPDOWN - Centered on Page/Header Container */}
        <AnimatePresence>
          {isProductsHovered && services.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full left-0 w-full pt-4 z-40"
            // Removed specific width constraints to let it fill the 1440px container
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-smart-text p-8 mx-4 md:mx-0">

                {/* 1. Services Row (Tabs) */}
                <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 border-b border-gray-100 no-scrollbar">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onMouseEnter={() => handleServiceHover(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeService?.id === service.id
                        ? 'bg-smart-accent text-white shadow-md'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>

                {/* 2. Content Area (Products & Brands) */}
                {activeService && (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-left"
                  >
                    {/* Left: Service Info & Link */}
                    <div className="lg:col-span-1 pr-6 border-r border-gray-100">
                      <h3 className="text-2xl font-bold mb-2">{activeService.title}</h3>
                      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        {activeService.description}
                      </p>
                      <Link
                        to={`/services/${activeService.id}`}
                        onClick={() => setIsProductsHovered(false)}
                      >
                        <Button size="sm" variant="outline" className="w-full justify-between group">
                          Explore Service <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Right: Products & Brands */}
                    <div className="lg:col-span-3">
                      {/* Products Grid */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Products & Categories</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {activeService.offers?.map((offer, i) => (
                            <div
                              key={i}
                              className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
                            >
                              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                                <img
                                  src={offer.image || activeService.image}
                                  alt={offer.title}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <span className="font-medium text-sm text-gray-800">{offer.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Brands Row */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Supported Brands</h4>
                        <div className="flex flex-wrap gap-3">
                          {getBrands(activeService).map((brand, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 rounded text-xs font-medium text-gray-600 uppercase"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 pt-32 px-8 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-3xl font-bold tracking-tight ${isActive ? 'text-smart-accent' : 'text-smart-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="mt-8">
            <Button variant="primary" className="w-full">
              Get Quote
            </Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};