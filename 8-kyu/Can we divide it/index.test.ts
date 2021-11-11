import { isDivideBy } from './index';

test('should to check if an integer number is divisible by each out of two arguments', () => {
    expect(isDivideBy(-12, 2, -6)).toBe(true);
    expect(isDivideBy(-12, 2, -5)).toBe(false);
})