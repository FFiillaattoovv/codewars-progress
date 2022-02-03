import { Kata } from './index';

test('should return the number with the most digits', () => {
    expect(Kata.findLongest([1, 10, 100])).toBe(100);
    expect(Kata.findLongest([9000, 8, 800])).toBe(9000);
    expect(Kata.findLongest([8, 900, 500])).toBe(900);
    expect(Kata.findLongest([8, 500, 900])).toBe(500);
})