export function enough(cap: number, on: number, wait: number): number {
    return cap >= on + wait ? 0 : on + wait - cap;
}
