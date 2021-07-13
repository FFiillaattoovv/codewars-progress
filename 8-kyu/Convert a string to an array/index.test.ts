import {stringToArray} from './index';

test('should convert a string to an array', () => {
    expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh']);
    expect(stringToArray('I love arrays they are my favorite')).toEqual(['I', 'love', 'arrays', 'they', 'are', 'my', 'favorite']);
})
