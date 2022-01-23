export function capitalize(s: string) {
    const s1 = s.split('').map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch).join('');
    const s2 = s.split('').map((ch, i) => i % 2 !== 0 ? ch.toUpperCase() : ch).join('');
    return [s1, s2];
}