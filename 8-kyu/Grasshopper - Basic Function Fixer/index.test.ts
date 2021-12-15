import { addFive } from './index';

test('should to add five to any number that was passed in and return the new value', () => {
    expect(addFive(5)).toBe(10);
    expect(addFive(0)).toBe(5);
    expect(addFive(-5)).toBe(0);
})