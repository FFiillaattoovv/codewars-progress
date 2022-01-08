import { G964 } from './index';

test('should return numbers of digits d used in the writing of all the k**2', () => {
    expect(G964.nbDig(10, 1)).toBe(4);
    expect(G964.nbDig(25, 1)).toBe(11);
    expect(G964.nbDig(5750, 0)).toBe(4700);
    expect(G964.nbDig(11011, 2)).toBe(9481);
    expect(G964.nbDig(12224, 8)).toBe(7733);
})