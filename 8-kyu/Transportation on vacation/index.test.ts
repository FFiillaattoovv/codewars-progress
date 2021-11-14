import { rentalCarCost } from './index';

test('should return the result of multiplying days by 40, if days are from three to seven, subtract 20, if more than six, subtract 50', () => {
    expect(rentalCarCost(2)).toBe(80);
    expect(rentalCarCost(5)).toBe(180);
    expect(rentalCarCost(10)).toBe(350);
})