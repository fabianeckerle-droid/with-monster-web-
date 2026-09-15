import React, { useState, useRef } from 'react';
import { Zap, ShieldCheck, Sparkles, Droplets, ChevronDown, Check, ArrowUpRight, Flame } from 'lucide-react';
import canImage from '../assets/images/monster_ultra_can_1789413014048.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onFeaturesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onFeaturesClick }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'nutrition' | 'ingredients'>('visual');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 overflow-hidden flex flex-col justify-center bg-gradient-to-b from-[#080a0f] via-[#0d1017] to-[#080a0f]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-white/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle ice grid texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Product Value Proposition & Functional Highlights */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top Pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-200">
                Offizielle Produkt-Übersicht
              </span>
              <span className="text-[10px] text-cyan-300 font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/30">
                ZERO ZUCKER
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
                MONSTER ULTRA{' '}
                <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
                  WHITE.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
                Volle energetische Performance mit <strong className="font-semibold text-white">0 Gramm Zucker</strong>, 
                nur <strong className="font-semibold text-white">11 kcal</strong> und dem legendären Erfrischungskick aus spritzigen Zitrusnoten.
              </p>
            </div>

            {/* Quick Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-2 text-cyan-300 mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Zero Zucker</span>
                </div>
                <div className="text-xl font-bold text-white">0g <span className="text-xs text-slate-400 font-normal">Zucker</span></div>
                <p className="text-[11px] text-slate-400 mt-0.5">Kein Insulin-Crash</p>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-2 text-cyan-300 mb-1">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Koffein</span>
                </div>
                <div className="text-xl font-bold text-white">160mg <span className="text-xs text-slate-400 font-normal">/ 500ml</span></div>
                <p className="text-[11px] text-slate-400 mt-0.5">Dual-Focus Blend</p>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-cyan-300 mb-1">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">B-Komplex</span>
                </div>
                <div className="text-xl font-bold text-white">100% <span className="text-xs text-slate-400 font-normal">NRV</span></div>
                <p className="text-[11px] text-slate-400 mt-0.5">B3, B5, B6 & B12</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onFeaturesClick}
                id="hero-features-btn"
                className="px-6 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-slate-100 transition-all shadow-lg hover:shadow-cyan-400/20 active:scale-95 flex items-center gap-2 group cursor-pointer"
              >
                <span>Alle Funktionen erkunden</span>
                <ChevronDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                id="hero-explorer-btn"
                className="px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>3D-Dosen-Explorer</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </button>
            </div>

            {/* Trust & Guarantee indicators */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>100% Recycelbares Aluminium</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>32 mg / 100 ml Koffein</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Taurin & Ginseng Formel</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Product Can Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Can Showcase Box */}
            <div className="relative w-full max-w-[440px] aspect-[3/4] flex items-center justify-center">
              
              {/* Backglow disc */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 via-white/10 to-transparent blur-3xl transition-transform duration-300"
                style={{
                  transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
                }}
              />

              {/* Product Can with 3D tilt effect */}
              <div
                className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg) scale3d(1.02, 1.02, 1.02)`,
                }}
              >
                <img
                  src={canImage}
                  alt="Monster Energy Ultra White Dose 500ml"
                  referrerPolicy="no-referrer"
                  className="max-h-[92%] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-[1.04] select-none pointer-events-none rounded-3xl"
                />

                {/* Floating Hotspot Badge 1: Top Zero Zucker */}
                <div
                  className="absolute top-12 -left-2 sm:left-2 bg-[#121620]/90 backdrop-blur-md border border-cyan-400/40 rounded-2xl p-3 shadow-xl shadow-black/60 hidden sm:flex items-center gap-3 transition-transform duration-300"
                  style={{
                    transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Zero Zucker</div>
                    <div className="text-[11px] text-slate-300">0g Zucker · 11 kcal</div>
                  </div>
                </div>

                {/* Floating Hotspot Badge 2: Right Energy Matrix */}
                <div
                  className="absolute bottom-24 -right-2 sm:right-0 bg-[#121620]/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-xl shadow-black/60 hidden sm:flex items-center gap-3 transition-transform duration-300"
                  style={{
                    transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">160mg Koffein</div>
                    <div className="text-[11px] text-slate-300">Taurin + Ginseng Extrakt</div>
                  </div>
                </div>

                {/* Floating Hotspot Badge 3: Bottom Left Crisp Flavor */}
                <div
                  className="absolute bottom-6 left-0 bg-[#121620]/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-xl shadow-black/60 hidden sm:flex items-center gap-3 transition-transform duration-300"
                  style={{
                    transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                  }}
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Crisp Citrus</div>
                    <div className="text-[11px] text-slate-300">Eisgekühlt bei 3–5 °C</div>
                  </div>
                </div>
              </div>

              {/* View mode toggle below can */}
              <div className="absolute -bottom-6 flex items-center gap-2 bg-[#121620]/80 backdrop-blur-md border border-white/15 rounded-full p-1 shadow-lg z-20">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'visual'
                      ? 'bg-white text-black font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Frontansicht
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'nutrition'
                      ? 'bg-white text-black font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Nährwert-Highlight
                </button>
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeTab === 'ingredients'
                      ? 'bg-white text-black font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Wirkstoffe
                </button>
              </div>

            </div>

            {/* Interactive Tab Info Drawer below Can */}
            <div className="mt-10 w-full max-w-md bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-xs">
              {activeTab === 'visual' && (
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-medium text-white">Haptische Relief-Aludose (500 ml)</span>
                  <span className="text-cyan-300 font-mono">100% Endless Recycling</span>
                </div>
              )}
              {activeTab === 'nutrition' && (
                <div className="grid grid-cols-3 gap-2 text-center text-slate-300">
                  <div className="p-1.5 bg-black/30 rounded-lg">
                    <div className="text-slate-400 text-[10px]">Zucker</div>
                    <div className="font-bold text-white">0,0 g</div>
                  </div>
                  <div className="p-1.5 bg-black/30 rounded-lg">
                    <div className="text-slate-400 text-[10px]">Brennwert</div>
                    <div className="font-bold text-cyan-300">11 kcal</div>
                  </div>
                  <div className="p-1.5 bg-black/30 rounded-lg">
                    <div className="text-slate-400 text-[10px]">B-Vitamine</div>
                    <div className="font-bold text-emerald-300">100% NRV</div>
                  </div>
                </div>
              )}
              {activeTab === 'ingredients' && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>160mg Koffein + 1000mg Taurin + Panax Ginseng</span>
                  <span className="text-amber-300 font-semibold">Aktive Matrix</span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Key Metric Ribbon */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Zuckergehalt</div>
            <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
              0,0 <span className="text-base text-cyan-400 font-sans font-bold">Gramm</span>
            </div>
            <p className="text-xs text-slate-400">Kein Zuckerabsturz nach dem Verzehr</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Koffeingehalt</div>
            <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
              160 <span className="text-base text-cyan-400 font-sans font-bold">mg</span>
            </div>
            <p className="text-xs text-slate-400">32 mg / 100 ml mit Panax Ginseng</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Kalorienbilanz</div>
            <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
              11 <span className="text-base text-cyan-400 font-sans font-bold">kcal</span>
            </div>
            <p className="text-xs text-slate-400">Auf die gesamte 500 ml Dose</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">B-Vitamin-Komplex</div>
            <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
              4-fach <span className="text-base text-emerald-400 font-sans font-bold">NRV</span>
            </div>
            <p className="text-xs text-slate-400">B3, B5, B6 & B12 für Energiestoffwechsel</p>
          </div>
        </div>

      </div>
    </section>
  );
};
