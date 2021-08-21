import { howManyLightsabersDoYouOwn } from './index';

test('if input is Zach returns 18, otherwise 0', () => {
    expect(howManyLightsabersDoYouOwn('Zach')).toBe(18);
    expect(howManyLightsabersDoYouOwn('Adam')).toBe(0);
})
