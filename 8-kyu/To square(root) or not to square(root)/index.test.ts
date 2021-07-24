import { squareOrSquareRoot } from './index';

test('If the number has an integer square root, take this, otherwise square the number', () => {
    expect(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])).toEqual([ 2, 9, 3, 49, 4, 1 ]);
    expect(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])).toEqual([ 10, 10201, 25, 25, 1, 1 ]);
})
