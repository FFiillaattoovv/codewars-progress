import { divisors } from './index';

test('should return number of divisors of a positive integer n', () => {
    expect(divisors(1)).toBe(1);
    expect(divisors(10)).toBe(4);
})