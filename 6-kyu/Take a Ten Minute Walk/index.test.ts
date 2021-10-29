import { isValidWalk } from './index';

test('should return true if the walk the app gives you will take you exactly ten minutes and will, of course, return you to your starting point. Return false otherwise', () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
    expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
    expect(isValidWalk(['w'])).toBe(false);
})