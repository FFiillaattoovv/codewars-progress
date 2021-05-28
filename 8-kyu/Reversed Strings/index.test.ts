import { solution } from './index';

test('should returns reverses the string passed into it', () => {
    expect(solution('table')).toBe('elbat');
    expect(solution('cat')).toBe('tac');
    expect(solution('dog')).toBe('god');
    expect(solution('')).toBe('');
    expect(solution('a')).toBe('a');

})