import { goals } from './index';

test('should return total number of goals in all three leagues', () => {
    expect(goals(5, 10, 2)).toBe(17);
})
