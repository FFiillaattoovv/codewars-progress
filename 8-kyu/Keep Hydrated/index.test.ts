import { litres } from './index';

test('should return the number of litres, rounded to the smallest value', () => {
    expect(litres(3)).toBe(1);
    expect(litres(6.7)).toBe(3);
    expect(litres(11.8)).toBe(5);
    expect(litres(1.4)).toBe(0);
})