import { OrderStatus } from "../interfaces/OrderStatus";
import { Messaging } from "./Messaging";
import { Persistence } from "./Persistence";
import { ShoopingCart } from "./ShoppingCart";

export class Order {
    private _orderStatus: OrderStatus = 'open';

    //injecao de dependencia.
    constructor(
        private readonly cart: ShoopingCart,
        private readonly messaging: Messaging,
        private readonly persistence: Persistence,
    ) { }
    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isEmpty()) console.log("Seu carrinho está vazio");
        this._orderStatus = 'closed';
        this
        this.messaging.sendMessage('Seu pedido foi recebido com total de : ' + this.cart.total().toFixed(2));
        this.persistence.saveOrder();
        this.cart.clear();
        return;
    }
}

// classes coesas -> utilizam somente métodos que tem seus atributos. 