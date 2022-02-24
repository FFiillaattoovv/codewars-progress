import { solve } from './index';

test('should return an array of the number of letters that occupy their positions in the alphabet for each word', () => {
    expect(solve(["abode", "ABc", "xyzD"])).toEqual([4, 3, 1]);
    expect(solve(["abide", "ABc", "xyz"])).toEqual([4, 3, 0]);
    expect(solve(["encode", "abc", "xyzD", "ABmD"])).toEqual([1, 3, 1, 3]);
})