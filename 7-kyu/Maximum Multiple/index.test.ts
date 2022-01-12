import { maxMultiple } from './index';

test('should return the largest integer N , such that, N is divisible by divisor, N is less than or equal to bound, N is greater than 0', () => {
    expect(maxMultiple(2, 7)).toBe(6);
    expect(maxMultiple(3, 10)).toBe(9);
    expect(maxMultiple(7, 17)).toBe(14);
    expect(maxMultiple(10, 50)).toBe(50);
    expect(maxMultiple(37, 200)).toBe(185);
    expect(maxMultiple(7, 100)).toBe(98);
})