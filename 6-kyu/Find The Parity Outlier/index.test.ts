import { findOutlier } from './index';

test('if all even numbers should return odd otherwise even', () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
    expect(findOutlier([0, 1, 2])).toBe(1);
})