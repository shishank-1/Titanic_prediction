import React, { useState } from 'react';
import { Header } from './components/Header';
import { PredictionForm } from './components/PredictionForm';
import { PredictionResult } from './components/PredictionResult';
import { DataVisualization } from './components/DataVisualization';
import { SamplePassengers } from './components/SamplePassengers';
import { About } from './components/About';
import { Passenger, PredictionResult as PredictionResultType } from './types/passenger';

function App() {
  const [currentPassenger, setCurrentPassenger] = useState<Passenger | null>(null);
  const [currentResult, setCurrentResult] = useState<PredictionResultType | null>(null);

  const handlePrediction = (passenger: Passenger, result: PredictionResultType) => {
    setCurrentPassenger(passenger);
    setCurrentResult(result);
  };

  const handleSelectSamplePassenger = (passenger: Passenger, result: PredictionResultType) => {
    setCurrentPassenger(passenger);
    setCurrentResult(result);
    // Scroll to results
    setTimeout(() => {
      document.getElementById('prediction-results')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <PredictionForm onPrediction={handlePrediction} />
          
          <div id="prediction-results">
            {currentPassenger && currentResult ? (
              <PredictionResult passenger={currentPassenger} result={currentResult} />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 flex items-center justify-center h-full">
                <div className="text-center text-slate-500">
                  <div className="text-4xl mb-4">⚓</div>
                  <p className="text-lg">Enter passenger details above to see survival prediction</p>
                  <p className="text-sm mt-2">Or select a famous passenger below</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mb-12">
          <SamplePassengers onSelectPassenger={handleSelectSamplePassenger} />
        </div>

        <div className="mb-12">
          <DataVisualization />
        </div>
      </main>

      <About />

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            In memory of the 1,514 souls lost on April 15, 1912 • Educational use of historical data
          </p>
          <p className="text-slate-500 text-sm mt-2">
            This model is for educational purposes and based on historical analysis
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;