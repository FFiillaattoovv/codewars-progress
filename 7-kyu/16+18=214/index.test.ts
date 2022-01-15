import { add } from './index';

test('should return sum two integer does not of carrying over numbers and just writes down every number it calculates', () => {
    expect(add(2, 11)).toBe(13);
    expect(add(0, 1)).toBe(1);
    expect(add(0, 0)).toBe(0);
    expect(add(122, 81)).toBe(1103);
})