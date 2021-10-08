export class G964 {

    public static nbYear = (p0, percent, aug, p) => {

        let res = p0 + p0 * (percent / 100) + aug;
        let counter = 1;

        while (res < p) {
            res = res + res * (percent / 100) + aug;
            counter++;
        }

        return counter;
    }
}