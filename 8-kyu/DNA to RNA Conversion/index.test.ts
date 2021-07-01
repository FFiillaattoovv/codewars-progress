import { DNAtoRNA } from './index';

test('should return the string replacing characters \'T\' with \'U\'', () => {
    expect(DNAtoRNA('TTTT')).toBe('UUUU');
    expect(DNAtoRNA('GCAT')).toBe('GCAU');
    expect(DNAtoRNA('GACCGCCGCC')).toBe('GACCGCCGCC');
    expect(DNAtoRNA('')).toBe('');
})
