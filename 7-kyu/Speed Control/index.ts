export class G964 {

    public static gps = (s: number, x: number[]): number => {
        if (x.length <= 1) return 0;
        const arr = [];
        x.forEach((value, index, array) => array[index + 1] && arr.push(Math.floor((3600 * (array[index + 1] - value)) / s)));
        return Math.max(...arr);
    };
}