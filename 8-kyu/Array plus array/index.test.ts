import { arrayPlusArray } from './index';

test('should return the sum of two arrays', () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21);
    expect(arrayPlusArray([-1, -2, -3, -4], [10])).toBe(0);
})