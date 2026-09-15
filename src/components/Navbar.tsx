import React, { useState, useEffect } from 'react';
import { Zap, Sparkles, ChevronRight, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onExploreClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Produktfunktionen', href: '#funktionen' },
    { label: 'Dosen-Explorer', href: '#explorer' },
    { label: 'Wirkstoffe', href: '#wirkstoffe' },
    { label: 'Nährwerte & Vergleich', href: '#naehrwerte' },
    { label: 'Geschmacksprofil', href: '#geschmack' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090b10]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            {/* Custom stylized Claw mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/20 via-white/10 to-transparent border border-white/20 flex items-center justify-center p-2 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400/50 transition-colors">
              <span className="font-extrabold tracking-tighter text-xl text-white font-mono flex items-center">
                M<span className="text-cyan-400 text-xs ml-0.5 font-sans font-bold">⚡</span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-base uppercase text-white font-sans">
                  MONSTER
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-semibold tracking-wide uppercase">
                  Ultra
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                White Zero Zucker
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors whitespace-nowrap font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.03]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>0g Zucker · 160mg Koffein</span>
            </div>
            <button
              onClick={onExploreClick}
              id="nav-cta-btn"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-white via-slate-100 to-cyan-300 hover:to-cyan-200 rounded-full transition-all shadow-md hover:shadow-cyan-400/20 active:scale-95 flex items-center gap-1.5"
            >
              <span>Dose Erkunden</span>
              <ChevronRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Menü öffnen"
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e121a]/95 border-b border-white/10 backdrop-blur-xl px-4 py-4 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreClick();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-white to-cyan-300 rounded-xl font-sans"
            >
              Dose im 3D-Modus erkunden
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
