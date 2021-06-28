import { grow } from './index';

test('should returns the result of multiplying the values together in order', () => {
    expect(grow([1, 2, 3, 4])).toBe(24);
    expect(grow([2, 2, 2, 2, 2, 2])).toBe(64);
    expect(grow([1, 2, 3])).toBe(6);
})