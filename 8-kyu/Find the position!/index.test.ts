import { position } from './index';

test('when provided with a letter, should return its position in the alphabet', () => {
    expect(position('a')).toBe('Position of alphabet: 1');
    expect(position('z')).toBe('Position of alphabet: 26');
    expect(position('e')).toBe('Position of alphabet: 5');
})
