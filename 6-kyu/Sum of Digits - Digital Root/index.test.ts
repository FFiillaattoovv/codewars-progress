import { digitalRoot } from './index';

test('should return digital root of a natural number', () => {
    expect(digitalRoot(16)).toBe(7);
    expect(digitalRoot(456)).toBe(6);
    expect(digitalRoot(942)).toBe(6);
    expect(digitalRoot(132189)).toBe(6);
    expect(digitalRoot(493193)).toBe(2);
    expect(digitalRoot(493193)).toBe(2);
    expect(digitalRoot(18)).toBe(9);
    expect(digitalRoot(0)).toBe(0);
})