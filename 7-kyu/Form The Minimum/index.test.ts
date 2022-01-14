import { minValue } from './index';

test('should return the smallest number that could be formed from digits, using the digits only once', () => {
    expect(minValue([5, 7, 9, 5, 7])).toBe(579);
    expect(minValue([6, 7, 8, 7, 6, 6])).toBe(678);
    expect(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])).toBe(356789);
});