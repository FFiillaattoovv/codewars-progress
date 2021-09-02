import { parseF } from './index';

test('should takes an input and returns a number or Nothing if conversion is not possible', () => {
    expect(parseF('1')).toBe(1);
    expect(parseF('2.5')).toBe(2.5);
    expect(parseF('abc')).toBe(null);
})
