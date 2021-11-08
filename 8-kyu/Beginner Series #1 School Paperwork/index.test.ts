import { paperwork } from './index';

test('should return the multiplication result of two numbers n and m, or 0 if the number is less than zero', () => {
    expect(paperwork(5,5)).toBe(25);
    expect(paperwork(5,-5)).toBe(0);
    expect(paperwork(-5,-5)).toBe(0);
})