import { plural } from './index';

test('should take a number, and return true if a plural should be used with that number or false if not', () => {
    expect(plural(0)).toBe(true);
    expect(plural(0.5)).toBe(true);
    expect(plural(1)).toBe(false);
    expect(plural(100)).toBe(true);
    expect(plural(Infinity)).toBe(true);
})
