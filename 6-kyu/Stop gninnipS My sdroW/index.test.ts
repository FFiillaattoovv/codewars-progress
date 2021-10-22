import { Kata } from './index';

test('should returns the same string, but with all five or more letter words reversed', () => {
    expect(Kata.spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
    expect(Kata.spinWords('This is a test')).toBe('This is a test');
    expect(Kata.spinWords('This is another test')).toBe('This is rehtona test');
})