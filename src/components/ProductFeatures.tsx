import React, { useState } from 'react';
import { PRODUCT_FEATURES } from '../data/productData';
import { ProductFeature } from '../types';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Droplets, 
  Box, 
  Check, 
  ArrowRight, 
  Info, 
  X, 
  Search, 
  SlidersHorizontal 
} from 'lucide-react';

export const ProductFeatures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFeature, setSelectedFeature] = useState<ProductFeature | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-sky-400" />;
      case 'Box':
        return <Box className="w-6 h-6 text-slate-300" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  const categories = [
    { id: 'all', label: 'Alle Funktionen' },
    { id: 'energy', label: 'Energie & Fokus' },
    { id: 'nutrition', label: 'Nährwerte & Fitness' },
    { id: 'flavor', label: 'Geschmack & Frische' },
    { id: 'design', label: 'Design & Verpackung' },
  ];

  const filteredFeatures = PRODUCT_FEATURES.filter((feature) => {
    const matchesCategory = activeCategory === 'all' || feature.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="funktionen" className="py-24 bg-[#090b10] relative text-left">
      {/* Background glow accents */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Funktionsübersicht im Detail</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Klare Übersicht aller{' '}
            <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
              Produktfunktionen
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Monster Energy Ultra White vereint kompromisslose Leistungssteigerung mit moderner 
            Ernährungsphysiologie. Jede Komponente wurde gezielt formuliert, um maximalen Nutzen ohne überflüssige Ballaststoffe zu liefern.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center pb-8 border-b border-white/10 mb-10">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Funktion oder Wirkstoff filtern..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-[#121622]/80 hover:bg-[#151a28] border border-white/10 hover:border-cyan-400/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/40 hover:-translate-y-1"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  {feature.metric && (
                    <div className="text-right">
                      <span className="block text-2xl font-extrabold text-white font-mono">
                        {feature.metric.value}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {feature.metric.label}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-cyan-300 font-medium">
                    {feature.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light mb-5">
                  {feature.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6">
                  {feature.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-300">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer / Scientific Benefit & Deep Dive Link */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                  <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{feature.scientificBenefit}</span>
                </div>

                <button
                  onClick={() => setSelectedFeature(feature)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 hover:border-cyan-400/30 transition-all flex items-center justify-between cursor-pointer"
                >
                  <span>Wissenschaftliche Details ansehen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredFeatures.length === 0 && (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
            <p className="text-slate-400 text-sm mb-4">
              Keine Funktionen gefunden für Suchbegriff &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}

      </div>

      {/* Feature Deep Dive Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#121622] border border-cyan-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 text-left">
            <button
              onClick={() => setSelectedFeature(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
                {getIcon(selectedFeature.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                  Funktions-Detailanalyse
                </span>
                <h3 className="text-2xl font-bold text-white">{selectedFeature.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
              {selectedFeature.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Biochemischer & Physiologischer Mechanismus:
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {selectedFeature.scientificBenefit}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-400/[0.04] border border-cyan-400/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                  Konkreter Nutzen im Alltag:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedFeature.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setSelectedFeature(null)}
              className="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
