import { divide } from './index';

test('should return true if the number can be decomposed into two even numbers and false otherwise', () => {
    expect(divide(2)).toBe(false);
    expect(divide(3)).toBe(false);
    expect(divide(4)).toBe(true);
    expect(divide(5)).toBe(false);
    expect(divide(6)).toBe(true);
})