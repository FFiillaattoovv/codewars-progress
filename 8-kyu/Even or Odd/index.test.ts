import { even_or_odd } from './index';

test('should returns "Even" for even numbers or "Odd" for odd numbers', () => {
    expect(even_or_odd(2)).toBe('Even');
    expect(even_or_odd(0)).toBe('Even');
    expect(even_or_odd(16)).toBe('Even');
    expect(even_or_odd(5)).toBe('Odd');
    expect(even_or_odd(7)).toBe('Odd');
    expect(even_or_odd(-3)).toBe('Odd');
})