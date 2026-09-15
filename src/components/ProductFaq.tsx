import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/productData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const ProductFaq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle Fragen' },
    { id: 'inhaltsstoffe', label: 'Inhaltsstoffe & Geschmack' },
    { id: 'wirkung', label: 'Wirkung & Koffein' },
    { id: 'konsum', label: 'Konsum & Fitness' },
    { id: 'herkunft', label: 'Recycling & Verpackung' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  return (
    <section id="faq" className="py-24 bg-[#0c0f17] border-t border-white/10 relative text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparenz & Wissensdatenbank</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Häufig gestellte{' '}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Fragen (FAQ)
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-light">
            Alle Antworten rund um Rezeptur, Inhaltsstoffe, Koffeinwirkung und verantwortungsvollen Genuss.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#121622] rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/5' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-cyan-400 text-black rotate-180'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
