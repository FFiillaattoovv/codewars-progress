import { isPalindrome } from './index';

test('should checks if something is a palindrome', () => {
    expect(isPalindrome('anna')).toBe(true);
    expect(isPalindrome('walter')).toBe(false);
    expect(isPalindrome('sator arepo tenet opera rotas')).toBe(true);
    expect(isPalindrome('We love Codewars!')).toBe(false);
})
