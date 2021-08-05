import { XOR } from './index';

test('should returning true if exactly one of the two expressions evaluate to true, false otherwise', () => {
    expect(XOR.xor(false, false)).toBe(false);
    expect(XOR.xor(true, false)).toBe(true);
    expect(XOR.xor(false, true)).toBe(true);
    expect(XOR.xor(true, true)).toBe(false);
})
