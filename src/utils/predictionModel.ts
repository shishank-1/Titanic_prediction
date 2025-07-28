import { Passenger, PredictionResult } from '../types/passenger';

// Survival prediction model based on Titanic historical data
export class TitanicPredictionModel {
  private readonly weights = {
    pclass: { 1: 0.25, 2: 0.05, 3: -0.25 },
    sex: { female: 0.35, male: -0.35 },
    age: { child: 0.15, adult: 0, elderly: -0.1 },
    family: { alone: -0.05, small: 0.1, large: -0.15 },
    fare: { low: -0.1, medium: 0, high: 0.15 },
    embarked: { C: 0.1, Q: -0.05, S: 0 }
  };

  predict(passenger: Passenger): PredictionResult {
    let score = 0.5; // Base survival rate
    const riskFactors: string[] = [];
    const positiveFactors: string[] = [];

    // Class factor
    score += this.weights.pclass[passenger.pclass as keyof typeof this.weights.pclass];
    if (passenger.pclass === 1) {
      positiveFactors.push('First-class passenger');
    } else if (passenger.pclass === 3) {
      riskFactors.push('Third-class passenger');
    }

    // Gender factor (most significant)
    score += this.weights.sex[passenger.sex];
    if (passenger.sex === 'female') {
      positiveFactors.push('Female passenger (women and children first)');
    } else {
      riskFactors.push('Male passenger');
    }

    // Age factor
    const ageCategory = passenger.age < 16 ? 'child' : passenger.age > 60 ? 'elderly' : 'adult';
    score += this.weights.age[ageCategory];
    if (ageCategory === 'child') {
      positiveFactors.push('Child passenger (women and children first)');
    } else if (ageCategory === 'elderly') {
      riskFactors.push('Elderly passenger');
    }

    // Family size factor
    const familySize = passenger.sibsp + passenger.parch;
    const familyCategory = familySize === 0 ? 'alone' : familySize <= 3 ? 'small' : 'large';
    score += this.weights.family[familyCategory];
    if (familyCategory === 'small') {
      positiveFactors.push('Traveling with small family');
    } else if (familyCategory === 'alone') {
      riskFactors.push('Traveling alone');
    } else {
      riskFactors.push('Traveling with large family');
    }

    // Fare factor (wealth indicator)
    const fareCategory = passenger.fare < 20 ? 'low' : passenger.fare > 50 ? 'high' : 'medium';
    score += this.weights.fare[fareCategory];
    if (fareCategory === 'high') {
      positiveFactors.push('High fare paid (likely wealthy)');
    } else if (fareCategory === 'low') {
      riskFactors.push('Low fare paid');
    }

    // Embarkation factor
    score += this.weights.embarked[passenger.embarked];
    if (passenger.embarked === 'C') {
      positiveFactors.push('Embarked at Cherbourg');
    }

    // Normalize score to probability
    const probability = Math.max(0.05, Math.min(0.95, score));

    // Generate recommendation
    const recommendation = this.generateRecommendation(probability, passenger);

    return {
      survivalProbability: probability,
      riskFactors,
      positiveFactors,
      recommendation
    };
  }

  private generateRecommendation(probability: number, passenger: Passenger): string {
    if (probability > 0.7) {
      return `${passenger.name} has a high chance of survival. Key advantages include being ${passenger.sex === 'female' ? 'female' : 'a child'} and traveling in ${passenger.pclass === 1 ? 'first' : 'second'} class.`;
    } else if (probability > 0.4) {
      return `${passenger.name} has a moderate chance of survival. Some factors work in their favor, but others increase risk.`;
    } else {
      return `${passenger.name} faces significant challenges for survival. Being a ${passenger.sex} passenger in ${passenger.pclass === 3 ? 'third' : 'lower'} class reduces chances considerably.`;
    }
  }
}

export const predictionModel = new TitanicPredictionModel();