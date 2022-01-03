import { smash } from './index';

test('takes an array of words and smashes them together into a sentence and returns the sentence', () => {
    expect(smash(['hello', 'world'])).toBe('hello world');
    expect(smash(['hello', 'amazing', 'world'])).toBe('hello amazing world');
    expect(smash(['this', 'is', 'a', 'really', 'long', 'sentence'])).toBe('this is a really long sentence');
});