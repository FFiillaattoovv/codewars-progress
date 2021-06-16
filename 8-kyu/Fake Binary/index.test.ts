import { fakeBin } from './index';

test('should return a string of digits, where replaces any digit below 5 with \'0\' and any digit 5 and above with \'1\'', () => {
    expect(fakeBin('45385593107843568')).toBe('01011110001100111');
    expect(fakeBin('509321967506747')).toBe('101000111101101');
})