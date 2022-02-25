import { sumCubes } from './index';

test('should return sum all the cubed values from 1 to n', () => {
    expect(sumCubes(1)).toBe(1);
    expect(sumCubes(2)).toBe(9);
    expect(sumCubes(3)).toBe(36);
    expect(sumCubes(4)).toBe(100);
})