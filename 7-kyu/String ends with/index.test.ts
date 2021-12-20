import { solution } from './index';

test('should returns true if the first argument(string) passed in ends with the 2nd argument (also a string)', () => {
    expect(solution('abc', 'bc')).toBe(true);
    expect(solution('abc', '')).toBe(true);
    expect(solution('abc', 'd')).toBe(false);
})