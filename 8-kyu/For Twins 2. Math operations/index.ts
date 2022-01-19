export const iceBrickVolume = (radius: number, bottleLength: number, rimLength: number): number => {
    return 2 * radius ** 2 * (bottleLength - rimLength);
};