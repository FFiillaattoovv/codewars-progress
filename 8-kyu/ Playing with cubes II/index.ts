export class Cube {

    constructor(n: number = 0) {
        this.setSide(n);
    }

    public getSide(): number {
        return this._side;
    }

    public setSide(value: number) {
        this._side = Math.abs(value);
    }

    private _side: number;

}
