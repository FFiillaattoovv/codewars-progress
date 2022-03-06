import { balancedNum } from './index';

test('if the number is Balanced, should return true, otherwise false', () => {
    expect(balancedNum(7)).toBe('Balanced');
    expect(balancedNum(959)).toBe('Balanced');
    expect(balancedNum(13)).toBe('Balanced');
    expect(balancedNum(424)).toBe('Balanced');
    expect(balancedNum(56239814)).toBe('Balanced');
    expect(balancedNum(432)).toBe('Not Balanced');
    expect(balancedNum(1024)).toBe('Not Balanced');
    expect(balancedNum(66545)).toBe('Not Balanced');
})