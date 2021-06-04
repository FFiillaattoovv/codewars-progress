export function squareSum(numbers: number[]): number {
    return numbers.reduce((summ, current) => {
        return summ + current ** 2;
    }, 0);
}