import { Kata } from './index';

test('should takes a string and return a new string with all vowels removed', () => {
    expect(Kata.disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
})