import { noOdds } from './index';

test('should returns the values of an array that are not odd', () => {
    expect(noOdds([0, 1])).toEqual([0]);
    expect(noOdds([0, 1, 2, 3])).toEqual([0, 2]);
});