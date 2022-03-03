import { automorphic } from './index';

test('if a number is Automorphic, should return "Automorphic", otherwise "Not!!"', () => {
    expect(automorphic(1)).toBe('Automorphic');
    expect(automorphic(6)).toBe('Automorphic');
    expect(automorphic(3)).toBe('Not!!');
    expect(automorphic(9)).toBe('Not!!');
})