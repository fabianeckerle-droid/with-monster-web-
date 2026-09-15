import React from 'react';
import { TIMELINE_STAGES } from '../data/productData';
import { Clock, TrendingUp, CheckCircle, Zap } from 'lucide-react';

export const EnergyTimeline: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0f17] border-y border-white/10 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Pharmakokinetischer Verlauf</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wie die Wirkung sich{' '}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              im Körper entfaltet
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Die Kombination aus reinem Koffein und der Monster Energy Matrix sorgt für einen stetigen, 
            zuverlässigen Anstieg ohne den gefürchteten Absturz herkömmlicher zuckerhaltiger Getränke.
          </p>
        </div>

        {/* Timeline Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TIMELINE_STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="bg-[#121622] border border-white/10 hover:border-cyan-400/40 rounded-3xl p-6 relative flex flex-col justify-between transition-all duration-300 shadow-lg group hover:-translate-y-1"
            >
              {/* Step indicator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono font-bold">
                    {stage.time}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">
                  {stage.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{stage.impact}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Status:</span>
                <span className="text-white font-medium">{stage.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Curve Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#141b2a] via-[#111622] to-[#141b2a] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Stabile Energiekurve statt Achterbahn</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Klassische Energy-Drinks verursachen durch 55g Zucker eine rasante Insulinausschüttung 
              mit starkem Absturz nach 60 Minuten. Ultra White liefert flachen Blutzucker und linearen Fokus über Stunden.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-1 bg-cyan-400 rounded-full" />
              <span className="text-slate-200 font-medium">Monster Ultra (Stabil)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="w-3 h-1 bg-amber-500 rounded-full" />
              <span className="text-slate-400">Zuckerdrink (Crash)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
