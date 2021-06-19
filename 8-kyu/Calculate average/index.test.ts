import { findAverage } from './index';

test('should return the average of the numbers in a given array', () => {
    expect(findAverage([1,1,1])).toBe(1);
    expect(findAverage([])).toBe(0);
})