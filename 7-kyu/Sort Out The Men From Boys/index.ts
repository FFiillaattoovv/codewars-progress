export function menFromBoys(arr: number[]): number[] {
    const men = arr.filter((num, i) => num % 2 === 0 && arr.indexOf(num) === i).sort((a, b) => a - b);
    const boys = arr.filter((num, i) => num % 2 !== 0 && arr.indexOf(num) === i).sort((a, b) => b - a);
    return [...men, ...boys];
}