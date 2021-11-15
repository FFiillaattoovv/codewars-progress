import { correct } from './index';

test('should replace 5 to S, 0 to O, 1 to I', () => {
    expect(correct('L0ND0N')).toBe('LONDON');
    expect(correct('DUBL1N')).toBe('DUBLIN');
    expect(correct('51NGAP0RE')).toBe('SINGAPORE');
})