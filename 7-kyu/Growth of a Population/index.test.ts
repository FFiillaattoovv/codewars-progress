import { G964 } from './index';

test('should return number of entire years needed to get a population greater or equal to p', () => {
    expect(G964.nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(G964.nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
})