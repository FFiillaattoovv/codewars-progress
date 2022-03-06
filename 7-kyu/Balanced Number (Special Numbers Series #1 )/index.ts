export function balancedNum(number: number) {
    const arr = String(number).split('').map(Number);
    const length = arr.length;
    if (length < 3) return 'Balanced';
    if (length % 2 === 0) {
        return arr.slice(0, length / 2 - 1).reduce((a, b) => a + b) === arr.slice(-length / 2 + 1).reduce((a, b) => a + b)
            ? 'Balanced'
            : 'Not Balanced';
    }
    return arr.slice(0, arr.length / 2).reduce((a, b) => a + b) === arr.slice(-arr.length / 2).reduce((a, b) => a + b)
        ? 'Balanced'
        : 'Not Balanced';
}