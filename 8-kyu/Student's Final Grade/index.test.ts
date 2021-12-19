import { finalGrade } from './index';

test('should return a number (final grade) using four types of final grades', () => {
    expect(finalGrade(100, 12)).toBe(100);
    expect(finalGrade(85, 5)).toBe(90);
    expect(finalGrade(55, 3)).toBe(75);
    expect(finalGrade(55, 0)).toBe(0);
})