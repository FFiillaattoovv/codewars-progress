import { isPowerOfTwo } from './index';

test('if a given non-negative integer is a power of two should return true, otherwise false', () => {
    expect(isPowerOfTwo(1024)).toBe(true);
    expect(isPowerOfTwo(4096)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(333)).toBe(false);
    expect(isPowerOfTwo(5)).toBe(false);
    expect(isPowerOfTwo(0)).toBe(false);
})