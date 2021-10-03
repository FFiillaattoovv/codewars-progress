import { distinct } from './index';

test('should remove duplicates from an array of numbers and returns them as a result', () => {
    expect(distinct([1,1,2])).toEqual([1,2]);
})