import { subtractSum } from './index';

test('should sum all the digits of n, subtract the sum from n, and if the new n is in the list below return the associated fruit, otherwise return back to task 1.', () => {
    expect(subtractSum(10)).toBe('apple');
})
