import { abbrevName } from './index';

test('should to convert a name into initials', () => {
    expect(abbrevName('PATRICK FEENEY')).toBe('P.F');
    expect(abbrevName('Sam Harris')).toBe('S.H');
    expect(abbrevName('Patrick Feeney')).toBe('P.F');
    expect(abbrevName('R Favuzzi')).toBe('R.F');
    expect(abbrevName('sam harris')).toBe('S.H');
})