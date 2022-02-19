import { evenNumbers } from './index';

test('should return a new array of length number containing the last even numbers from the original array (in the same order)', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([4, 6, 8]);
    expect(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)).toEqual([-8, 26]);
    expect(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)).toEqual([6]);
})