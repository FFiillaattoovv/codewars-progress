export function isSortedAndHow(array: number[]): string {
    if ([...array].sort((a, b) => a - b).join('') === array.join('')) {
        return 'yes, ascending';
    } else if ([...array].sort((a, b) => b - a).join('') === array.join('')) {
        return 'yes, descending';
    } else {
        return 'no';
    }
}