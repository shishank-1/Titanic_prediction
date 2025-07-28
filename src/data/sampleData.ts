import { Passenger } from '../types/passenger';

export const samplePassengers: Passenger[] = [
  {
    name: "Rose DeWitt Bukater",
    pclass: 1,
    sex: 'female',
    age: 17,
    sibsp: 1,
    parch: 1,
    fare: 512.33,
    embarked: 'S'
  },
  {
    name: "Jack Dawson",
    pclass: 3,
    sex: 'male',
    age: 20,
    sibsp: 0,
    parch: 0,
    fare: 7.25,
    embarked: 'S'
  },
  {
    name: "Margaret Brown",
    pclass: 1,
    sex: 'female',
    age: 44,
    sibsp: 0,
    parch: 0,
    fare: 27.72,
    embarked: 'C'
  },
  {
    name: "Thomas Andrews",
    pclass: 1,
    sex: 'male',
    age: 39,
    sibsp: 0,
    parch: 0,
    fare: 0,
    embarked: 'S'
  }
];

export const datasetStats = {
  totalPassengers: 891,
  survivors: 342,
  survivalRate: 0.384,
  classBreakdown: {
    first: { total: 216, survived: 136, rate: 0.630 },
    second: { total: 184, survived: 87, rate: 0.473 },
    third: { total: 491, survived: 119, rate: 0.242 }
  },
  genderBreakdown: {
    female: { total: 314, survived: 233, rate: 0.742 },
    male: { total: 577, survived: 109, rate: 0.189 }
  },
  ageBreakdown: {
    children: { total: 83, survived: 38, rate: 0.458 },
    adults: { total: 708, survived: 274, rate: 0.387 },
    elderly: { total: 100, survived: 30, rate: 0.300 }
  }
};