import { countBits } from './index';

test('takes an integer as input, and should returns the number of bits that are equal to one in the binary representation of that number', () => {
    expect(countBits(0)).toBe(0);
    expect(countBits(4)).toBe(1);
    expect(countBits(7)).toBe(3);
    expect(countBits(9)).toBe(2);
    expect(countBits(10)).toBe(2);
})