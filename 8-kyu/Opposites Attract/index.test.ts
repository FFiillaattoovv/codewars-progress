import { lovefunc } from './index';

test('should return true if the number of petals is even and false otherwise', () => {
    expect(lovefunc(1, 4)).toBe(true);
    expect(lovefunc(2, 2)).toBe(false);
    expect(lovefunc(0, 0)).toBe(false);
    expect(lovefunc(0, 1)).toBe(true);
})
