export function findSmallestInt(args: number[]): number {
    let smallest = args[0];
    for (let i = 1; i < args.length; i++) {
        args[i] < smallest ? smallest = args[i] : smallest;
    }
    return smallest;
}