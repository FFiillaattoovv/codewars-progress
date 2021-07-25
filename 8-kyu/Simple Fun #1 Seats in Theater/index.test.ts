import { seatsInTheater } from './index';

test('given the total number of rows and columns, and the row and column you\'re sitting in, should return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied', () => {
    expect(seatsInTheater(16, 11, 5, 3)).toBe(96);
    expect(seatsInTheater(1, 1, 1, 1)).toBe(0);
    expect(seatsInTheater(13, 6, 8, 3)).toBe(18);
    expect(seatsInTheater(60, 100, 60, 1)).toBe(99);
    expect(seatsInTheater(1000, 1000, 1000, 1000)).toBe(0);
})
