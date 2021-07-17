import { twoSort } from './index';

test('should sort array strings alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value the returned value must be a string, and have "***" between each of its letters', () => {
    expect(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])).toBe('b***i***t***c***o***i***n');
    expect(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])).toBe('a***r***e');
    expect(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"])).toBe('a***b***o***u***t');
    expect(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"])).toBe('c***o***d***e');
    expect(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"])).toBe('L***e***t***s');
})
