import { hello } from './index';

test('should returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String)', () => {
    expect(hello('john')).toBe('Hello, John!');
    expect(hello('aliCE')).toBe('Hello, Alice!');
    expect(hello('')).toBe('Hello, World!');
})
