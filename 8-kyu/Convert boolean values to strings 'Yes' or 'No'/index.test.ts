import { boolToWord } from './index';

test('should returns convert boolean values to strings \'Yes\' or \'No\'', () => {
    expect(boolToWord(true)).toBe('Yes');
    expect(boolToWord(true)).toBe('Yes');
    expect(boolToWord(false)).toBe('No');
    expect(boolToWord(false)).toBe('No');

})