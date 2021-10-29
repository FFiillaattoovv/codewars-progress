export function isValidWalk(walk: string[]) {
    const n = [],
        s = [],
        e = [],
        w = [];
    walk.map(direction => {
        switch (direction) {
            case 'n':
                n.push(1)
                break;
            case 's':
                s.push(1)
                break;
            case 'e':
                e.push(1)
                break;
            default:
                w.push(1)
        }
    });
    return n.length === s.length && w.length === e.length && walk.length === 10;
}