export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    enum Months {
        January,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December,
    }
    const currDateArr = currentDate.replace(',', '').split(' ');
    const expDateArr = expirationDate.replace(',', '').split(' ');
    const currDate = new Date(Date.UTC(Number(currDateArr[2]), Months[currDateArr[0]], Number(currDateArr[1])))
    const expDate = new Date(Date.UTC(Number(expDateArr[2]), Months[expDateArr[0]], Number(expDateArr[1])));
    return enteredCode === correctCode && currDate <= expDate;
}