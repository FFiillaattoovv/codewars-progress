import { findMultiples } from './index';

test('should returns a list of its multiples up to another value, limit', () => {
    expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
    expect(findMultiples(1, 2)).toEqual([1, 2]);
    expect(findMultiples(5, 7)).toEqual([5]);
    expect(findMultiples(4, 27)).toEqual([4, 8, 12, 16, 20, 24]);
})
