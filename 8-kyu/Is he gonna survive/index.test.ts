import { hero } from './index';

test('should return true if half of the bullet is greater than or equal to dragons, false otherwise', () => {
    expect(hero(10, 5)).toBe(true);
    expect(hero(1500, 751)).toBe(false);
    expect(hero(0, 1)).toBe(false);
})