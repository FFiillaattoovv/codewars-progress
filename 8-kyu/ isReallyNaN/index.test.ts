import { isReallyNaN } from './index';

test('should returns true only if passed in an argument that evalutes to NaN, and returns false otherwise', () => {
    expect(isReallyNaN(37)).toBe(false);
    expect(isReallyNaN('37')).toBe(false);
    expect(isReallyNaN(NaN)).toBe(true);
    expect(isReallyNaN(undefined)).toBe(false);
})
