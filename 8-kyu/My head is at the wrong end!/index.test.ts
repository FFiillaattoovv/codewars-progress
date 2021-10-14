import { fixTheMeerkat } from './index';

test('should return array values in reverse order', () => {
    expect(fixTheMeerkat(['tail', 'body', 'head'])).toEqual(['head', 'body', 'tail']);
    expect(fixTheMeerkat(['tails', 'body', 'heads'])).toEqual(['heads', 'body', 'tails']);
    expect(fixTheMeerkat(['bottom', 'middle', 'top'])).toEqual(['top', 'middle', 'bottom']);
})