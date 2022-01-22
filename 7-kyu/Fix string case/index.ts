export function solve(s: string) {
    let upperCase = 0;
    s.split('').forEach(ch => {
        if (ch === ch.toUpperCase()) upperCase++;
    });
    return upperCase > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}