import { smallEnough } from './index';

test('if all values in the array are below or equal to the limit value should return true, otherwise false', () => {
    expect(smallEnough([78, 33, 22, 44, 88, 9, 6], 87)).toBe(false);
    expect(smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(true);
})