import { pigIt } from './index';

test('should move the first letter of each word to the end of it, then add "ay" to the end of the word', () => {
    expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    expect(pigIt('Hello world !')).toBe('elloHay orldway !');
})