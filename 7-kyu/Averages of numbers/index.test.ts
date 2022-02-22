import { averages } from './index';

test('should return an array of the averages of each integer-number and his follower, if there is one', () => {
    expect(averages([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
    expect(averages([2, -2, 2, -2, 2])).toEqual([0, 0, 0, 0]);
    expect(averages([1, 3, 5, 1, -10])).toEqual([2, 4, 3, -4.5]);
})