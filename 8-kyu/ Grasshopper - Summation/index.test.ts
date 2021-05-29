import { summation } from './index';

test('should returns the summation of every number from 1 to num', () => {
    expect(summation(11)).toBe(66);
    expect(summation(1)).toBe(1);
    expect(summation(5)).toBe(15);
    expect(summation(34)).toBe(595);
    expect(summation(123)).toBe(7626);
})