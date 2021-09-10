export function bigToSmall(arr: number[][]): string {
    return ([] as number[]).concat(...arr).sort((a: number,b: number) => b - a).join('>')
}
