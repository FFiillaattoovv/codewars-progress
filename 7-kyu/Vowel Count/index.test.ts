import { Kata } from './index';

test('should return the number of vowels in the given string', () => {
    expect(Kata.getCount('abracadabra')).toBe(5);
})