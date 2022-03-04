import { generateShape } from './index';

test('should return a shape that is as long and wide as the integer', () => {
    expect(generateShape(1)).toBe('+');
    expect(generateShape(3)).toBe('+++\n+++\n+++');
    expect(generateShape(8)).toBe('++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++');
})