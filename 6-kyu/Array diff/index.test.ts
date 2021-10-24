import { arrayDiff } from './index';

test('should remove all values from list a, which are present in list b keeping their order', () => {
    expect(arrayDiff([], [4, 5])).toEqual([]);
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
})