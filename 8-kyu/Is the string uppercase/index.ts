export function isUpperCase(str: string) {
    for (let char of str) {
        if (char !== ' ' && char === char.toLowerCase()) return false;
    }
    return true;
}
