import { digit } from './index';

test('should return true if given object is a digit (0-9), false otherwise', () => {
    expect(digit('7')).toBe(true);
    expect(digit('14')).toBe(false);
    expect(digit('')).toBe(false);
    expect(digit(' ')).toBe(false);
})
