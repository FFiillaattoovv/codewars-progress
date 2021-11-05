import { humanReadable } from './index';

test('taking seconds as input should return the time in human readable format', () => {
    expect(humanReadable(0)).toBe('00:00:00');
    expect(humanReadable(5)).toBe('00:00:05');
    expect(humanReadable(60)).toBe('00:01:00');
    expect(humanReadable(86399)).toBe('23:59:59');
    expect(humanReadable(359999)).toBe('99:59:59');
})