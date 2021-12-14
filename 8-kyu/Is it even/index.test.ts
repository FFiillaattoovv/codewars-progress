import { testEven } from './index';

test('If the number passed is even should return true otherwise false', () => {
    expect(testEven(0)).toBe(true);
    expect(testEven(0.5)).toBe(false);
})