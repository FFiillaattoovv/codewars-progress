import { SafeInteger } from './index';

test('If the number is safe must return the true otherwise false', () => {
    expect(SafeInteger(9007199254740992)).toBe(false);
    expect(SafeInteger(9007199254740990)).toBe(true);
    expect(SafeInteger(-90)).toBe(true);
})
