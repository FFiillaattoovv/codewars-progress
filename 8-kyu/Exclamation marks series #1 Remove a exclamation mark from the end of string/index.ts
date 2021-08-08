export function remove(s: string): string {
    return s[s.length - 1] === '!' ? s.slice(0, -1) : s;
}
