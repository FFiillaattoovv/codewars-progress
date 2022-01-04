import { well } from './index';

test('if there are one or two good ideas, return \'Publish!\', if there are more than 2 return \'I smell a series!\'. If there are no good ideas, should return \'Fail!\'.', () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!');
    expect(well(['good', 'bad', 'bad', 'bad', 'good'])).toBe('Publish!');
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe('I smell a series!');
})