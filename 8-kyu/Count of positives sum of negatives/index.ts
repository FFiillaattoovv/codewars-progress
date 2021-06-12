export function countPositivesSumNegatives(input: any) {
    type newArrType = Array<number | null>;
    let newArr: newArrType = [];
    let positive = 0;
    let negative = 0;
    if (input === null || input.length === 0) return newArr;
    input.map((el: number) => {
        if (el > 0) {
            positive++;
        } else {
            negative = negative + el;
        }
    })
    newArr.push(positive);
    newArr.push(negative);
    return newArr;
}