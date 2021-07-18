export function gooseFilter(birds: string[]): string[] {
    const geese: Array<string> = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
    return birds.filter(bird => bird !== geese.find(goose => goose === bird));
}
