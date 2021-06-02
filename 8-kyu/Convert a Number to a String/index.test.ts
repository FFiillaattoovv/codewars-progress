import { numberToString } from './index';

test('should convert a Number to a String', () => {
    expect(numberToString(12)).toBe('12');
    expect(numberToString(0)).toBe('0');
    expect(numberToString(555)).toBe('555');
})