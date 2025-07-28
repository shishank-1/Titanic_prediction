import React from 'react';
import { Star, User } from 'lucide-react';
import { samplePassengers } from '../data/sampleData';
import { predictionModel } from '../utils/predictionModel';

interface SamplePassengersProps {
  onSelectPassenger: (passenger: any, result: any) => void;
}

export const SamplePassengers: React.FC<SamplePassengersProps> = ({ onSelectPassenger }) => {
  const handleSelectPassenger = (passenger: any) => {
    const result = predictionModel.predict(passenger);
    onSelectPassenger(passenger, result);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-6 h-6 text-blue-900" />
        <h2 className="text-2xl font-bold text-slate-800">Famous Passengers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {samplePassengers.map((passenger, index) => {
          const result = predictionModel.predict(passenger);
          const probabilityPercentage = Math.round(result.survivalProbability * 100);
          
          return (
            <div
              key={index}
              className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
              onClick={() => handleSelectPassenger(passenger)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-slate-600" />
                  <h3 className="font-bold text-slate-800">{passenger.name}</h3>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  probabilityPercentage > 60 
                    ? 'bg-green-100 text-green-800' 
                    : probabilityPercentage > 40 
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {probabilityPercentage}%
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Class:</span>
                  <span className="font-medium">
                    {passenger.pclass === 1 ? 'First' : passenger.pclass === 2 ? 'Second' : 'Third'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Gender:</span>
                  <span className="font-medium capitalize">{passenger.sex}</span>
                </div>
                <div className="flex justify-between">
                  <span>Age:</span>
                  <span className="font-medium">{passenger.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span>Fare:</span>
                  <span className="font-medium">£{passenger.fare}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Click to view detailed prediction
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};