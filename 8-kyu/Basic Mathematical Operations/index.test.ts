import { basicOp } from './index';

test('should return result of numbers after applying the chosen operation', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
    expect(basicOp('-', 15, 18)).toBe(-3);
    expect(basicOp('*', 5, 5)).toBe(25);
    expect(basicOp('/', 49, 7)).toBe(7);
})