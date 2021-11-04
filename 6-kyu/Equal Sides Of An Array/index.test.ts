import { findEvenIndex } from './index';

test('should return the lowest index N where the side to the left of N is equal to the side to the right of N, otherwise return -1', () => {
    expect(findEvenIndex([1,2,3,4,3,2,1])).toBe(3);
    expect(findEvenIndex([1,100,50,-51,1,1])).toBe(1);
    expect(findEvenIndex([1,2,3,4,5,6])).toBe(-1);
    expect(findEvenIndex([20,10,30,10,10,15,35])).toBe(3);
    expect(findEvenIndex([20,10,-80,10,10,15,35])).toBe(0);
    expect(findEvenIndex([10,-80,10,10,15,35,20])).toBe(6);
})