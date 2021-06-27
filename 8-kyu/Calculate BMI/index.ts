export function bmi(weight: number, height: number): string {
    const bmi: number = weight / height ** 2;
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 25.0) {
        return 'Normal';
    } else if (bmi <= 30.0) {
        return 'Overweight';
    } else if (bmi > 30) {
        return 'Obese';
    } else {
        throw new Error('Data error.');
    }
}