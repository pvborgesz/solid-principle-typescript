import { Order } from "./ocp/classes/Order";
import { ShoopingCart } from "./ocp/classes/ShoppingCart";
import { Messaging } from "./ocp/classes/Messaging";
import { Persistence } from "./ocp/classes/Persistence";
import { Product } from "./ocp/classes/Product";
import { NoDiscount } from "./ocp/classes/Discount";

/*
    * OCP -> Entendidades devem estar abertas para extensão, mas fechadas para modificação.
*/

function Main(): void {
    const discount = new NoDiscount();
    const shoppingCart = new ShoopingCart(discount); //injeção de dependendência no carrinho.
    const messaging = new Messaging();
    const persistence = new Persistence();

    const order = new Order(shoppingCart, messaging, persistence);

    shoppingCart.addItem(new Product('camiseta', 49.9));
    shoppingCart.addItem(new Product('caderno', 9.9));
    shoppingCart.addItem(new Product('bermuda', 5.9));
    shoppingCart.addItem(new Product('lapis', 1.9));

    console.log(shoppingCart.item);
    console.log(shoppingCart.totalWithDiscount())
    console.log(order.orderStatus);
    order.checkout();
    console.log(order.orderStatus);
}

Main();