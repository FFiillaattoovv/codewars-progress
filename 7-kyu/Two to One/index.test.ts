import { G964 } from './index';

test('should return a new sorted string in alphabetical order', () => {
    expect(G964.longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
})