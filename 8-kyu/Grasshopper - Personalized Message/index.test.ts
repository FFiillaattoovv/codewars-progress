import { greet } from './index';

test('should return name equals owner otherwise name is guest', () => {
    expect(greet('Daniel', 'Daniel')).toBe('Hello boss');
    expect(greet('Greg', 'Daniel')).toBe('Hello guest');
})