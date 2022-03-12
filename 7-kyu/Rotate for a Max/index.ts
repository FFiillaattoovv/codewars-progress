export class G964 {
    public static maxRot(n) {
        const arrNum = n.toString().split('');
        const resArr = [];
        for (let i = 0; i < arrNum.length - 1; i++) {
            arrNum.push(arrNum.splice(i, 1)[0]);
            resArr.push(Number(arrNum.join('')));
        }
        return Math.max(n, ...resArr);
    }
}