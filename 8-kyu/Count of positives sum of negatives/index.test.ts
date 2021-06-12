import { countPositivesSumNegatives } from './index';

test('should return the count of positives numbers and sum of negative numbers. If the input array is empty or null, return an empty array', () => {
    expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
    expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toEqual([8, -50]);
})