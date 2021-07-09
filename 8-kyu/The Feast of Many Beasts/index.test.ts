import { feast } from './index';

test('should return true if the characters at the beginning and end of both strings are the same', () => {
    expect(feast("great blue heron", "garlic naan")).toBe(true);
    expect(feast("chickadee", "chocolate cake")).toBe(true);
    expect(feast("brown bear", "bear claw")).toBe(false);
})
