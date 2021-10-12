export class Kata {
    static validatePin(pin: string): boolean {
        return pin.match(/^\d{4}$|^\d{6}$/) !== pin.match(/^\d{4}$|^\d{6}$/);
    }
}