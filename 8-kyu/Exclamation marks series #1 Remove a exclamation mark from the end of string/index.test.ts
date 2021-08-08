import { remove } from './index';

test('should remove a exclamation mark from the end of string', () => {
    expect(remove('Hi!')).toBe('Hi');
    expect(remove('!Hi')).toBe('!Hi');
    expect(remove('Hi! Hi!')).toBe('Hi! Hi');
})
