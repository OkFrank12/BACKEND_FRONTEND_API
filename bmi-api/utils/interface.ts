export interface iBmi {
  sex?: string;
  id?: string;
  height?: number;
  weight?: number;
  bmi?: number;
  bmiStatus?: string;
  calculateBmi?: () => number;
  getBmiStatus?: () => string;
}

export class BMI implements iBmi {
  weight: number;
  height: number;

  constructor(weight: number, height: number) {
    this.weight = weight;
    this.height = height;
  }

  calculateBMI(): number {
    // Formula to calculate BMI: weight / (height * height)
    const bmi = this.weight / (this.height * this.height);
    return bmi;
  }

  getBMIStatus(): string {
    // Get the calculated BMI
    const bmi = this.calculateBMI();

    // Determine the BMI status based on commonly used categories
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
}

// Example usage
const weight = 70; // in kilograms
const height = 1.75; // in meters

const bmiCalculator = new BMI(weight, height);
const bmi = bmiCalculator.calculateBMI();
const bmiStatus = bmiCalculator.getBMIStatus();

console.log("BMI:", bmi);
console.log("BMI Status:", bmiStatus);
