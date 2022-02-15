import { G964 } from './index';

test('should return as an integer the result of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn\'t move', () => {
    expect(G964.gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25])).toBe(74);
    expect(G964.gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61])).toBe(41);
    expect(G964.gps(12, [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25])).toBe(219);
    expect(G964.gps(20, [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84])).toBe(80);
})