export class Challenge {
    static solution(number: number) {
        let sum = 0;
        for (let i = 1; i <= number - 1; i++){
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum
    }
}