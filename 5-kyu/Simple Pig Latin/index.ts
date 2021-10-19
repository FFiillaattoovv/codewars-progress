export function pigIt(str: string): string {
    return str.split(' ')
        .map(word => /[a-z]/gi.test(word) ? `${word.slice(1)}${word[0]}ay` : word)
        .join(' ');
}