import React, { useState } from 'react';
import { SENSORY_SCORES } from '../data/productData';
import { Droplets, ThermometerSnowflake, Sparkles, Gamepad2, Dumbbell, Laptop, Car } from 'lucide-react';
import bannerImage from '../assets/images/ultra_hero_banner_1789413031161.jpg';

export const FlavorSensory: React.FC = () => {
  const [activeSituation, setActiveSituation] = useState<'gaming' | 'gym' | 'work' | 'drive'>('gym');

  const situations = [
    {
      id: 'gym',
      label: 'Fitness & Workout',
      icon: <Dumbbell className="w-4 h-4" />,
      title: 'Pre-Workout Leistungs-Boost',
      timing: '20–30 Minuten vor dem Training',
      benefit: '160mg Koffein aktivieren das ZNS, während L-Carnitin und Taurin die Muskelzellen unterstützen – ganz ohne Kohlenhydrate.',
      tip: 'Eisgekühlt trinken für maximale Erfrischung im Gym.'
    },
    {
      id: 'work',
      label: 'Deep Work & Office',
      icon: <Laptop className="w-4 h-4" />,
      title: 'Anhaltender mentaler Fokus',
      timing: 'Zu Beginn komplexer Arbeitsphasen',
      benefit: 'Panax Ginseng und B-Vitamine unterstützen die kognitive Ausdauer, ohne dass nach 1 Stunde ein zuckerbedingtes Leistungstief folgt.',
      tip: 'Ideal als Ersatz für den 3. Nachmittagskaffee.'
    },
    {
      id: 'gaming',
      label: 'Gaming & Esports',
      icon: <Gamepad2 className="w-4 h-4" />,
      title: 'Reaktionsschnelligkeit & Precision',
      timing: 'Vor Ranked Matches und Turnieren',
      benefit: 'Koffein schärft die Hand-Augen-Koordination. Die strukturierte Relief-Dose garantiert festen Halt bei schwitzigen Händen.',
      tip: 'Hinterlässt keine klebrigen Rückstände an Tastatur oder Maus.'
    },
    {
      id: 'drive',
      label: 'Roadtrip & Reisen',
      icon: <Car className="w-4 h-4" />,
      title: 'Wachsamkeit auf langen Strecken',
      timing: 'Bei aufkommender Müdigkeit am Steuer',
      benefit: 'Kombination aus spritziger Kohlensäure und belebendem Zitrus-Kick weckt die Sinne spürbar auf Autobahnfahrten.',
      tip: 'Passt perfekt in jeden Standard-Getränkehalter.'
    },
  ];

  const currentSit = situations.find((s) => s.id === activeSituation) || situations[0];

  return (
    <section id="geschmack" className="py-24 bg-[#090b10] relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Droplets className="w-3.5 h-3.5" />
            <span>Geschmack & Sensorik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Crisp Citrus:{' '}
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Das Geschmackserlebnis
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Vergiss schwere, klebrige Sirup-Getränke. Monster Ultra White bietet ein spritziges, 
            kristallklares Geschmacksprofil mit leichten Noten von Grapefruit, Zitrone und Limette.
          </p>
        </div>

        {/* Top Graphic Banner with Sensory Highlights */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-12 shadow-2xl">
          <img
            src={bannerImage}
            alt="Ice cold beverage atmospheric background"
            referrerPolicy="no-referrer"
            className="w-full h-64 sm:h-80 object-cover filter brightness-[0.7] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                Eisgekühlt am besten
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                3 – 5 °C Ideale Serviertemperatur
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-light max-w-lg">
                Direkt aus dem Kühlschrank entfaltet die Kohlensäure ihr feinstes Perlen und die Zitrusaromen ihre maximale Strahlkraft.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 shrink-0">
              <ThermometerSnowflake className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Alu-Thermo-Vorteil</div>
                <div className="text-sm font-bold text-white font-mono">15 Min bis Frostkälte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sensory Scorecard & Situation Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sensory Sliders (6 cols) */}
          <div className="lg:col-span-6 bg-[#121622] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Sensorisches Geschmacksprofil</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Subjektive und analytische Labor-Bewertungskriterien
              </p>
            </div>

            <div className="space-y-5">
              {SENSORY_SCORES.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-200">{item.label}</span>
                    <span className="font-mono font-bold text-cyan-300">{item.value}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-sky-300 rounded-full"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-slate-400">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Situation Matrix (6 cols) */}
          <div className="lg:col-span-6 bg-[#121622] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  Optimaler Einsatzbereich
                </h3>
                <span className="text-xs text-cyan-400 font-mono">Wähle Situation</span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Monster Ultra White passt sich perfekt deinem täglichen Lifestyle und Trainingsplan an:
              </p>

              {/* Situation Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {situations.map((sit) => (
                  <button
                    key={sit.id}
                    onClick={() => setActiveSituation(sit.id as any)}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                      activeSituation === sit.id
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {sit.icon}
                    <span>{sit.label}</span>
                  </button>
                ))}
              </div>

              {/* Situation Detail Box */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-cyan-400/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{currentSit.title}</span>
                  <span className="text-[10px] text-cyan-300 font-bold bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                    {currentSit.timing}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {currentSit.benefit}
                </p>

                <div className="pt-2 border-t border-white/10 text-[11px] text-amber-300 flex items-center gap-2">
                  <span className="font-bold">Pro-Tipp:</span>
                  <span>{currentSit.tip}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Keine Klebrigkeit</span>
              <span>Kein Völlegefühl</span>
              <span>100% Alltagstauglich</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
