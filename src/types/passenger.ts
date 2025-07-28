export interface Passenger {
  name: string;
  pclass: number;
  sex: 'male' | 'female';
  age: number;
  sibsp: number;
  parch: number;
  fare: number;
  embarked: 'C' | 'Q' | 'S';
}

export interface PredictionResult {
  survivalProbability: number;
  riskFactors: string[];
  positiveFactors: string[];
  recommendation: string;
}