export function oddOrEven(array: number[]) {
    if (array.length === 0) return 'even';
    const res = array.reduce((a, b) => a + b);
    return res % 2 === 0 ? 'even' : 'odd';
}