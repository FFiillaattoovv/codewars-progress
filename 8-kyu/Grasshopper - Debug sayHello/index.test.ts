import { sayHello } from './index';

test('should be return the greeting and the passed name', () => {
    expect(sayHello('Mr. Spock')).toBe('Hello, Mr. Spock');
})
