import { getEvenNumbers } from './index';

test('should return even numbers', () => {
    expect(getEvenNumbers([1,2,3,6,8,10])).toEqual([2,6,8,10]);
    expect(getEvenNumbers([1,2])).toEqual([2]);
    expect(getEvenNumbers([13,15])).toEqual([]);
})