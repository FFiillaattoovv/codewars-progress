import { countRedBeads } from './index';

test('should return number of red beads, if there are less than 2 blue beads return 0', () => {
    expect(countRedBeads(0)).toBe(0);
    expect(countRedBeads(1)).toBe(0);
    expect(countRedBeads(3)).toBe(4);
    expect(countRedBeads(5)).toBe(8);
})