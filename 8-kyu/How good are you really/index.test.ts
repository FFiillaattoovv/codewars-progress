import {betterThanAverage} from './index';

test('should return \'true\' if \'yourPoints\' better the average, else \'false\'', () => {
    expect(betterThanAverage([2, 3], 5)).toBe(true);
})
