import { growingPlant } from './index';

test('should return number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count)', () => {
    expect(growingPlant(100, 10, 910)).toBe(10);
    expect(growingPlant(10, 9, 4)).toBe(1);
    expect(growingPlant(5, 2, 5)).toBe(1);
    expect(growingPlant(5, 2, 6)).toBe(2);
})