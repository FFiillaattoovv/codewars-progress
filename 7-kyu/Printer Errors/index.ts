export class G964 {
    public static printerError(s: string): string {
        let numerator = s.replace(/[a-n]/g, '').length;
        let denominator = s.split('').length;
        return `${numerator}/${denominator}`
    }
}