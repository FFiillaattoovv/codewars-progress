import { solve } from './index';

test('should to convert string to either lowercase only or uppercase only based on: make as few changes as possible, if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase', () => {
    expect(solve('code')).toBe('code');
    expect(solve('CODe')).toBe('CODE');
    expect(solve('COde')).toBe('code');
    expect(solve('Code')).toBe('code');
})