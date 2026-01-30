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

  // Pages that should have white text when transparent at top
  const isDarkHeroPage = location.pathname === '/';
  const isLightBg = !isDarkHeroPage;

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

  const getBrands = (service: ServiceSection) => {
    if (service.supportedBrands && service.supportedBrands.length > 0) {
      return service.supportedBrands;
    }
    if (service.offers) {
      const allBrands = service.offers.flatMap(o => o.brands || []);
      return Array.from(new Set(allBrands));
    }
    return [];
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || isProductsHovered
        ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-100'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
        <NavLink to="/" className="flex items-center group relative z-50">
          <div className="w-16 h-16 relative">
            <img
              src="/logo.png"
              alt="Ritzy Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </NavLink>

        <nav className={`hidden md:flex items-center rounded-full px-2 py-1 transition-all duration-300 ${isScrolled || isProductsHovered ? 'bg-transparent border-none' : `bg-transparent backdrop-blur-xl border ${isLightBg ? 'border-black/10' : 'border-black/5'} shadow-sm`
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
                          : `${isScrolled || isLightBg ? 'text-smart-dark' : 'text-white'} hover:bg-black/5 hover:text-smart-dark`
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
                      ? 'bg-white text-smart-dark shadow-md border border-gray-100'
                      : `${isScrolled || isProductsHovered || isLightBg ? 'text-smart-dark' : 'text-white'} hover:bg-black/5`
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-4 relative z-50">
          <div className={`flex items-center gap-4 ${isScrolled || isProductsHovered || isLightBg ? 'text-smart-dark' : 'text-white'}`}>
            <Search size={20} className="cursor-pointer hover:text-smart-accent transition-colors" />
          </div>
          <Link to="/contact">
            <Button variant="primary" size="sm" className="shadow-none">
              Get Quote
            </Button>
          </Link>
        </div>

        <button
          className={`md:hidden relative z-50 ${isScrolled || isLightBg ? 'text-smart-dark' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

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
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden text-smart-text p-6 mx-4 md:mx-0">
                <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 border-b border-gray-100 no-scrollbar">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onMouseEnter={() => handleServiceHover(service)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap ${activeService?.id === service.id
                        ? 'bg-smart-accent text-white shadow-md'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>

                {activeService && (
                  <motion.div
                    key={activeService.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-left"
                  >
                    <div className="lg:col-span-1 pr-4 border-r border-gray-100">
                      <h3 className="text-xl font-bold mb-1">{activeService.title}</h3>
                      <p className="text-xs text-gray-500 mb-4 leading-relaxed line-clamp-3">
                        {activeService.description}
                      </p>
                      <Link
                        to={`/services/${activeService.id}`}
                        onClick={() => setIsProductsHovered(false)}
                      >
                        <Button size="sm" variant="outline" className="w-full justify-between group py-1 h-9">
                          Explore Service <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    <div className="lg:col-span-3">
                      {/* Products Grid */}
                      <div className="mb-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Products & Categories</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {activeService.offers?.map((offer: any, i: number) => (
                            <Link
                              key={i}
                              to={offer.link || (offer.id === 'lighting' ? '/products/lighting' : `/products#${offer.id || ''}`)}
                              onClick={() => setIsProductsHovered(false)}
                              className="group flex flex-col gap-1.5 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                                <img
                                  src={offer.image || activeService.image}
                                  alt={offer.title}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <span className="font-medium text-[12px] text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-1 text-center">{offer.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Supported Brands</h4>
                        <div className="flex flex-wrap gap-3">
                          {getBrands(activeService).map((brand, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-medium text-gray-600 uppercase"
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
                `text-3xl font-bold tracking-tight ${isActive ? 'text-smart-accent' : 'text-smart-text'}`
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