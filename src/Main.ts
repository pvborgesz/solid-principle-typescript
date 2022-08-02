import { Order } from "./srp/classes/order";
import { ShoopingCart } from "./srp/classes/ShoppingCart";
import { Messaging } from "./srp/classes/Messaging";
import { Persistence } from "./srp/classes/Persistence";
import { Product } from "./srp/classes/Product";

function Main(): void {
    const shoppingCart = new ShoopingCart();
    const messaging = new Messaging();
    const persistence = new Persistence();

    const order = new Order(shoppingCart, messaging, persistence);

    shoppingCart.addItem(new Product('camiseta', 49.9));
    shoppingCart.addItem(new Product('caderno', 9.9));
    shoppingCart.addItem(new Product('bermuda', 5.9));
    shoppingCart.addItem(new Product('lapis', 1.9));

    console.log(shoppingCart.item);
    console.log(order.orderStatus);
    order.checkout();
    console.log(order.orderStatus);
}

Main();