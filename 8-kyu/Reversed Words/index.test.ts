import { reverseWords } from './index';

test('should return in reverse order all words in the passed string', () => {
    expect(reverseWords('The greatest victory is that which requires no battle')).toBe('battle no requires which that is victory greatest The');
})