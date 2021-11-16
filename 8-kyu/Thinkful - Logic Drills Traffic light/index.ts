export function updateLight(current: string): string {
    enum Color {
        green,
        yellow,
        red,
    }

    return Color[Color[current] + 1] || 'green';
}