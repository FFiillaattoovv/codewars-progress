import { squareArea } from './index';

test('should calculates the area of square, when the length of the circular arc A is given as the input and return the result rounded to two decimals', () => {
    expect(squareArea(2)).toBe(1.62);
    expect(squareArea(0)).toBe(0);
    expect(squareArea(14.05)).toBe(80);
})