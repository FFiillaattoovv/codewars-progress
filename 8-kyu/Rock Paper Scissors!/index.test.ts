import { rps } from './index';

test('should return which player won', () => {
    expect(rps('rock', 'scissors')).toBe('Player 1 won!');
    expect(rps('scissors','rock')).toBe('Player 2 won!');
    expect(rps('paper','paper')).toBe('Draw!');
    expect(rps('scissors', 'paper')).toBe('Player 1 won!');
})