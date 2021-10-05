import { xo } from './index';

test('if a string has the same amount of x and o should return true, false otherwise ', () => {
    expect(xo('xo')).toBe(true);
    expect(xo('xxOo')).toBe(true);
    expect(xo('xxxm')).toBe(false);
    expect(xo('Oo')).toBe(false);
    expect(xo('ooom')).toBe(false);
})