import { findShort } from './index';

test('given a string of words, should return the length of the shortest word(s)', () => {
    expect(findShort('lets talk about javascript the best language')).toBe(3);
    expect(findShort('i want to travel the world writing code one day')).toBe(1);
    expect(findShort('Lets all go on holiday somewhere very cold')).toBe(2);
    expect(findShort("Let's travel abroad shall we")).toBe(2);
})