import {sumArray} from './index';

test('should return the sum without the highest and the lowest number', () => {
    expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
    expect(sumArray([6, 0, 1, 10, 10])).toBe(17);
    expect(sumArray([])).toBe(0);
    expect(sumArray(null)).toBe(0);
    expect(sumArray([1])).toBe(0);
})