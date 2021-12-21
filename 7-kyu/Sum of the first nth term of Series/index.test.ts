import { SeriesSum } from './index';

test('should returns the sum of following series upto nth term(parameter)', () => {
    expect(SeriesSum(0)).toBe('0.00');
    expect(SeriesSum(1)).toBe('1.00');
    expect(SeriesSum(2)).toBe('1.25');
    expect(SeriesSum(3)).toBe('1.39');
})