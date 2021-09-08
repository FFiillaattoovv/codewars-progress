import { makeUpperCase } from './index';

test('should converts the input string to uppercase', () => {
    expect(makeUpperCase('1,2,3 hello world!')).toBe('1,2,3 HELLO WORLD!');
})
