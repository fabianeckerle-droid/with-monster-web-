import React, { useState } from 'react';
import { CAN_HOTSPOTS } from '../data/productData';
import { Hotspot } from '../types';
import { Sparkles, ShieldCheck, Flame, Fingerprint, Zap, ChevronRight, Eye } from 'lucide-react';
import canImage from '../assets/images/monster_ultra_can_1789413014048.jpg';

export const CanExplorer: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(CAN_HOTSPOTS[2]); // Default to Claw Emblem

  const getHotspotIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Fingerprint':
        return <Fingerprint className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="explorer" className="py-24 bg-[#0c0f17] border-y border-white/10 relative text-left">
      {/* Subtle light accents */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interaktive Dosen-Inspektion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Entdecke die Dose im{' '}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Detail-Explorer
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 font-light leading-relaxed">
            Klicke auf die interaktiven Prüfpunkte auf der Dose, um zu erfahren, wie Material, 
            Relief-Oberfläche und Rezeptur perfekt ineinandergreifen.
          </p>
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Hotspot Selector Menu */}
          <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 px-2">
              Wähle einen Bereich zur Prüfung:
            </div>
            {CAN_HOTSPOTS.map((hotspot) => {
              const isSelected = selectedHotspot.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  onClick={() => setSelectedHotspot(hotspot)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border flex items-start justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#181e2b] border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-cyan-400 text-black font-bold'
                          : 'bg-white/10 text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {getHotspotIcon(hotspot.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`}>
                          {hotspot.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mt-0.5 group-hover:text-cyan-200 transition-colors">
                        {hotspot.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1 font-light">
                        {hotspot.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Center Column: Can Image with Hotspots */}
          <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[380px] aspect-[3/4] flex items-center justify-center p-4">
              
              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl" />

              {/* Product Can */}
              <img
                src={canImage}
                alt="Monster Ultra White Dose"
                referrerPolicy="no-referrer"
                className="max-h-[92%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] rounded-3xl"
              />

              {/* Hotspot Pins */}
              {CAN_HOTSPOTS.map((hotspot) => {
                const isSelected = selectedHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setSelectedHotspot(hotspot)}
                    aria-label={hotspot.title}
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center transition-all group cursor-pointer focus:outline-none`}
                  >
                    {/* Pulsing ring */}
                    <span
                      className={`absolute w-8 h-8 rounded-full transition-transform ${
                        isSelected
                          ? 'bg-cyan-400/40 animate-ping'
                          : 'bg-white/20 group-hover:scale-125'
                      }`}
                    />
                    
                    {/* Outer core circle */}
                    <span
                      className={`relative w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all shadow-md ${
                        isSelected
                          ? 'bg-cyan-400 border-white text-black scale-110 shadow-cyan-400/50'
                          : 'bg-[#121620] border-cyan-400/70 text-cyan-300 hover:bg-cyan-400 hover:text-black'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Hotspot Telemetry Card */}
          <div className="lg:col-span-3 order-3">
            <div className="bg-[#141926] border border-cyan-400/40 rounded-3xl p-6 shadow-xl shadow-cyan-500/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-1 rounded-full">
                  {selectedHotspot.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  ID: #{selectedHotspot.id}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {selectedHotspot.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {selectedHotspot.description}
                </p>
              </div>

              <div className="p-3.5 bg-black/40 rounded-2xl border border-white/5 space-y-1.5">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Technischer Hintergrund & Funktion:
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {selectedHotspot.details}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                <span>Dosenformat:</span>
                <span className="text-white font-mono font-medium">500 ml Slim-Aluminium</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Kühlleitfähigkeit:</span>
                <span className="text-cyan-300 font-mono font-medium">15x schneller als Glas</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
