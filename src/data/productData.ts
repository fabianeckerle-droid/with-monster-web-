import { ProductFeature, NutritionItem, ActiveIngredient, Hotspot, ComparisonProduct, FaqItem } from '../types';

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: 'zero-sugar',
    title: 'Zero Zucker & Kalorienarm',
    subtitle: 'Maximaler Geschmack ohne schlechtes Gewissen',
    category: 'nutrition',
    description: 'Monster Ultra White verzichtet vollständig auf zugesetzten Zucker. Mit nur rund 11 kcal pro 500ml-Dose bietet es vollen Energie-Kick ohne störenden Zuckerabsturz.',
    highlights: [
      '0 Gramm Zucker pro Dose',
      'Nur ca. 11 Kalorien auf 500 ml',
      'Kein plötzlicher Insulin-Spike (No Sugar Crash)',
      'Geeignet für kalorienbewusste Ernährungspläne'
    ],
    scientificBenefit: 'Verhindert den typischen reaktiven Blutzuckerabfall nach dem Trinken und ermöglicht ein gleichmäßiges Energieniveau.',
    iconName: 'ShieldCheck',
    metric: {
      value: '0g',
      label: 'Zucker pro Dose'
    }
  },
  {
    id: 'caffeine-focus',
    title: 'Dual-Focus Koffein-Matrix',
    subtitle: '160 mg Koffein mit Panax Ginseng',
    category: 'energy',
    description: 'Eine optimal dosierte Kombination aus 32 mg Koffein pro 100 ml (160 mg pro 500 ml) und edlem Panax Ginseng Extrakt für geschärfte Reaktionszeiten und messbaren mentalen Fokus.',
    highlights: [
      '160 mg reines Koffein (entspricht ca. 2 Tassen Espresso)',
      'Kombiniert mit Panax-Ginseng-Wurzelextrakt',
      'Fördert Wachsamkeit, kognitive Agilität und Konzentration',
      'Ideal für Gaming, Büroarbeit, Deep Work und Autofahrten'
    ],
    scientificBenefit: 'Koffein blockiert temporär Adenosinrezeptoren im Gehirn, während Ginsenoside als traditionelles Adaptogen Stresssignale dämpfen.',
    iconName: 'Zap',
    metric: {
      value: '160mg',
      label: 'Koffein pro 500ml'
    }
  },
  {
    id: 'metabolic-blend',
    title: 'Taurin & L-Carnitin Komplex',
    subtitle: 'Zelluläre Energie & Leistungsbereitschaft',
    category: 'energy',
    description: 'Hochwertiges Taurin reguliert den Wasser- und Mineralstoffhaushalt in den Muskelzellen, während L-Carnitin L-Tartrat den Fettstoffwechsel zur Energiegewinnung ankurbelt.',
    highlights: [
      '1000 mg Taurin pro Dose zur Unterstützung der Zellhydration',
      'L-Carnitin L-Tartrat für den mitochondrialen Energieumsatz',
      'Unterstützt Muskelausdauer und zügige Regeneration',
      'Optimal als Pre-Workout Booster 30 Minuten vor dem Training'
    ],
    scientificBenefit: 'Erleichtert den mitochondrialen Transport von Fettsäuren und optimiert die intrazelluläre Elektrolytbalance.',
    iconName: 'Activity',
    metric: {
      value: '1000mg',
      label: 'Taurin Blend'
    }
  },
  {
    id: 'b-vitamins',
    title: 'Essentieller B-Vitamin Komplex',
    subtitle: '100% NRV für B3, B5, B6 und B12',
    category: 'nutrition',
    description: 'Vier lebenswichtige B-Vitamine tragen nachweislich zur Verringerung von Müdigkeit und Erschöpfung bei und stärken die normale Funktion des Nervensystems.',
    highlights: [
      'Vitamin B3 (Niacin) unterstützt normalen Energiestoffwechsel',
      'Vitamin B5 (Pantothensäure) fördert die geistige Leistungsfähigkeit',
      'Vitamin B6 unterstützt die Regulierung der Hormontätigkeit',
      'Vitamin B12 fördert Zellteilung und Nervenfunktion'
    ],
    scientificBenefit: 'B-Vitamine fungieren als Coenzyme für die enzymatische Umwandlung von Nährstoffen in zelluläres ATP.',
    iconName: 'Sparkles',
    metric: {
      value: '100%',
      label: 'NRV B-Vitamine'
    }
  },
  {
    id: 'crisp-citrus',
    title: 'Crisp & Refreshing Citrus Flavour',
    subtitle: 'Leicht, perlend und niemals klebrig',
    category: 'flavor',
    description: 'Im Gegensatz zu schweren, klebrig-süßen Standard-Energy-Drinks überzeugt Ultra White durch ein erfrischend leichtes Geschmacksprofil mit spritzigen Zitrus- und dezenten Grapefruitnoten.',
    highlights: [
      'Feinperlige Kohlensäure für ein angenehm prickelndes Mundgefühl',
      'Dezente, spritzige Zitrus- & Grapefruit-Aromatik',
      'Kein klebriger Belag im Mund oder chemischer Nachgeschmack',
      'Perfekt bei eisgekühlter Trinktemperatur (3–5 °C)'
    ],
    scientificBenefit: 'Leichte Zitronensäure regt den Speichelfluss an und hinterlässt ein gereinigtes, belebtes Frischegefühl.',
    iconName: 'Droplets',
    metric: {
      value: '3-5°C',
      label: 'Serviertemperatur'
    }
  },
  {
    id: 'tactile-can',
    title: 'Haptische Relief-Dose & Kältespeicher',
    subtitle: 'Ikonisches Mattweiß mit fühlbarer Gravur',
    category: 'design',
    description: 'Die Dose besticht durch ihre matte, strukturierte Relief-Oberfläche mit feinen barocken Mustern. Das Design liegt extrem griffsicher in der Hand und schützt das Getränk vor UV-Einflüssen.',
    highlights: [
      'Fühlbare 3D-Prägestruktur ("Textured Grip")',
      '100% unbegrenzt recycelbares Aluminium',
      'Schnelle Durchkühlung für spontane Erfrischung',
      'Schwarzer Krawall-Krallen-Aufreißer mit ikonischem Monster-M'
    ],
    scientificBenefit: 'Aluminium leitet Kälte bis zu 15-mal schneller als Glas oder PET und schützt hitzeempfindliche Vitamine vor Lichteinfall.',
    iconName: 'Box',
    metric: {
      value: '100%',
      label: 'Recycelbar'
    }
  }
];

export const NUTRITION_TABLE: NutritionItem[] = [
  {
    name: 'Brennwert / Energie',
    per100ml: '9 kJ / 2 kcal',
    perCan500ml: '44 kJ / 11 kcal',
    nrvPercentage: '< 1%',
    description: 'Nahezu kalorienfrei, ideal während Diät oder Definitionsphase'
  },
  {
    name: 'Kohlenhydrate',
    per100ml: '0,9 g',
    perCan500ml: '4,4 g',
    nrvPercentage: '< 2%',
    description: 'Enthält natürliche Fruchtsaftkonzentrat-Spuren und pflanzliche Aromen'
  },
  {
    name: 'davon Zucker',
    per100ml: '0 g',
    perCan500ml: '0 g',
    nrvPercentage: '0%',
    description: 'Absolut zuckerfrei, kein raffinierter Zucker zugesetzt'
  },
  {
    name: 'Fett & gesättigte Fettsäuren',
    per100ml: '0 g',
    perCan500ml: '0 g',
    nrvPercentage: '0%',
    description: 'Frei von Fetten und Ölen'
  },
  {
    name: 'Eiweiß / Protein',
    per100ml: '0 g',
    perCan500ml: '0 g',
    nrvPercentage: '0%',
    description: 'Enthält Aminosäuren wie L-Carnitin und Taurin in freier Form'
  },
  {
    name: 'Salz',
    per100ml: '0,20 g',
    perCan500ml: '1,0 g',
    nrvPercentage: '17%',
    description: 'Wichtig für die Elektrolytunterstützung bei körperlicher Anstrengung'
  },
  {
    name: 'Niacin (Vitamin B3)',
    per100ml: '8,5 mg',
    perCan500ml: '43 mg',
    nrvPercentage: '266%',
    description: 'Trägt zu einem normalen zellulären Energiestoffwechsel bei'
  },
  {
    name: 'Pantothensäure (Vitamin B5)',
    per100ml: '4,2 mg',
    perCan500ml: '21 mg',
    nrvPercentage: '350%',
    description: 'Trägt zu einer normalen geistigen Leistungsfähigkeit bei'
  },
  {
    name: 'Vitamin B6',
    per100ml: '0,80 mg',
    perCan500ml: '4,0 mg',
    nrvPercentage: '286%',
    description: 'Reduziert Müdigkeit und unterstützt die Eiweißsynthese'
  },
  {
    name: 'Vitamin B12',
    per100ml: '2,5 µg',
    perCan500ml: '13 µg',
    nrvPercentage: '500%',
    description: 'Unterstützt das Nervensystem und die Bildung roter Blutkörperchen'
  }
];

export const ACTIVE_INGREDIENTS: ActiveIngredient[] = [
  {
    name: 'Koffein (Caffeine)',
    amount: '32 mg / 100 ml (160 mg)',
    purpose: 'Mentale Wachheit & Reaktionsschnelligkeit',
    mechanism: 'Hemmt die Bindung von Müdigkeitsbotenstoffen (Adenosin) an Gehirnrezeptoren.',
    iconName: 'Zap'
  },
  {
    name: 'Taurin (Taurine)',
    amount: 'ca. 2000 mg / 500 ml',
    purpose: 'Zellhydration & Muskelkontraktion',
    mechanism: 'Bedingt essenzielle Aminosulfonsäure, reguliert Kalziumionen im Herz- und Skelettmuskelgewebe.',
    iconName: 'Flame'
  },
  {
    name: 'Panax Ginseng Extrakt',
    amount: '400 mg / 500 ml',
    purpose: 'Stressresistenz & Adaptogene Vitalität',
    mechanism: 'Enthält bioaktive Ginsenoside, die die körpereigene Stressantwort harmonisieren.',
    iconName: 'Leaf'
  },
  {
    name: 'L-Carnitin L-Tartrat',
    amount: '200 mg / 500 ml',
    purpose: 'Mitochondrialer Fett- & Energiestoffwechsel',
    mechanism: 'Transportiert langkettige Fettsäuren in die Mitochondrien zur Verbrennung.',
    iconName: 'Compass'
  },
  {
    name: 'Inosit (Inositol)',
    amount: '100 mg / 500 ml',
    purpose: 'Zelluläre Botenstoffübertragung',
    mechanism: 'Second Messenger für die neuronale Signalübertragung im zentralen Nervensystem.',
    iconName: 'Cpu'
  }
];

export const CAN_HOTSPOTS: Hotspot[] = [
  {
    id: 'top-lid',
    title: 'Schwarzer Öffner mit M-Prägung',
    tag: 'Ergonomie',
    description: 'Der exklusive schwarze Aufreißer mit eingestanztem Monster-M setzt einen starken visuellen Kontrast zur reinweißen Dose.',
    x: 50,
    y: 12,
    details: 'Speziell abgerundete Kanten sorgen für ein müheloses, verletzungsfreies Aufdrücken mit sattem "Klick"-Kohlensäuresound.',
    iconName: 'Sparkles'
  },
  {
    id: 'zero-banner',
    title: 'Zero Zucker Banderole',
    tag: 'Ernährung',
    description: 'Am oberen Rand der Dose markiert der Schriftzug "ZERO ZUCKER" die reine zuckerfreie Rezeptur.',
    x: 50,
    y: 22,
    details: 'Gesüßt mit hochwertigem Sucralose- und Acesulfam-K-Blend für authentische Süße ohne metallischen Beigeschmack.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'claw-emblem',
    title: 'Ikonische 3D-Kralle',
    tag: 'Markenidentität',
    description: 'Die weltbekannte dreifache Monster-Kralle prangt in markantem Schwarz-Silber-Kontrast.',
    x: 50,
    y: 45,
    details: 'Umgeben von eisblauen Schattierungen und silbern schimmernden Rändern, die den gefrorenen Look unterstreichen.',
    iconName: 'Flame'
  },
  {
    id: 'filigree-texture',
    title: 'Haptische Frost-Reliefs',
    tag: 'Material & Haptik',
    description: 'Die gesamte Dosenoberfläche ist mit einer feinen, fühlbaren Relief-Lackierung versehen.',
    x: 24,
    y: 62,
    details: 'Verhindert das Abrutschen nasser oder verschwitzter Hände im Gym oder bei heißen Sommertagen.',
    iconName: 'Fingerprint'
  },
  {
    id: 'ultra-citrus-blend',
    title: 'Ultra White Schriftzug & Nährwerte',
    tag: 'Wirkstoffformel',
    description: 'Unter dem Markennamen fasst die Dose die legendäre Monster Energy Blend zusammen.',
    x: 50,
    y: 78,
    details: '160 mg Koffein + B-Vitamine (B3, B5, B6, B12) + Taurin + L-Carnitin für bis zu 5 Stunden anhaltende Energie.',
    iconName: 'Zap'
  }
];

export const COMPARISON_PRODUCTS: ComparisonProduct[] = [
  {
    id: 'monster-ultra',
    name: 'Monster Ultra White',
    sugar: 0,
    calories: 11,
    caffeine: 160,
    crashRisk: 'Keines',
    vitamins: true,
    flavorProfile: 'Leicht spritzig, Zitrus & Grapefruit, zero klebrig'
  },
  {
    id: 'classic-energy',
    name: 'Klassischer Energy Drink',
    sugar: 55,
    calories: 235,
    caffeine: 160,
    crashRisk: 'Hoch',
    vitamins: true,
    flavorProfile: 'Sehr süß, Gummibärchen-Aroma, klebriger Nachgeschmack'
  },
  {
    id: 'cola-soda',
    name: 'Klassische Zucker-Cola',
    sugar: 53,
    calories: 210,
    caffeine: 50,
    crashRisk: 'Mittel',
    vitamins: false,
    flavorProfile: 'Sehr süß, karamellig, schwacher Koffeingehalt'
  },
  {
    id: 'filter-coffee',
    name: 'Großer Filterkaffee (ungesüßt)',
    sugar: 0,
    calories: 5,
    caffeine: 150,
    crashRisk: 'Gering',
    vitamins: false,
    flavorProfile: 'Röstig, bitter, keine B-Vitamine oder Taurin'
  }
];

export const SENSORY_SCORES = [
  { label: 'Frischekick', value: 95, note: 'Eiskalt serviert extrem belebend' },
  { label: 'Spritzigkeit / Kohlensäure', value: 85, note: 'Feinperlig & prickelnd' },
  { label: 'Zitrus-Aromatik', value: 88, note: 'Helle Grapefruit- & Limettennoten' },
  { label: 'Süßeintensität', value: 35, note: 'Angenehm dezent, nicht beschwerend' },
  { label: 'Bitterkeit / Säure', value: 25, note: 'Ausgewogen weich abgerundet' },
  { label: 'Clean Finish (kein Film)', value: 96, note: 'Absolut sauberer Abgang' }
];

export const TIMELINE_STAGES = [
  {
    time: '0 – 10 Min',
    title: 'Erfrischung & Mundgefühl',
    description: 'Die feinperlige Kohlensäure und die Zitrusnote aktivieren sofort Geschmacksknospen und Wohlbefinden.',
    impact: 'Sofortige Erfrischung',
    status: 'Aufnahme'
  },
  {
    time: '15 – 30 Min',
    title: 'Koffeinanstieg & Fokus',
    description: 'Das Koffein gelangt in die Blutbahn. Die Reaktionszeit verkürzt sich, geistige Trägheit weicht spürbarem Fokus.',
    impact: 'Maximaler Konzentrationsanstieg',
    status: 'Peak-Phase'
  },
  {
    time: '45 – 120 Min',
    title: 'Metabole Stabilität',
    description: 'Taurin und L-Carnitin unterstützen den Zellstoffwechsel. Da 0g Zucker enthalten sind, bleibt der Insulinspiegel stabil.',
    impact: 'Kein Energie-Einbruch (No Crash)',
    status: 'Plateau'
  },
  {
    time: '3 – 5 Stunden',
    title: 'Sanftes Ausklingen',
    description: 'Die B-Vitamine (B3, B5, B6, B12) unterstützen die zelluläre Regeneration, während das Koffein allmählich metabolisiert wird.',
    impact: 'Nachhaltige Vitalität',
    status: 'Regeneration'
  }
];

export const PACK_FORMATS = [
  {
    id: 'single-can',
    name: '500 ml Einzeldose',
    tag: 'Der Klassiker',
    desc: 'Die ideale Portion für den schnellen Energieschub unterwegs, vor dem Sport oder während intensiver Arbeitseinheiten.',
    spec: '500 ml Alu-Dose mit Grip-Relief',
    servings: '1 Portion',
    popular: true
  },
  {
    id: 'pack-4',
    name: '4er Multipack',
    tag: 'Für die Woche',
    desc: 'Praktischer Vorratspack für dein Kühlschrankfach. Immer eine eiskalte Dose griffbereit.',
    spec: '4 × 500 ml (2,0 Liter)',
    servings: '4 Portionen',
    popular: false
  },
  {
    id: 'tray-12',
    name: '12er Vorrats-Tray',
    tag: 'Für Gamer & Teams',
    desc: 'Perfekt für lange LAN-Partys, Studio-Arbeiten oder den Sportverein. Sicher verpackt im stabilen Tray.',
    spec: '12 × 500 ml (6,0 Liter)',
    servings: '12 Portionen',
    popular: false
  },
  {
    id: 'case-24',
    name: '24er Palette',
    tag: 'Bulk Best-Value',
    desc: 'Das ultimative Paket für Dauer-Performance. Reicht für einen ganzen Monat Spitzenfokus.',
    spec: '24 × 500 ml (12,0 Liter)',
    servings: '24 Portionen',
    popular: false
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'sugar-taste',
    category: 'inhaltsstoffe',
    question: 'Wie schmeckt Monster Ultra White, obwohl es 0g Zucker enthält?',
    answer: 'Monster Ultra White nutzt eine hochentwickelte Kombination aus kalorienfreien Süßungsmitteln (Sucralose und Acesulfam-K) zusammen mit natürlichen Zitrus- und Fruchtaromen. Dadurch entsteht ein leichter, frischer und spritziger Geschmack, der an Grapefruit und Limette erinnert – ganz ohne den typischen chemischen Nachgeschmack oder klebrige Süße.'
  },
  {
    id: 'caffeine-content',
    category: 'wirkung',
    question: 'Wie viel Koffein enthält eine Dose und wie wirkt es im Vergleich zu Kaffee?',
    answer: 'Eine 500ml-Dose enthält genau 160 mg Koffein (32 mg pro 100 ml). Das entspricht etwa dem Koffeingehalt von zwei herkömmlichen Espressi oder einer großen Tasse starkem Filterkaffee. Durch die Zugabe von Panax Ginseng, Taurin und B-Vitaminen wird der Koffeineffekt als besonders klar, fokussiert und gleichmäßig empfunden.'
  },
  {
    id: 'sport-fitness',
    category: 'konsum',
    question: 'Ist Monster Ultra White für Sportler und Fitness geeignet?',
    answer: 'Ja, viele Athleten und Fitnessbegeisterte nutzen Monster Ultra White als zuckerfreien Pre-Workout-Drink ca. 20–30 Minuten vor dem Training. Mit nur 11 Kalorien passt es in jeden Ernährungsplan (auch Low-Carb und Ketogene Diät). Das enthaltene L-Carnitin und Taurin unterstützen die zelluläre Leistungsfähigkeit.'
  },
  {
    id: 'sugar-crash',
    category: 'wirkung',
    question: 'Warum gibt es bei Ultra White keinen "Zucker-Crash"?',
    answer: 'Klassische Energy-Drinks enthalten oft über 50 Gramm raffinierten Zucker pro Dose. Dieser sorgt für eine massive Insulinausschüttung. Sobald der Zucker abgebaut ist, fällt der Blutzuckerspiegel rapide unter das Ausgangsniveau – man fühlt sich müder als zuvor. Da Ultra White 0g Zucker enthält, bleibt die Blutzuckerkurve flach und der Fokus stabil.'
  },
  {
    id: 'temperature',
    category: 'konsum',
    question: 'Was ist die optimale Trinktemperatur?',
    answer: 'Am besten entfaltet Monster Ultra White seinen vollen Geschmack bei 3 bis 5 °C direkt aus dem Kühlschrank. Durch die Aluminiumdose kühlt das Getränk besonders schnell durch. Auch auf Eis serviert mit einer dünnen Scheibe frischer Limette oder Grapefruit ist es ein Genuss.'
  },
  {
    id: 'recycling',
    category: 'herkunft',
    question: 'Wie sieht es mit Umwelt und Recycling der Dose aus?',
    answer: 'Die Dose besteht zu 100% aus Aluminium und kann unendlich oft ohne Qualitätsverlust recycelt werden. In Deutschland ist die Dose mit dem DPG-Einwegpfand (0,25 €) versehen und kann an jedem gängigen Leergutautomaten zurückgegeben werden.'
  }
];
