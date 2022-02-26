import { inviteMoreWomen } from './index';

test('should return true if women less than men, otherwise false', () => {
    expect(inviteMoreWomen([1, -1, 1])).toBe(true);
    expect(inviteMoreWomen([1, 1, 1])).toBe(true);
    expect(inviteMoreWomen([-1, -1, -1])).toBe(false);
    expect(inviteMoreWomen([1, -1])).toBe(false);
})