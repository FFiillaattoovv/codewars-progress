export function getGrade(a: number, b: number, c: number): string {
    let score = (a + b + c) / getGrade.length;
    switch (true) {
        case 90 <= score && score <= 100:
            return 'A';
        case 80 <= score && score < 90:
            return 'B';
        case 70 <= score && score < 80:
            return 'C';
        case 60 <= score && score < 70:
            return 'D';
        case 0 <= score && score < 60:
            return 'F';
        default:
            return 'Data error!';
    }
}
