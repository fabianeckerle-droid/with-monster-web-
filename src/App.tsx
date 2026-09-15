import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductFeatures } from './components/ProductFeatures';
import { CanExplorer } from './components/CanExplorer';
import { ActiveIngredients } from './components/ActiveIngredients';
import { NutritionComparison } from './components/NutritionComparison';
import { FlavorSensory } from './components/FlavorSensory';
import { EnergyTimeline } from './components/EnergyTimeline';
import { PackFormats } from './components/PackFormats';
import { ProductFaq } from './components/ProductFaq';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToExplorer = () => {
    const el = document.getElementById('explorer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const el = document.getElementById('funktionen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#f1f5f9] selection:bg-cyan-500 selection:text-black font-sans">
      {/* Sticky Header */}
      <Navbar onExploreClick={scrollToExplorer} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onExploreClick={scrollToExplorer}
          onFeaturesClick={scrollToFeatures}
        />
        
        <ProductFeatures />
        
        <CanExplorer />
        
        <ActiveIngredients />
        
        <NutritionComparison />
        
        <FlavorSensory />
        
        <EnergyTimeline />
        
        <PackFormats />
        
        <ProductFaq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
