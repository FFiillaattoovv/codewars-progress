import { main } from './index';

test('should concat two lines', () => {
    expect(main('take ', 'item')).toBe('take item');
    expect(main('use ', 'sword')).toBe('use sword');
})
