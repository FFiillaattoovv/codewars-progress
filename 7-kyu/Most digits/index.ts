export class Kata {
    static findLongest(array: number[]): number {
        const maxLength = Math.max(...array).toString().length;
        const idx = array.map(String).findIndex(value => value.length === maxLength);
        return array[idx];
    }
}