export function duplicateEncode(word: string) {
    return word
        .toLowerCase()
        .split('')
        .map((symbol, index, array) => array.indexOf(symbol) === array.lastIndexOf(symbol) ? '(' : ')')
        .join('');
}