import { multiply } from './index';

test('should return the result of the multiplication', () => {
    const result = multiply(2, 5);
    expect(result).toBe(10);
})