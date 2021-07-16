export function howMuchILoveYou(petals: number): string {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    while (petals > 6) {
        petals = petals - 6;
    }
    return arr[petals - 1];
}
