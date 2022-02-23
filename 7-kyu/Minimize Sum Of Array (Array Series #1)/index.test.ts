import { minSum } from './index';

test('should return the minimum sum which is obtained from summing each Two integers product', () => {
    expect(minSum([5, 4, 2, 3])).toBe(22);
    expect(minSum([12, 6, 10, 26, 3, 24])).toBe(342);
    expect(minSum([9, 2, 8, 7, 5, 4, 0, 6])).toBe(74);
})