import { positiveSum } from './index';

test('should returns sum of all of the positives ones numbers', () => {
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([0, -1, 2, 5, -4])).toBe(7);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
    expect(positiveSum([0, 0, 0])).toBe(0);
    expect(positiveSum([0])).toBe(0);
})