import { bmi } from './index';

test('should return body mass index BMI', () => {
    expect(bmi(55, 1.80)).toBe('Underweight');
    expect(bmi(80, 1.80)).toBe('Normal');
    expect(bmi(95, 1.80)).toBe('Overweight');
    expect(bmi(110, 1.80)).toBe('Obese');
})