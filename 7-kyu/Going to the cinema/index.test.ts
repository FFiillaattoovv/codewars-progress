import { G964 } from './index';

test('should return the number of times a person must go to the movies so that the end result of System B, rounded up to the next dollar, is cheaper than System A', () => {
    expect(G964.movie(500, 15, 0.9)).toBe(43);
    expect(G964.movie(100, 10, 0.95)).toBe(24);
    expect(G964.movie(0, 10, 0.95)).toBe(2);
})