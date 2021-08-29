import { printArray } from './index';

test('should return the string with comma delimited elements of the array in the same order', () => {
    expect(printArray([2,4,5,2])).toBe('2,4,5,2');
})
