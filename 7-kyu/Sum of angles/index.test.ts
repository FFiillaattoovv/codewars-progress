import { angle } from './index';

test('should return the total sum of internal angles (in degrees) in an n-sided simple polygon, N will be greater than 2', () => {
    expect(angle(3)).toBe(180);
    expect(angle(4)).toBe(360);
})