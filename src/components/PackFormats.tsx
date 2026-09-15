import React, { useState } from 'react';
import { PACK_FORMATS } from '../data/productData';
import { Package, Check, MapPin, Store, ShoppingBag, ExternalLink } from 'lucide-react';

export const PackFormats: React.FC = () => {
  const [selectedPack, setSelectedPack] = useState(PACK_FORMATS[0].id);
  const [zipCode, setZipCode] = useState('');
  const [locatorResult, setLocatorResult] = useState<string | null>(null);

  const handleSearchStores = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode.trim()) return;
    setLocatorResult(`Gefunden: 6 Partner-Märkte mit Monster Ultra White vorrätig im Umkreis von PLZ ${zipCode}`);
  };

  return (
    <section className="py-24 bg-[#090b10] relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Formate & Gebindegrößen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Erhältlich in allen{' '}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Packungsgrößen
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Vom spontanen Kaltgetränk an der Tankstelle bis zum monatlichen 24er Vorratspaket für dein Setup.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PACK_FORMATS.map((pack) => {
            const isSelected = selectedPack === pack.id;
            return (
              <div
                key={pack.id}
                onClick={() => setSelectedPack(pack.id)}
                className={`bg-[#121622] rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'border-cyan-400/60 shadow-xl shadow-cyan-500/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-full">
                      {pack.tag}
                    </span>
                    {pack.popular && (
                      <span className="text-[10px] uppercase font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                        Meistgekauft
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {pack.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                    {pack.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Spezifikation:</span>
                    <span className="text-white font-mono">{pack.spec}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Portionen:</span>
                    <span className="text-cyan-300 font-mono font-medium">{pack.servings}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Store Locator / Availability widget */}
        <div className="bg-[#121622] border border-cyan-400/30 rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Store className="w-4 h-4" />
                <span>Bundesweite Verfügbarkeit</span>
              </span>
              <h3 className="text-2xl font-bold text-white">
                Wo kannst du Monster Ultra White kaufen?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Erhältlich im gesamten deutschen Lebensmitteleinzelhandel (Rewe, Edeka, Kaufland, Globus), 
                an allen großen Tankstellenketten (Aral, Shell, Total, Esso) sowie online via Getränkelieferanten.
              </p>

              {/* Retailer logos badges */}
              <div className="flex flex-wrap gap-2 pt-3">
                {['REWE', 'EDEKA', 'KAUFLAND', 'ARAL', 'SHELL', 'AMAZON'].map((retailer) => (
                  <span
                    key={retailer}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono font-bold text-slate-300 tracking-wider"
                  >
                    {retailer}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Zip code search */}
            <div className="lg:col-span-5 bg-[#090b10] border border-white/10 rounded-2xl p-5 space-y-3">
              <label htmlFor="zip-input" className="block text-xs font-semibold text-slate-300">
                Markt in deiner Nähe finden:
              </label>
              <form onSubmit={handleSearchStores} className="flex gap-2">
                <div className="relative flex-1">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="zip-input"
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="PLZ oder Ort eingeben..."
                    className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/15 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded-xl hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                >
                  Suchen
                </button>
              </form>

              {locatorResult && (
                <div className="p-3 bg-cyan-400/10 border border-cyan-400/30 rounded-xl text-xs text-cyan-200 flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{locatorResult}</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
