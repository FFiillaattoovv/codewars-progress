import { howMuchILoveYou } from './index';

test('should return the phrase depending on the number passed', () => {
    expect(howMuchILoveYou(7)).toBe('I love you');
    expect(howMuchILoveYou(12)).toBe('not at all');
    expect(howMuchILoveYou(3)).toBe('a lot');
    expect(howMuchILoveYou(6)).toBe('not at all');
    expect(howMuchILoveYou(20)).toBe('a little');
    expect(howMuchILoveYou(21)).toBe('a lot');
})

