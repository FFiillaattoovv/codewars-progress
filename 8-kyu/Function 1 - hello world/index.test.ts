import { greet } from './index';

test('should return the string "hello world!"', () => {
    expect(greet()).toBe('hello world!');
})