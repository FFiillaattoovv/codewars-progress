export function bump(x: string): string {
    return x.replace(/_/g, '').length > 15
        ? 'Car Dead!'
        : 'Woohoo!';
}