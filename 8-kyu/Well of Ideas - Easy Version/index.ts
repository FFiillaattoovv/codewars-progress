export function well(x: string[]): string {
    const res = x.filter(word => word === 'good').length;
    return res >= 3 ? 'I smell a series!' : res ? 'Publish!' : 'Fail!';
}