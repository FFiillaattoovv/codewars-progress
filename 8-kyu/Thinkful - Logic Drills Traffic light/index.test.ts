import { updateLight } from './index';

test('should return a string representing the state the light should change to', () => {
    expect(updateLight('green')).toBe('yellow');
    expect(updateLight('yellow')).toBe('red');
    expect(updateLight('red')).toBe('green');
})