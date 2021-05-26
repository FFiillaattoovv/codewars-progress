import { removeChar } from './index';

test('', () => {
    expect(removeChar('hello')).toBe('ell');
    expect(removeChar('bye')).toBe('y');
    expect(removeChar('hi')).toBe('');

})