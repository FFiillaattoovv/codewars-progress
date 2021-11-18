import { hoopCount } from './index';

test('If gets 10 or more hoops, should return the string "Great, now move on to tricks", otherwise the string "Keep at it until you get it"', () => {
    expect(hoopCount(6)).toBe('Keep at it until you get it');
    expect(hoopCount(10)).toBe('Great, now move on to tricks');
})