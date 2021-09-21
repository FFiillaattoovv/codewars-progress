import { accum } from './index';

test('should accum symbols with each repetition adding one symbols ', () => {
    expect(accum('abcd')).toBe('A-Bb-Ccc-Dddd');
    expect(accum('RqaEzty')).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
    expect(accum('cwAt')).toBe('C-Ww-Aaa-Tttt');
})