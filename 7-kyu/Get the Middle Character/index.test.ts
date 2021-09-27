import { Challenge } from './index';

test('if the word\'s length is odd, should return the middle character otherwise return the middle 2 characters', () => {
    expect(Challenge.getMiddle('test')).toBe('es');
    expect(Challenge.getMiddle('testing')).toBe('t');
    expect(Challenge.getMiddle('A')).toBe('A');
})