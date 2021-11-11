export function isDivideBy(number: number, a: number, b: number): boolean {
    return number % a === 0 && number % b === 0;
}