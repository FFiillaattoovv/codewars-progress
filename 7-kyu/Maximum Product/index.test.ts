import { adjacentElementsProduct } from './index';

test('should return the maximum product obtained from multiplying 2 adjacent numbers in the array', () => {
    expect(adjacentElementsProduct([5, 8])).toBe(40);
    expect(adjacentElementsProduct([1, 2, 3])).toBe(6);
    expect(adjacentElementsProduct([1, 5, 10, 9])).toBe(90);
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);
    expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50);
})