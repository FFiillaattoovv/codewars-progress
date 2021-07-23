import { get_age } from './index';

test('should return a number between 0 and 9 which is the first character', () => {
    expect(get_age('2 years old')).toBe(2);
    expect(get_age('5 years old')).toBe(5);
})
