export function seatsInTheater(nCols: number, nRows: number, col: number, row: number) {
    return (nRows - row) * (nCols - (col - 1));
}
