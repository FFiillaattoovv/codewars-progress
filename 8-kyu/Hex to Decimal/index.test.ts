import { hexToDec } from './index';

test('should converts hex number (given as a string) to a decimal number', () => {
    expect(hexToDec('1')).toBe(1);
    expect(hexToDec('a')).toBe(10);
    expect(hexToDec('10')).toBe(16);
    expect(hexToDec('FF')).toBe(255);
    expect(hexToDec('-C')).toBe(-12);
})
