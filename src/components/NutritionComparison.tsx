import React, { useState } from 'react';
import { NUTRITION_TABLE, COMPARISON_PRODUCTS } from '../data/productData';
import { ShieldCheck, Scale, AlertTriangle, CheckCircle, BarChart3, Droplet } from 'lucide-react';

export const NutritionComparison: React.FC = () => {
  const [portion, setPortion] = useState<'100ml' | '500ml'>('500ml');
  const [selectedCompId, setSelectedCompId] = useState<string>('classic-energy');

  const selectedComparison =
    COMPARISON_PRODUCTS.find((p) => p.id === selectedCompId) || COMPARISON_PRODUCTS[1];

  const ultraProduct = COMPARISON_PRODUCTS[0];

  // Sugar cubes calculation: 1 standard German sugar cube is approx 3.0g
  const sugarCubesSaved = Math.round(selectedComparison.sugar / 3);

  return (
    <section id="naehrwerte" className="py-24 bg-[#0c0f17] border-y border-white/10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Transparente Labor- & Nährwertanalyse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nährwerttabelle &{' '}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Direktvergleich
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Volle Transparenz nach europäischer Lebensmittelinformationsverordnung (LMIV). 
            Erlebe den messbaren Unterschied zu herkömmlichen zuckerhaltigen Energy Drinks.
          </p>
        </div>

        {/* Top Split: Interactive Sugar & Calorie Comparison */}
        <div className="bg-[#121622] border border-cyan-400/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <span>Interaktiver Vergleich (pro 500 ml Portion)</span>
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Wähle ein Vergleichsgetränk, um den Zucker- und Kalorienunterschied zu sehen:
              </p>
            </div>

            {/* Comparison selector buttons */}
            <div className="flex flex-wrap gap-2">
              {COMPARISON_PRODUCTS.slice(1).map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedCompId(comp.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCompId === comp.id
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {comp.name}
                </button>
              ))}
            </div>
          </div>

          {/* Side by side comparison cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Monster Ultra Column */}
            <div className="lg:col-span-5 bg-[#090b10] border-2 border-cyan-400/50 rounded-2xl p-6 space-y-6 shadow-lg shadow-cyan-500/10">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                    Dein Favorit
                  </span>
                  <h4 className="text-lg font-bold text-white">{ultraProduct.name}</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                  ZERO SUGAR
                </span>
              </div>

              {/* Stat 1: Zucker */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Zuckergehalt</span>
                  <span className="text-cyan-300 font-bold font-mono">0,0 g</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full w-0" />
                </div>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3 h-3" /> 0 Zuckerwürfel
                </span>
              </div>

              {/* Stat 2: Kalorien */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Brennwert / Kalorien</span>
                  <span className="text-white font-bold font-mono">11 kcal</span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400/80 rounded-full w-[5%]" />
                </div>
              </div>

              {/* Stat 3: Crash-Risiko */}
              <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
                <span className="text-slate-400">Zucker-Crash-Risiko:</span>
                <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  Keines (Stabiler Fokus)
                </span>
              </div>
            </div>

            {/* Middle Badge: Savings Indicator */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-2">
                <span className="text-xl font-bold font-mono">VS</span>
              </div>
              <div className="text-xs text-slate-400">Du sparst ca.</div>
              <div className="text-2xl font-extrabold text-cyan-400 font-mono">
                {selectedComparison.sugar}g
              </div>
              <div className="text-[11px] text-slate-400">
                (~{sugarCubesSaved} Zuckerwürfel)
              </div>
            </div>

            {/* Selected Competitor Column */}
            <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Vergleichsobjekt
                  </span>
                  <h4 className="text-lg font-bold text-white">{selectedComparison.name}</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-bold border border-amber-400/30">
                  Zuckerhaltig
                </span>
              </div>

              {/* Stat 1: Zucker */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Zuckergehalt</span>
                  <span className="text-amber-400 font-bold font-mono">
                    {selectedComparison.sugar} g
                  </span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (selectedComparison.sugar / 60) * 100)}%`,
                    }}
                  />
                </div>
                <span className="text-[11px] text-amber-400/90 flex items-center gap-1 font-medium">
                  <AlertTriangle className="w-3 h-3" /> Ca. {sugarCubesSaved} Zuckerwürfel
                </span>
              </div>

              {/* Stat 2: Kalorien */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Brennwert / Kalorien</span>
                  <span className="text-slate-200 font-bold font-mono">
                    {selectedComparison.calories} kcal
                  </span>
                </div>
                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500/60 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (selectedComparison.calories / 250) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Stat 3: Crash-Risiko */}
              <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
                <span className="text-slate-400">Zucker-Crash-Risiko:</span>
                <span className="text-red-400 font-bold px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30">
                  {selectedComparison.crashRisk}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Split: Complete Nutrition Table */}
        <div className="bg-[#121622]/90 border border-white/10 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Offizielle Nährwertdeklaration
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Angaben pro 100 ml sowie für die typische 500 ml Einzeldose
              </p>
            </div>

            {/* Portion switcher */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10">
              <button
                onClick={() => setPortion('100ml')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  portion === '100ml'
                    ? 'bg-white text-black font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Pro 100 ml
              </button>
              <button
                onClick={() => setPortion('500ml')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  portion === '500ml'
                    ? 'bg-white text-black font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Pro Dose (500 ml)
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4 font-semibold">Nährstoff</th>
                  <th className="py-3 px-4 font-semibold">
                    {portion === '100ml' ? 'Wert pro 100 ml' : 'Wert pro 500 ml Dose'}
                  </th>
                  <th className="py-3 px-4 font-semibold">% NRV*</th>
                  <th className="py-3 px-4 font-semibold hidden md:table-cell">Ernährungsphysiologische Funktion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {NUTRITION_TABLE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-medium text-white flex items-center gap-2">
                      {item.name.includes('Zucker') && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      )}
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-cyan-300">
                      {portion === '100ml' ? item.per100ml : item.perCan500ml}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-300">
                      {item.nrvPercentage || '—'}
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-400 hidden md:table-cell">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between text-[11px] text-slate-400 gap-2">
            <span>*NRV = Nährstoffbezugswerte gemäß EU-Verordnung 1169/2011</span>
            <span>Erhöhter Koffeingehalt (32 mg / 100 ml). In Maßen konsumieren.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
