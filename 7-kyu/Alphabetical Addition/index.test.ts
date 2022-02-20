import { addLetters } from './index';

test('should to add up letters to one letter', () => {
    expect(addLetters('a', 'b', 'c')).toBe('f');
    expect(addLetters('a', 'b')).toBe('c');
    expect(addLetters('z')).toBe('z');
    expect(addLetters()).toBe('z');
})