import { Order } from "./ocp/classes/Order";
import { ShoopingCart } from "./ocp/classes/ShoppingCart";
import { Messaging } from "./ocp/classes/Messaging";
import { Persistence } from "./ocp/classes/Persistence";
import { Product } from "./ocp/classes/Product";
import { FiftyPercentDiscount } from "./ocp/classes/Discount";

/*
    * OCP -> Entendidades devem estar abertas para extensão, mas fechadas para modificação.
*/

/*
    * LSP -> Se meu programa espera um Animal, algo do tipo Cachorro(que herda de Animal) deve servir como qualquer outro Animal.
    * Em qualquer lugar que eu esperar algo do tipo Discount no meu programa,
    * eu devo ter sempre o mesmo comportamento em qualquer uma das classes do 'contexto'.
    * Em linguagens tipadas, é mais dificil quebrar esse princípio. 
    * As subclasses não devem furar o comportamento da classe base. 
*/

function Main(): void {
    const discount = new FiftyPercentDiscount();
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