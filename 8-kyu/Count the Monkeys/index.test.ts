import { monkeyCount } from './index';

test('should return array given the number (n), with all numbers up to and including that number, but excluding zero', () => {
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(monkeyCount(1)).toEqual([1]);
})