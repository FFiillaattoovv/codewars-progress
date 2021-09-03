import { cubeChecker } from './index';

test('should return true if the cuboid could have equal sides, return false otherwise', () => {
    expect(cubeChecker(1, 1)).toBe(true);
    expect(cubeChecker(8, 2)).toBe(true);
    expect(cubeChecker(27, 3)).toBe(true);
    expect(cubeChecker(0, 35)).toBe(false);
    expect(cubeChecker(452, 1)).toBe(false);
    expect(cubeChecker(785, 0)).toBe(false);
})
