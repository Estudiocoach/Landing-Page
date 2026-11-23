import { useEffect, useRef, useState } from 'react';
import { ActiveRoute, Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContrastSection } from './components/ContrastSection';
import { ClientSpotlightSection } from './components/ClientSpotlightSection';
import { TechPlatformSection } from './components/TechPlatformSection';
import { ServicesSection } from './components/ServicesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ProductsPage } from './components/ProductsPage';
import { AgencyServicesSection } from './components/AgencyServicesSection';
import { PricingPage } from './components/PricingPage';
import { BlogPage } from './components/BlogPage';
import { ConversionSection } from './components/ConversionSection';
import { Footer } from './components/Footer';

function getRouteFromPath(pathname: string): ActiveRoute {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (normalized === '/servicios' || normalized === '/servicios-de-la-agencia') return 'services';
  if (normalized === '/productos') return 'products';
  if (normalized === '/precios') return 'pricing';
  if (normalized === '/blog') return 'blog';
  return 'home';
}

interface AppProps {
  onLoginClick?: () => void;
}

export default function App({ onLoginClick }: AppProps = {}) {
  const [activeRoute, setActiveRoute] = useState<ActiveRoute>(() =>
    getRouteFromPath(window.location.pathname)
  );
  const [prefilledZone, setPrefilledZone] = useState<string>('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setActiveRoute(getRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToApply = () => {
    const section = document.getElementById('aplicar');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        nameInputRef.current?.focus({ preventScroll: true });
      }, 350);
    }
  };

  const handleNavigate = (path: string, sectionId?: string) => {
    const nextRoute = getRouteFromPath(path);
    const targetUrl =
      sectionId && sectionId !== 'top' ? `${path === '/' ? '' : path}#${sectionId}` : path;

    if (window.location.pathname + window.location.hash !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }

    setActiveRoute(nextRoute);

    window.setTimeout(() => {
      if (sectionId && sectionId !== 'top') {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 30);
  };

  const handleVerifyZone = (zone: string) => {
    if (zone) {
      setPrefilledZone(zone);
    }
    scrollToApply();
  };

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar
        activeRoute={activeRoute}
        onNavigate={handleNavigate}
        onApplyClick={scrollToApply}
      />

      <main>
        {activeRoute === 'home' && (
          <>
            <HeroSection onApplyClick={scrollToApply} />
            <ContrastSection />
            <ClientSpotlightSection onAuditClick={scrollToApply} />
            <TechPlatformSection />
            <ServicesSection />
            <SocialProofSection />
            <ConversionSection
              nameInputRef={nameInputRef}
              prefilledZone={prefilledZone}
            />
          </>
        )}

        {activeRoute === 'services' && (
          <>
            <AgencyServicesSection onApplyClick={scrollToApply} />
            <ConversionSection
              nameInputRef={nameInputRef}
              prefilledZone={prefilledZone}
            />
          </>
        )}

        {activeRoute === 'products' && (
          <>
            <ProductsPage />
            <ConversionSection
              nameInputRef={nameInputRef}
              prefilledZone={prefilledZone}
            />
          </>
        )}

        {activeRoute === 'pricing' && <PricingPage />}

        {activeRoute === 'blog' && (
          <>
            <BlogPage onApplyClick={scrollToApply} />
            <ConversionSection
              nameInputRef={nameInputRef}
              prefilledZone={prefilledZone}
            />
          </>
        )}
      </main>

      <Footer onLoginClick={onLoginClick} />
    </div>
  );
}
