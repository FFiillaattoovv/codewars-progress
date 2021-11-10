import { doubleChar } from './index';

test('should return a string in which each character (case-sensitive) is repeated once', () => {
    expect(doubleChar('abcd')).toBe('aabbccdd');
    expect(doubleChar('Adidas')).toBe('AAddiiddaass');
    expect(doubleChar('1337')).toBe('11333377');
    expect(doubleChar('%^&*(')).toBe('%%^^&&**((');
})