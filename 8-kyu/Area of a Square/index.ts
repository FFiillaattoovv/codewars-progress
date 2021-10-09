export const squareArea = (num : number) : number =>  {
    return Math.floor((num * 4 / (Math.PI * 2)) ** 2 * 100) / 100;
}