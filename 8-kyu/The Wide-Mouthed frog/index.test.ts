import { mouthSize } from './index';

test('If animal is an alligator (case-insensitive) return small otherwise return wide', () => {
    expect(mouthSize('toucan')).toBe('wide');
    expect(mouthSize('ant bear')).toBe('wide');
    expect(mouthSize('alligator')).toBe('small');
})
