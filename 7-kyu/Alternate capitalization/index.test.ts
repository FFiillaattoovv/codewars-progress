import { capitalize } from './index';

test('should return string capitalize the letters that occupy even indexes and odd indexes separately', () => {
    expect(capitalize('abcdef')).toEqual(['AbCdEf', 'aBcDeF']);
    expect(capitalize('codewars')).toEqual(['CoDeWaRs', 'cOdEwArS']);
    expect(capitalize('abracadabra')).toEqual(['AbRaCaDaBrA', 'aBrAcAdAbRa']);
})