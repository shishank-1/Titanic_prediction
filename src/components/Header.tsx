import React from 'react';
import { Ship, Anchor } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Anchor className="w-12 h-12 text-amber-400" />
            <Ship className="w-16 h-16 text-blue-300" />
            <Anchor className="w-12 h-12 text-amber-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
            Titanic Survival Prediction
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 font-light max-w-3xl mx-auto leading-relaxed">
            Discover the factors that determined survival aboard the RMS Titanic using advanced predictive modeling
          </p>
          
          <div className="mt-8 text-sm text-slate-300">
            <p>April 15, 1912 • 2,224 souls aboard • 1,514 lives lost</p>
          </div>
        </div>
      </div>
    </header>
  );
};