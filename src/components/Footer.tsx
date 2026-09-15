import React from 'react';
import { AlertCircle, Recycle, HeartHandshake, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07090e] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statutory Warning Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold uppercase tracking-wider text-[11px] block">
              Gesetzlicher Hinweis nach Lebensmittelinformations-Verordnung (LMIV):
            </span>
            <p className="text-xs text-amber-200/90 leading-relaxed font-light">
              Erhöhter Koffeingehalt (32 mg / 100 ml). Für Kinder und schwangere oder stillende Frauen nicht empfohlen. 
              In moderaten Mengen als Teil einer abwechslungsreichen und ausgewogenen Ernährung sowie einer gesunden Lebensweise konsumieren.
            </p>
          </div>
        </div>

        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-lg uppercase text-white font-sans">
                MONSTER ENERGY
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-300 font-bold uppercase">
                Ultra White
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md font-light leading-relaxed">
              Die offizielle Produktübersicht für Monster Energy Ultra White. Entwickelt für Athleten, Gamer, 
              Kreative und Macher, die maximale Wachheit ohne die Belastung von raffiniertem Zucker fordern.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 text-[11px]">
                <Recycle className="w-3.5 h-3.5 text-emerald-400" />
                100% Recycelbares Aluminium
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                0,0 g Zucker
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#funktionen" className="hover:text-white transition-colors">
                  Produktfunktionen
                </a>
              </li>
              <li>
                <a href="#explorer" className="hover:text-white transition-colors">
                  Interaktiver Dosen-Explorer
                </a>
              </li>
              <li>
                <a href="#wirkstoffe" className="hover:text-white transition-colors">
                  Wirkstoffe & Rezeptur
                </a>
              </li>
              <li>
                <a href="#naehrwerte" className="hover:text-white transition-colors">
                  Nährwerttabelle & Vergleich
                </a>
              </li>
              <li>
                <a href="#geschmack" className="hover:text-white transition-colors">
                  Geschmacksprofil & Sensorik
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Standards */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Information & Rechtliches
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="text-slate-400">0,25 € DPG Einweg-Pfand</li>
              <li className="text-slate-400">EU-Lebensmittelzertifiziert</li>
              <li className="text-slate-400">Hergestellt in der EU</li>
              <li className="text-slate-400">Glutenfrei & Vegan</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Monster Energy Ultra White Showcase. Alle Markenzeichen gehören den jeweiligen Eigentümern.
          </div>
          <div className="flex items-center gap-4">
            <a href="#funktionen" className="hover:text-slate-300">Nach oben springen ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
