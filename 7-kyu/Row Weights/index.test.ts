import { rowWeights } from './index';

test('should return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2', () => {
    expect(rowWeights([80])).toEqual([80, 0]);
    expect(rowWeights([100, 50])).toEqual([100, 50]);
    expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]);
})