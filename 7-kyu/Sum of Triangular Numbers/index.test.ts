import { sumTriangularNumbers } from './index';

test('should return the sum of Triangular Numbers up-to-and-including the nth Triangular Number', () => {
    expect(sumTriangularNumbers(6)).toBe(56);
    expect(sumTriangularNumbers(34)).toBe(7140);
    expect(sumTriangularNumbers(-291)).toBe(0);
})