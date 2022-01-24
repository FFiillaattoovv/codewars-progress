import { removeDuplicateWords } from './index';

test('should to remove all duplicate words from a string, leaving only single (first) words entries', () => {
    expect(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')).toBe('alpha beta gamma delta');
})