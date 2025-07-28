import React, { useState } from 'react';
import { User, Users, DollarSign, Ship } from 'lucide-react';
import { Passenger, PredictionResult } from '../types/passenger';
import { predictionModel } from '../utils/predictionModel';

interface PredictionFormProps {
  onPrediction: (passenger: Passenger, result: PredictionResult) => void;
}

export const PredictionForm: React.FC<PredictionFormProps> = ({ onPrediction }) => {
  const [passenger, setPassenger] = useState<Passenger>({
    name: '',
    pclass: 3,
    sex: 'male',
    age: 30,
    sibsp: 0,
    parch: 0,
    fare: 15,
    embarked: 'S'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passenger.name.trim()) return;
    
    const result = predictionModel.predict(passenger);
    onPrediction(passenger, result);
  };

  const handleInputChange = (field: keyof Passenger, value: any) => {
    const updatedPassenger = { ...passenger, [field]: value };
    setPassenger(updatedPassenger);
    
    if (passenger.name.trim()) {
      const result = predictionModel.predict(updatedPassenger);
      onPrediction(updatedPassenger, result);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-blue-900" />
        <h2 className="text-2xl font-bold text-slate-800">Passenger Information</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Passenger Name
          </label>
          <input
            type="text"
            value={passenger.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Enter passenger name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Passenger Class
            </label>
            <select
              value={passenger.pclass}
              onChange={(e) => handleInputChange('pclass', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value={1}>First Class</option>
              <option value={2}>Second Class</option>
              <option value={3}>Third Class</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Gender
            </label>
            <select
              value={passenger.sex}
              onChange={(e) => handleInputChange('sex', e.target.value as 'male' | 'female')}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Age
            </label>
            <input
              type="number"
              value={passenger.age}
              onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
              min="0"
              max="100"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Siblings/Spouses
            </label>
            <input
              type="number"
              value={passenger.sibsp}
              onChange={(e) => handleInputChange('sibsp', parseInt(e.target.value))}
              min="0"
              max="10"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Parents/Children
            </label>
            <input
              type="number"
              value={passenger.parch}
              onChange={(e) => handleInputChange('parch', parseInt(e.target.value))}
              min="0"
              max="10"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Fare (£)
            </label>
            <input
              type="number"
              value={passenger.fare}
              onChange={(e) => handleInputChange('fare', parseFloat(e.target.value))}
              min="0"
              step="0.01"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              <Ship className="w-4 h-4 inline mr-1" />
              Port of Embarkation
            </label>
            <select
              value={passenger.embarked}
              onChange={(e) => handleInputChange('embarked', e.target.value as 'C' | 'Q' | 'S')}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="S">Southampton</option>
              <option value="C">Cherbourg</option>
              <option value="Q">Queenstown</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-800 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          Predict Survival Probability
        </button>
      </form>
    </div>
  );
};