import { areYouPlayingBanjo } from './index';

test('if name starts with the letter "R" or lower case "r", should return you are playing banjo, otherwise you does not play banjo', () => {
    expect(areYouPlayingBanjo('Adam')).toBe('Adam does not play banjo');
    expect(areYouPlayingBanjo('Ringo')).toBe('Ringo plays banjo');
})