type CartItem = { name: string, price: number };
type OrderStatus = 'open' | 'closed'
export class ShoopingCartLegacy { // SRP 
    private readonly _items: CartItem[] = [];
    private _orderStatus: OrderStatus = 'open';
    addItem(item: CartItem): void {
        this._items.push(item);
    }

    removeItem(index: number): void {
        this._items.splice(index, 1);
    }

    get item(): Readonly<CartItem[]> {
        return this._items;
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    total(): number {
        return this._items.reduce((total, next) => total + next.price, 0);
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    sendMessage(msg: string): void {
        console.log("Mensagem enviada ", msg);
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso.');
        return;
    }

    clear(): void {
        console.log('Carrinho de compras foi limpo.');
        this._items.length = 0;
    }

    checkout(): void {
        if (this.isEmpty())
            console.log("Seu carrinho está vazio");
        this._orderStatus = 'closed';
        this.sendMessage('Seu pedido foi recebido com total de : ' + this.total().toFixed(2));
        this.saveOrder();
        this.clear();
        return;
    }
}

const shoppingCart = new ShoopingCartLegacy();

shoppingCart.addItem({ name: 'camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'caderno', price: 9.9 });
shoppingCart.addItem({ name: 'bermuda', price: 5.9 });
shoppingCart.addItem({ name: 'lapis', price: 1.9 });

console.log(shoppingCart.orderStatus);
(shoppingCart.checkout());
console.log(shoppingCart.orderStatus);