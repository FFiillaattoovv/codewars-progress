import { duplicateEncode } from './index';

test('should return a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string', () => {
    expect(duplicateEncode('din')).toBe('(((');
    expect(duplicateEncode('recede')).toBe('()()()');
    expect(duplicateEncode('Success')).toBe(')())())');
    expect(duplicateEncode('(( @')).toBe('))((');
})