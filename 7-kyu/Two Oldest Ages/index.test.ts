import { twoOldestAges } from './index';

test('should return the two highest numbers within the array', () => {
    expect(twoOldestAges([1, 5, 87, 45, 8, 8])).toEqual([45, 87]);
})