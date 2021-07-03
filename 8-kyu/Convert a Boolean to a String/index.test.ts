import { booleanToString } from './index';

test('should convert a Boolean to a String', () => {
    expect(booleanToString(true)).toBe('true');
})
