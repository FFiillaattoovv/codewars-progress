import { arr } from './index';

test('should return an array with the numbers 0 to N-1 in it', () => {
    expect(arr(5)).toEqual([0,1,2,3,4]);
    expect(arr()).toEqual([]);
})
