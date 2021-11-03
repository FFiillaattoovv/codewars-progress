import { G964 } from './index';

test('should return the k by formula (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k, or return -1', () => {
    expect(G964.digPow(89, 1)).toBe(1);
    expect(G964.digPow(92, 1)).toBe(-1);
    expect(G964.digPow(114, 3)).toBe(9);
})