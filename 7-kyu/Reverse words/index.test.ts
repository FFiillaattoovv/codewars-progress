import { reverseWords } from './index';

test('should reverse each word in the string', () => {
    expect(reverseWords('apple')).toBe('elppa');
    expect(reverseWords('a b c d')).toBe('a b c d');
    expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
    expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow');
})