import { Kata } from './index';

test('getting one side of the DNA should return the other additional side', () => {
    expect(Kata.dnaStrand('AAAA')).toBe('TTTT');
    expect(Kata.dnaStrand('ATTGC')).toBe('TAACG');
    expect(Kata.dnaStrand('GTAT')).toBe('CATA');
})