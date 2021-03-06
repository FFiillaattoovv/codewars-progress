import { duplicateCount } from './index';

test('should return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string', () => {
    expect(duplicateCount('')).toBe(0);
    expect(duplicateCount('abcde')).toBe(0);
    expect(duplicateCount('aabbcde')).toBe(2);
    expect(duplicateCount('aabBcde')).toBe(2);
    expect(duplicateCount('Indivisibility')).toBe(1);
    expect(duplicateCount('Indivisibilities')).toBe(2);
})