export function removeDuplicateWords(s: string): string {
    return s
        .split(' ')
        .filter((item, index, arr) => arr.indexOf(item) === index)
        .join(' ');
}