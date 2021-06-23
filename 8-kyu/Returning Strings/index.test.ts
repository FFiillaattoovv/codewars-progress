import {greet} from './index';

test('should return a greeting with the name passed in the argument', () => {
    expect(greet('Ryan')).toBe('Hello, Ryan how are you doing today?');
    expect(greet('Shingles')).toBe('Hello, Shingles how are you doing today?');
})