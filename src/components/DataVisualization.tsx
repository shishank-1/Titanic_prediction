import React from 'react';
import { BarChart3, Users, TrendingUp } from 'lucide-react';
import { datasetStats } from '../data/sampleData';

export const DataVisualization: React.FC = () => {
  const StatCard = ({ title, value, subtitle, color }: { 
    title: string; 
    value: string; 
    subtitle: string; 
    color: string; 
  }) => (
    <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-700">{title}</h3>
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
      </div>
      <div className="text-2xl font-bold text-slate-800 mb-1">{value}</div>
      <div className="text-sm text-slate-600">{subtitle}</div>
    </div>
  );

  const SurvivalBar = ({ label, survived, total, rate }: {
    label: string;
    survived: number;
    total: number;
    rate: number;
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="text-sm text-slate-600">{Math.round(rate * 100)}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
          style={{ width: `${rate * 100}%` }}
        ></div>
      </div>
      <div className="text-xs text-slate-500">
        {survived} of {total} passengers survived
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-blue-900" />
          <h2 className="text-2xl font-bold text-slate-800">Dataset Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Passengers"
            value={datasetStats.totalPassengers.toString()}
            subtitle="In the dataset"
            color="bg-blue-500"
          />
          <StatCard
            title="Survivors"
            value={datasetStats.survivors.toString()}
            subtitle="Made it to safety"
            color="bg-green-500"
          />
          <StatCard
            title="Overall Survival Rate"
            value={`${Math.round(datasetStats.survivalRate * 100)}%`}
            subtitle="Passengers who survived"
            color="bg-amber-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-blue-900" />
          <h2 className="text-2xl font-bold text-slate-800">Survival Rates by Class</h2>
        </div>

        <div className="space-y-6">
          <SurvivalBar
            label="First Class"
            survived={datasetStats.classBreakdown.first.survived}
            total={datasetStats.classBreakdown.first.total}
            rate={datasetStats.classBreakdown.first.rate}
          />
          <SurvivalBar
            label="Second Class"
            survived={datasetStats.classBreakdown.second.survived}
            total={datasetStats.classBreakdown.second.total}
            rate={datasetStats.classBreakdown.second.rate}
          />
          <SurvivalBar
            label="Third Class"
            survived={datasetStats.classBreakdown.third.survived}
            total={datasetStats.classBreakdown.third.total}
            rate={datasetStats.classBreakdown.third.rate}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-blue-900" />
          <h2 className="text-2xl font-bold text-slate-800">Survival Rates by Gender</h2>
        </div>

        <div className="space-y-6">
          <SurvivalBar
            label="Female"
            survived={datasetStats.genderBreakdown.female.survived}
            total={datasetStats.genderBreakdown.female.total}
            rate={datasetStats.genderBreakdown.female.rate}
          />
          <SurvivalBar
            label="Male"
            survived={datasetStats.genderBreakdown.male.survived}
            total={datasetStats.genderBreakdown.male.total}
            rate={datasetStats.genderBreakdown.male.rate}
          />
        </div>
      </div>
    </div>
  );
};