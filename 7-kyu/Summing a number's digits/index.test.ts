import { sumDigits } from './index';

test('should returns the sum of the absolute value of each of the number\'s decimal digits', () => {
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(99)).toBe(18);
    expect(sumDigits(-32)).toBe(5);
})