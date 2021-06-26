import {greet} from './index';

test('should return a greeting by adding a name, if the name is "Johnny" return the string "Hello my love!"', () => {
    expect(greet('Jim')).toBe('Hello, Jim!');
    expect(greet('Johnny')).toBe('Hello, my love!');
})