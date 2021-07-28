import { saleHotdogs } from './index';

test('should return a number that the customer need to pay how much money', () => {
    expect(saleHotdogs(1)).toBe(100);
    expect(saleHotdogs(4)).toBe(400);
    expect(saleHotdogs(5)).toBe(475);
    expect(saleHotdogs(9)).toBe(855);
})
