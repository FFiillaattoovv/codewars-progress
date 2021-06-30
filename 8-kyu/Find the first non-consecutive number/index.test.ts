import {firstNonConsecutive} from './index';

test('must return the first element of an array that is not sequential, if no such element is present, return null', () => {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6);
    expect(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8])).toBe(null);
    expect(firstNonConsecutive([- 8, - 7, - 6, - 5, - 3])).toBe(- 3);
})
