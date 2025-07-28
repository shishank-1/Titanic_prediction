import React from 'react';
import { AlertCircle, CheckCircle, TrendingUp, User } from 'lucide-react';
import { Passenger, PredictionResult as PredictionResultType } from '../types/passenger';

interface PredictionResultProps {
  passenger: Passenger;
  result: PredictionResultType;
}

export const PredictionResult: React.FC<PredictionResultProps> = ({ passenger, result }) => {
  const probabilityPercentage = Math.round(result.survivalProbability * 100);
  const isHighSurvival = result.survivalProbability > 0.6;
  const isModerateSurvival = result.survivalProbability > 0.4;

  const getStatusColor = () => {
    if (isHighSurvival) return 'from-green-500 to-emerald-600';
    if (isModerateSurvival) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  const getStatusIcon = () => {
    if (isHighSurvival) return <CheckCircle className="w-6 h-6" />;
    if (isModerateSurvival) return <TrendingUp className="w-6 h-6" />;
    return <AlertCircle className="w-6 h-6" />;
  };

  const getStatusText = () => {
    if (isHighSurvival) return 'High Survival Probability';
    if (isModerateSurvival) return 'Moderate Survival Probability';
    return 'Low Survival Probability';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-blue-900" />
        <h2 className="text-2xl font-bold text-slate-800">Prediction Results</h2>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r ${getStatusColor()}`}>
            {getStatusIcon()}
            {getStatusText()}
          </div>
          <div className="mt-4">
            <div className="text-5xl font-bold text-slate-800 mb-2">
              {probabilityPercentage}%
            </div>
            <p className="text-slate-600">Survival Probability</p>
          </div>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-4 mb-6">
          <div
            className={`h-4 rounded-full bg-gradient-to-r ${getStatusColor()} transition-all duration-1000 ease-out`}
            style={{ width: `${probabilityPercentage}%` }}
          ></div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6">
          <h3 className="font-bold text-slate-800 mb-3">Analysis for {passenger.name}</h3>
          <p className="text-slate-700 leading-relaxed">{result.recommendation}</p>
        </div>

        {result.positiveFactors.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Positive Factors
            </h3>
            <ul className="space-y-2">
              {result.positiveFactors.map((factor, index) => (
                <li key={index} className="text-green-700 flex items-start gap-2">
                  <span>•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.riskFactors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Risk Factors
            </h3>
            <ul className="space-y-2">
              {result.riskFactors.map((factor, index) => (
                <li key={index} className="text-red-700 flex items-start gap-2">
                  <span>•</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};