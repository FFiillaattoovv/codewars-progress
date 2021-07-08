import {toAlternatingCase} from './index';

test('should return a string in which every lowercase letter becomes uppercase and every uppercase letter becomes lowercase', () => {
    expect(toAlternatingCase('hello world')).toBe('HELLO WORLD');
    expect(toAlternatingCase('HeLLo WoRLD')).toBe('hEllO wOrld');
    expect(toAlternatingCase('1a2b3c4d5e')).toBe('1A2B3C4D5E');
})
