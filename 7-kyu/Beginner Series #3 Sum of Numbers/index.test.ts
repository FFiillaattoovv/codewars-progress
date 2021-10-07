import { getSum } from './index';

test('should find the sum of all the integers between and including them and return it. If the two numbers are equal should return a or b', () => {
    expect(getSum(1, 1)).toBe(1);
    expect(getSum(-1, 0)).toBe(-1);
    expect(getSum(-1, 2)).toBe(2);
    expect(getSum(-2, 5)).toBe(12);
})