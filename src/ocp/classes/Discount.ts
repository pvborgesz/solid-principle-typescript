export abstract class Discount {
    abstract calculate(value: number): number;
}

export class FiftyPercentDiscount extends Discount {
    private readonly discount = 0.5;
    calculate(value: number): number {
        return value - value * this.discount;
    }
}

export class TenPercentDiscount extends Discount {
    private readonly discount = 0.1;
    calculate(value: number): number {
        return value - value * this.discount;
    }
}

export class NoDiscount extends Discount {
    calculate(value: number): number {
        return value;
    }
}
/* 
    Padrão de projeto Strategy.
*/