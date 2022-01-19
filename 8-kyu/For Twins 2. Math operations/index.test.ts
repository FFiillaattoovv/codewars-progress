import { iceBrickVolume } from './index';

test('should return the brick\'s volume', () => {
    expect(iceBrickVolume(1, 10, 2)).toBe(16);
    expect(iceBrickVolume(5, 30, 7)).toBe(1150);
})