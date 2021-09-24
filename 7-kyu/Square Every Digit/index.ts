export class Kata {
    static squareDigits(num: number): number {
        return +num
            .toString()
            .split('')
            .map(Number)
            .reduce((prev, curr) => prev + (curr ** 2), '')
    }
}