import { check } from './index';

test('should return true if the array contains the value, false if not', () => {
    expect(check([66, 101], 66)).toBe(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
})
