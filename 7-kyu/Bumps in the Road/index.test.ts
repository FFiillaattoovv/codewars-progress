import { bump } from './index';

test('If 15 bumps or under, should return "Woohoo!", over 15 bumps should return "Car Dead"', () => {
    expect(bump('n')).toBe('Woohoo!');
    expect(bump('_nnnnnnn_n__n______nn__nn_nnn')).toBe('Car Dead!');
    expect(bump('______n___n_')).toBe('Woohoo!');
    expect(bump('nnnnnnnnnnnnnnnnnnnnn')).toBe('Car Dead!');
})