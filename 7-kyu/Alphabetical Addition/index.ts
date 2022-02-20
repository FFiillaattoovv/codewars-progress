export function addLetters(...letters: string[]) {
    const letter = String.fromCharCode((letters.map(char => char.charCodeAt(0) - 96).reduce((a, b) => a + b, 0) % 26) + 96);
    return letter === '`' ? 'z' : letter;
}