import { seven } from './index';

test('should return array of numbers, the first being the last number m, the second one being the number of steps to get the result', () => {
    expect(seven(1021)).toEqual([10, 2]);
    expect(seven(477557101)).toEqual([28, 7]);
    expect(seven(1603)).toEqual([7, 2]);
    expect(seven(371)).toEqual([35, 1]);
})