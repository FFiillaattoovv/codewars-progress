import { index } from './index';

test('should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1', () => {
    expect(index([1, 2, 3, 4], 2)).toBe(9);
    expect(index([1, 3, 10, 100], 3)).toBe(1000000);
    expect(index( [1, 2, 3], 3)).toBe(-1);
})
