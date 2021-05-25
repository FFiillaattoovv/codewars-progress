import { makeNegative } from './index';

test('should return a number negative or null', () => {
    expect(makeNegative(2)).toBe(-2);
    expect(makeNegative(-2)).toBe(-2);
    expect(makeNegative(0)).toBe(0);
    expect(makeNegative(-754)).toBe(-754);
    expect(makeNegative(55)).toBe(-55);

})