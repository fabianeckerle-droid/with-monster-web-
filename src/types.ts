export interface ProductFeature {
  id: string;
  title: string;
  subtitle: string;
  category: 'energy' | 'nutrition' | 'flavor' | 'design';
  description: string;
  highlights: string[];
  scientificBenefit: string;
  iconName: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface NutritionItem {
  name: string;
  per100ml: string;
  perCan500ml: string;
  nrvPercentage?: string;
  description: string;
}

export interface ActiveIngredient {
  name: string;
  amount: string;
  purpose: string;
  mechanism: string;
  iconName: string;
}

export interface Hotspot {
  id: string;
  title: string;
  tag: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  details: string;
  iconName: string;
}

export interface ComparisonProduct {
  id: string;
  name: string;
  sugar: number; // in grams per 500ml
  calories: number; // in kcal per 500ml
  caffeine: number; // in mg per 500ml
  crashRisk: 'Keines' | 'Gering' | 'Mittel' | 'Hoch';
  vitamins: boolean;
  flavorProfile: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'inhaltsstoffe' | 'konsum' | 'wirkung' | 'herkunft';
}
