import { getAverage } from './index';

test('should return the average of the given array rounded down to its nearest integer', () => {
    expect(getAverage([2,2,2,2])).toBe(2);
    expect(getAverage([1,2,3,4,5,])).toBe(3);
    expect(getAverage([1,1,1,1,1,1,1,2])).toBe(1);
    expect(getAverage([1,5,87,45,8,8])).toBe(25);
    expect(getAverage([5,7,13,18,14,2,8,19,12,17,15,11,13])).toBe(11);
})