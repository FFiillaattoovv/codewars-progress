import { squareSum } from './index';

test('should returns squares each number passed into it and then sums the results together', () => {
    expect(squareSum([0, 3, 4, 5])).toBe(50);
    expect(squareSum([1,2])).toBe(5);
    expect(squareSum([1, 2, 3, 4])).toBe(30);
    expect(squareSum([])).toBe(0);

})