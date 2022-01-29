import { flattenAndSort } from './index';

test('should return the flattened version of the array with all the integers in the sorted (ascending) order', () => {
    expect(flattenAndSort([])).toEqual([]);
    expect(flattenAndSort([[], []])).toEqual([]);
    expect(flattenAndSort([[], [1]])).toEqual([1]);
    expect(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
})