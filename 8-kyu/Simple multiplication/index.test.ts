import { simpleMultiplication } from './index';

test('if it is an even number and should multiply by eight  otherwise by nine', () => {
    expect(simpleMultiplication(2)).toBe(16);
    expect(simpleMultiplication(1)).toBe(9);
})