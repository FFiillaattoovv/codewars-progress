import { stringToNumber } from './index';

test('should transform a string into a number', () => {
    expect(stringToNumber('4545')).toBe(4545);
    expect(stringToNumber('999')).toBe(999);
    expect(stringToNumber('100')).toBe(100);
})