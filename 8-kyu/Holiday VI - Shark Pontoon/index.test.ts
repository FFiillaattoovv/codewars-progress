import { shark } from './index';

test('If the shark will get to you before you can get to the pontoon return "Shark Bait!", if not, return "Alive!"', () => {
    expect(shark(12, 50, 4, 8, true)).toBe('Alive!');
    expect(shark(24, 0, 4, 8, true)).toBe('Shark Bait!');
})
