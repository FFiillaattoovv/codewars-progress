import { repeater } from './index';

test('should returns a new string where the input string is repeated N times', () => {
    expect(repeater('a', 5)).toBe('aaaaa');
    expect(repeater('Na', 16)).toBe('NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
})