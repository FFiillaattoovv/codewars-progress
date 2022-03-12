import { G964 } from './index';

test('should return the maximum number after rotations', () => {
    expect(G964.maxRot(56789)).toBe(68957);
    expect(G964.maxRot(38458215)).toBe(85821534);
    expect(G964.maxRot(195881031)).toBe(988103115);
    expect(G964.maxRot(896219342)).toBe(962193428);
})