import { findSmallestInt } from './index';

test('should returns the smallest integer in the array', () => {
    expect(findSmallestInt([1, 4, 7, 55, 11, 0, 5, 44])).toBe(0);
    expect(findSmallestInt([78, 56, 232, 412, 228])).toBe(56);
    expect(findSmallestInt([-3, 6, 22, 2, 11])).toBe(-3);

})