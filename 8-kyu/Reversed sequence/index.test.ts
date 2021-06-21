import { reverseSeq } from './index';

test('should returns an array of integers from n to 1 where n > 0', () => {
    expect(reverseSeq(5)).toEqual([5,4,3,2,1]);
    expect(reverseSeq(10)).toEqual([10, 9, 8, 7, 6, 5,4,3,2,1]);
})