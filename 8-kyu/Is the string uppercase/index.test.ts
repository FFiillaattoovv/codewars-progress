import { isUpperCase } from './index';

test('should return true if all characters are uppercase', () => {
    expect(isUpperCase('c')).toBe(false);
    expect(isUpperCase('C')).toBe(true);
    expect(isUpperCase('')).toBe(true);
    expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toBe(false);
    expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toBe(true);
    expect(isUpperCase('HELLO I AM DONALD')).toBe(true);
})
