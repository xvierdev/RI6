export default class SegundoGrau {
    public a: number;
    public b: number;
    public c: number;
    constructor(a: number, b: number = 0, c: number = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    public calcularRaizes() {
        let delta: number = this.b ** 2 - 4 * this.a * this.c;
        // console.log(`${this.a} ${this.b} ${this.c} ${delta}`);
        if (delta < 0) {
            return 'Não tem raízes reais';
        }
        else if (delta == 0) {
            return `X1 = X2: ${(-this.b) / (2 * this.a)}`;
        }
        else {
            let x1: number = (-this.b + delta ** 0.5) / (2 * this.a);
            let x2: number = (-this.b - delta ** 0.5) / (2 * this.a);
            return `X1: ${x1} X2: ${x2}`;
        }

    }
}