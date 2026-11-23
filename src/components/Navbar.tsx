import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export type ActiveRoute = 'home' | 'services' | 'products' | 'pricing' | 'blog';

interface NavbarProps {
  activeRoute: ActiveRoute;
  onNavigate: (path: string, sectionId?: string) => void;
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeRoute, onNavigate, onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    sectionId?: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-6 lg:px-10">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/', 'top')}
          className="font-display text-2xl font-black tracking-tight text-[#111827] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0056FF]"
        >
          Estudio Coach
        </a>

        {/* Zone 2: Multi-Page Single-Line Navigation Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-semibold text-[#4B5563]"
        >
          <a
            href="/servicios"
            onClick={(e) => handleLinkClick(e, '/servicios')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#111827] ${
              activeRoute === 'services'
                ? 'text-[#0056FF] underline decoration-[#0056FF] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            El Sistema
          </a>

          <a
            href="/productos"
            onClick={(e) => handleLinkClick(e, '/productos')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#111827] ${
              activeRoute === 'products'
                ? 'text-[#0056FF] underline decoration-[#0056FF] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            Productos
          </a>

          <a
            href="/precios"
            onClick={(e) => handleLinkClick(e, '/precios')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#111827] ${
              activeRoute === 'pricing'
                ? 'text-[#0056FF] underline decoration-[#0056FF] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            Precios
          </a>

          <a
            href="/blog"
            onClick={(e) => handleLinkClick(e, '/blog')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#111827] ${
              activeRoute === 'blog'
                ? 'text-[#0056FF] underline decoration-[#0056FF] decoration-2 underline-offset-8'
                : ''
            }`}
          >
            Blog
          </a>
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onApplyClick();
            }}
            className="inline-flex items-center gap-2 bg-[#0056FF] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-colors duration-150 hover:bg-[#0044CC] active:translate-y-px whitespace-nowrap shrink-0 cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056FF]"
          >
            <span>Verificar Disponibilidad</span>
            <ArrowRight className="h-4 w-4 hidden sm:inline" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 border border-neutral-200 rounded-md text-[#111827] hover:bg-neutral-50 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 space-y-3">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/', 'top')}
            className={`block py-2 text-sm font-bold ${
              activeRoute === 'home' ? 'text-[#0056FF]' : 'text-[#111827]'
            }`}
          >
            Inicio
          </a>
          <a
            href="/servicios"
            onClick={(e) => handleLinkClick(e, '/servicios')}
            className={`block py-2 text-sm font-bold ${
              activeRoute === 'services' ? 'text-[#0056FF]' : 'text-[#111827]'
            }`}
          >
            El Sistema
          </a>
          <a
            href="/productos"
            onClick={(e) => handleLinkClick(e, '/productos')}
            className={`block py-2 text-sm font-bold ${
              activeRoute === 'products' ? 'text-[#0056FF]' : 'text-[#111827]'
            }`}
          >
            Productos
          </a>
          <a
            href="/precios"
            onClick={(e) => handleLinkClick(e, '/precios')}
            className={`block py-2 text-sm font-bold ${
              activeRoute === 'pricing' ? 'text-[#0056FF]' : 'text-[#111827]'
            }`}
          >
            Precios
          </a>
          <a
            href="/blog"
            onClick={(e) => handleLinkClick(e, '/blog')}
            className={`block py-2 text-sm font-bold ${
              activeRoute === 'blog' ? 'text-[#0056FF]' : 'text-[#111827]'
            }`}
          >
            Blog
          </a>
        </div>
      )}
    </header>
  );
};
