import { switchItUp } from './index';

test('when provided with a number between 0-9, should return it in words', () => {
    expect(switchItUp(1)).toBe('One');
    expect(switchItUp(3)).toBe('Three');
    expect(switchItUp(5)).toBe('Five');
})
