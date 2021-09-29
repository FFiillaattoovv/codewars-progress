import isSquare from './index';

test('if the number is a square number must return true otherwise false', () => {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare(-12)).toBe(false);
    expect(isSquare(0)).toBe(true);
    expect(isSquare(3)).toBe(false);
    expect(isSquare(4)).toBe(true);
    expect(isSquare(25)).toBe(true);
    expect(isSquare(26)).toBe(false);
    expect(isSquare(625)).toBe(true);
})