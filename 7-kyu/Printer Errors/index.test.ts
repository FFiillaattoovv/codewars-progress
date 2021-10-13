import { G964 } from './index';

test('should return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string', () => {
    expect(G964.printerError('aaabbbbhaijjjm')).toBe('0/14');
    expect(G964.printerError('aaaxbbbbyyhwawiwjjjwwm')).toBe('8/22');
})