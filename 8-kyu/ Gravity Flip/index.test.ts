import { flip } from './index';

test('if dir \'R\' should be sorted in ascending order, if dir \'L\' should be sorted in descending order', () => {
    expect(flip('R', [3, 2, 1, 2])).toEqual([1, 2, 2, 3]);
    expect(flip('L', [1, 4, 5, 3, 5])).toEqual([5, 5, 4, 3, 1]);
})
