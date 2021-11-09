export function areYouPlayingBanjo(name: string): string {
    return name.toLowerCase()[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}