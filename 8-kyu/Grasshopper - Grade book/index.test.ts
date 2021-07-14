import { getGrade } from './index';

test('should returns the average of the three scores passed to it and returns the letter value associated with that grade', () => {
    expect(getGrade(95, 90, 93)).toBe('A');
    expect(getGrade(100, 100, 100)).toBe('A');
})
