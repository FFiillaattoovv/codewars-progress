import { isSortedAndHow } from './index';

test('should returns one of the following: "yes, ascending" - if the numbers in the array are sorted in an ascending order, "yes, descending" - if the numbers in the array are sorted in a descending order, "no" - otherwise', () => {
    expect(isSortedAndHow([1, 2])).toBe('yes, ascending');
    expect(isSortedAndHow([15, 7, 3, -8])).toBe('yes, descending');
    expect(isSortedAndHow([4, 2, 30])).toBe('no');
})