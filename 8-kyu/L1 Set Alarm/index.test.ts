import { setAlarm } from './index';

test('should return true if you are employed and not on vacation. It should return false otherwise', () => {
    expect(setAlarm(true, true)).toBe(false);
    expect(setAlarm(false, true)).toBe(false);
    expect(setAlarm(true, false)).toBe(true);
    expect(setAlarm(false, false)).toBe(false);
})
