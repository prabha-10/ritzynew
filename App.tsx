import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetailNew } from './pages/ServiceDetailNew';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { PortfolioDetail } from './pages/PortfolioDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { Admin } from './pages/Admin';
import { LightingProducts } from './pages/LightingProducts';
import { ChatWidget } from './components/chat/ChatWidget';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Don't scroll to top if there's a hash (anchor link)
    if (hash && hash !== '') return;

    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Stage 1: Immediate reset
    resetScroll();

    // Stage 2: Next frame reset
    const rafId = requestAnimationFrame(resetScroll);

    // Stage 3: Multiple timed resets to catch layout shifts and Lenis inertia
    const timerIds = [10, 50, 100, 300, 600, 1000].map(delay =>
      setTimeout(resetScroll, delay)
    );

    return () => {
      cancelAnimationFrame(rafId);
      timerIds.forEach(clearTimeout);
    };
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Admin page without header/footer */}
        <Route path="/admin" element={<Admin />} />

        {/* Regular pages with header/footer */}
        <Route path="*" element={
          <div className="flex flex-col min-h-screen bg-smart-bg text-smart-text selection:bg-smart-accent selection:text-white font-sans">
            <Header />
            <ChatWidget />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetailNew />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/lighting" element={<LightingProducts />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;