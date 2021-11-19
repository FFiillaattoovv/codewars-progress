import { findDifference } from './index';

test('should find the difference of the cuboids\' and return result', () => {
    expect(findDifference([3, 2, 5], [1, 4, 4])).toBe(14);
    expect(findDifference([15, 20, 25], [10, 30, 25])).toBe(0);
})