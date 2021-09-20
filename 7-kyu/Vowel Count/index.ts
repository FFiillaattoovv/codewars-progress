export class Kata {
    static getCount(str: string): number {
        let res = 0;
        const target = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < target.length; j++) {
                if (str[i] === target[j]) res++;
            }
        }
        return res;
    }
}