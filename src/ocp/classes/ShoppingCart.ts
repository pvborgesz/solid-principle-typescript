import { Discount } from './Discount';
import { CartItem } from './interfaces/CartItem'

export class ShoopingCart { // SRP 
    private readonly _items: CartItem[] = [];

    constructor(
        private readonly discount: Discount
    ) { }

    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get item(): Readonly<CartItem[]> {
        return this._items;
    }

    total(): number {
        return this._items.reduce((total, next) => total + next.price, 0);
    }

    totalWithDiscount(): number {
        return this.discount.calculate(this.total());
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        console.log('Carrinho de compras foi limpo.');
        this._items.length = 0;
    }
}
/*
    * deixar somente métodos necessários.
    * validação pode ser considerada uma responsabilidade a parte.
    * cada método deve ter uma responsabilidade.
*/