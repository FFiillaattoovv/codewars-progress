import { isIsogram } from './index';

test('if string is isogram should return true otherwise false', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('moOse')).toBe(false);
    expect(isIsogram('')).toBe(true);
})