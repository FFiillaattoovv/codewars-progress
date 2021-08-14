export function nextId(ids: number[]): number {
    if (ids.length === 0) return 0;
    for (let i = 0; i < ids.length; i++) {
        if (!ids.includes(i)) return i;
    }
    return Math.max(...ids) + 1;
}
