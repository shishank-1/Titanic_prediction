import React from 'react';
import { Info, Database, Brain, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Info className="w-8 h-8 text-blue-900" />
            <h2 className="text-4xl font-bold text-slate-800">About This Project</h2>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            This machine learning model analyzes passenger characteristics to predict survival probability during the Titanic disaster, 
            based on historical data and documented survival patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
            <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">Historical Data</h3>
            <p className="text-slate-600 leading-relaxed">
              Based on the famous Titanic dataset containing passenger information including class, gender, age, family relationships, and fare details.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
            <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">Predictive Model</h3>
            <p className="text-slate-600 leading-relaxed">
              Utilizes weighted scoring based on key survival factors like "women and children first" protocol, passenger class, and social circumstances.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 text-center">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">Key Insights</h3>
            <p className="text-slate-600 leading-relaxed">
              Reveals how social class, gender, age, and family status influenced survival chances during one of history's most famous maritime disasters.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Understanding the Factors</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Primary Factors</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Gender:</strong> Women had significantly higher survival rates due to "women and children first" protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Passenger Class:</strong> First-class passengers had better access to lifeboats and safety information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Age:</strong> Children were prioritized alongside women in evacuation procedures</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Secondary Factors</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Family Size:</strong> Small families had better coordination; large families faced difficulties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Fare Amount:</strong> Higher fares often indicated better cabin locations and quicker access to decks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Embarkation Port:</strong> Different ports showed varying survival patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};