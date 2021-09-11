import { sixToast } from './index';

test('should return the number of toasts that need to be put (or taken out) to make six toasts', () => {
    expect(sixToast(15)).toBe(9);
    expect(sixToast(6)).toBe(0);
    expect(sixToast(3)).toBe(3);
})
