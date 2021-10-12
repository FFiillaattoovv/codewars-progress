import { Kata } from './index';

test('if the function is passed a valid PIN string, should return true, else return false', () => {
    expect(Kata.validatePin('1234')).toBe(true);
    expect(Kata.validatePin('12345')).toBe(false);
    expect(Kata.validatePin('a234')).toBe(false);
    expect(Kata.validatePin('1.234')).toBe(false);
    expect(Kata.validatePin('-1234')).toBe(false);
    expect(Kata.validatePin('0000')).toBe(true);
    expect(Kata.validatePin('098765')).toBe(true);
})