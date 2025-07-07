import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

console.log("🛒🈴 Shopee Cart");

// deve ser usado AWAIT por ser uma função ASYNC!
const item1 = await createItem("PS5", 3489.90, 1);
const item2 = await createItem("PC GAMER", 3190.50, 1);
const item3 = await createItem("Fone Bluetooth", 49.50, 7)
const item4 = await createItem("Caixa JBL", 149.49, 4)

// adicionar itens nos carrinhos
// await cartService.addItem(myWhishList, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);

// deletar itens nos carrinhos
// await cartService.deleteItem(myCart, item2.name);

// console.log("💲 TOTAL Wishlist: ")
// await cartService.calculateTotal(myWhishList);

await cartService.removeItem(myCart, item3.name)
await cartService.removeItem(myCart, item4.name)

// display dos itens no carrinho
await cartService.displayCart(myCart)

// mostra o valor TOTAL do carrinho
await cartService.calculateTotal(myCart);