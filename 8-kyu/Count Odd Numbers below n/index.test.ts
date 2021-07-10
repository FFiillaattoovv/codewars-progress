import { oddCount } from './index';

test('should return the number of positive odd numbers below n', () => {
    expect(oddCount(7)).toBe(3);
    expect(oddCount(15)).toBe(7);
})
