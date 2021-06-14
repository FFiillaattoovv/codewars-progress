import { past } from './index';

test('should returns the time since midnight in milliseconds', () => {
    expect(past(0, 1, 1)).toBe(61000);
    expect(past(1, 1, 1)).toBe(3661000);
    expect(past(0, 0, 0)).toBe(0);
})