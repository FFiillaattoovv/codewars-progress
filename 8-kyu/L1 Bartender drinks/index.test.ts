import { getDrinkByProfession } from './index';

test('should produces output according to the following table', () => {
    expect(getDrinkByProfession('jabrOni')).toBe('Patron Tequila');
})
