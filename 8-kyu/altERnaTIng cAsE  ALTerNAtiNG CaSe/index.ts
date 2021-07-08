export function toAlternatingCase(s: string): string {
    return s.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}
