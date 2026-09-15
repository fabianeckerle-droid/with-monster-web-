import React from 'react';
import { ACTIVE_INGREDIENTS } from '../data/productData';
import { Zap, Flame, Leaf, Compass, Cpu, CheckCircle2 } from 'lucide-react';

export const ActiveIngredients: React.FC = () => {
  const getIngredientIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-cyan-400" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="wirkstoffe" className="py-24 bg-[#090b10] relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>Monster Energy Blend</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wissenschaftlich abgestimmte{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
              Wirkstoff-Formel
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Die legendäre Monster Blend kombiniert Koffein mit synergistischen Adaptogenen, Aminosäuren und Vitaminen. 
            Erfahre, wie jeder Inhaltsstoff präzise zur Steigerung von Wachheit und Ausdauer beiträgt.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVE_INGREDIENTS.map((ingredient, idx) => (
            <div
              key={idx}
              className="bg-[#121622]/90 border border-white/10 hover:border-cyan-400/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIngredientIcon(ingredient.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">
                    {ingredient.amount}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                  {ingredient.name}
                </h3>
                <div className="text-xs font-medium text-amber-300 mb-3">
                  Zweck: {ingredient.purpose}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {ingredient.mechanism}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Pharmazeutisch geprüfte Reinheit</span>
              </div>
            </div>
          ))}

          {/* 6th Card: B-Vitamin Summary Card */}
          <div className="bg-gradient-to-br from-[#161f30] to-[#10141f] border border-cyan-400/30 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  Mikronährstoffe
                </span>
                <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                  100% – 500% NRV
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                B-Komplex (B3, B5, B6, B12)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                Reduziert nachweislich Müdigkeit und unterstützt den natürlichen Energiestoffwechsel der Körperzellen.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 bg-black/30 rounded-lg">
                  <span className="text-slate-400 block">B3 Niacin:</span>
                  <span className="font-bold text-white">43 mg (266%)</span>
                </div>
                <div className="p-2 bg-black/30 rounded-lg">
                  <span className="text-slate-400 block">B5 Pantothen:</span>
                  <span className="font-bold text-white">21 mg (350%)</span>
                </div>
                <div className="p-2 bg-black/30 rounded-lg">
                  <span className="text-slate-400 block">B6 Pyridoxin:</span>
                  <span className="font-bold text-white">4,0 mg (286%)</span>
                </div>
                <div className="p-2 bg-black/30 rounded-lg">
                  <span className="text-slate-400 block">B12 Cobalamin:</span>
                  <span className="font-bold text-white">13 µg (500%)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400">
              Referenzmengen gemäß EU-Verordnung 1169/2011
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
