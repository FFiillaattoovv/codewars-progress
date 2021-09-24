import { Kata } from './index';

test('should to square every digit of a number and concatenate them', () => {
    expect(Kata.squareDigits(9119)).toBe(811181);
})