import { repeatStr } from './index';

test('should repeats the given string string exactly n times', () => {
    expect(repeatStr(1, 'Hello')).toBe('Hello');
    expect(repeatStr(2, 'Hello')).toBe('HelloHello');
    expect(repeatStr(3, 'Hello')).toBe('HelloHelloHello');
    expect(repeatStr(4, 'Hello')).toBe('HelloHelloHelloHello');

})