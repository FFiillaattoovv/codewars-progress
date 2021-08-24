import { main } from './index';

test('should concat two lines', () => {
    expect('take ', 'item').toBe('take item');
    expect('use ', 'sword').toBe('use sword');
})
