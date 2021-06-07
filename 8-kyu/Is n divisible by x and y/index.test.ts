import { isDivisible } from './index';

test('should return true if the number n is divisible by two numbers x AND y', () => {
    expect(isDivisible(3, 1, 3)).toBe(true);
    expect(isDivisible(3,3,4)).toBe(false);
    expect(isDivisible(8,3,4)).toBe(false);
    expect(isDivisible(12,3,4)).toBe(true);

})