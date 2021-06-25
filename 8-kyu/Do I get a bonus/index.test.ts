import { Kata } from './index';

test('If bonus is true, the salary should be multiplied by 10. If bonus is false, must receive only his stated salary.', () => {
    expect(Kata.bonusTime(10000, true)).toBe('£100000');
    expect(Kata.bonusTime(10000, false)).toBe('£10000');
    expect(Kata.bonusTime(78, false)).toBe('£78');
})