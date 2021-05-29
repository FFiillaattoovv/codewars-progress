import { removeChar } from './index';

test('should removes the first and last characters of a string', () => {
    expect(removeChar('hello')).toBe('ell');
    expect(removeChar('bye')).toBe('y');
    expect(removeChar('hi')).toBe('');

})