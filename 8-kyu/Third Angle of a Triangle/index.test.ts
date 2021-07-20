import { otherAngle } from './index';

test('should return the third angle for two given inner angles of the triangle', () => {
    expect(otherAngle(30, 60)).toBe(90);
    expect(otherAngle(43, 78)).toBe(59);
    expect(otherAngle(10, 20)).toBe(150);
})
