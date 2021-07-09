export function feast(beast: string, dish: string): boolean {
    return beast.split('')[0] === dish.split('')[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
