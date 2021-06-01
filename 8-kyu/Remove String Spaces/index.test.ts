import { noSpace } from './index';

test('should remove the spaces from the string, then return the resultant string', () => {
    expect(noSpace('')).toBe('');
    expect(noSpace('gfyf ytftdf gfyuf')).toBe('gfyfytftdfgfyuf');
    expect(noSpace('mnjnjnjnj g vg f cd e')).toBe('mnjnjnjnjgvgfcde');
    expect(noSpace(' hello ')).toBe('hello');

})