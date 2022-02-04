import { predictAge } from './index';

test('should return the result of the formula', () => {
    expect(predictAge(65,60,75,55,60,63,64,45)).toBe(86);
    expect(predictAge(32,54,76,65,34,63,64,45)).toBe(79);
})