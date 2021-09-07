import { between } from './index';

test('should return an array of all integers between the input parameters, including them', () => {
    expect(between(1, 4)).toEqual([1, 2, 3, 4]);
    expect(between(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
})
