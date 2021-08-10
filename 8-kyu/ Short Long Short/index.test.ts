import { shortLongShort } from './index';

test('given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside', () => {
    expect(shortLongShort('45', '1')).toBe('1451');
    expect(shortLongShort('U', 'False')).toBe('UFalseU');
    expect(shortLongShort('Soon', 'Me')).toBe('MeSoonMe');
})
