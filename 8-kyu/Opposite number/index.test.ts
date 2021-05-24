import { Kata } from './index';

test('should given a number, find its opposite', () => {
    expect(Kata.opposite(1)).toBe(-1);
    expect(Kata.opposite(-5)).toBe(5);
    expect(Kata.opposite(-0)).toBe(0);
    expect(Kata.opposite(0)).toBe(-0);
})