import createItem from "./services/item.js";

const cart = [];

console.log("🛒🈴 Shopee Cart");

// deve ser usado AWAIT por ser uma função ASYNC!
const item1 = await createItem("PS5", 3489.90, 1);
const item2 = await createItem("PC GAMER", 3190.50, 2);
const item3 = await createItem("Fone Bluetooth", 49.80, 4)

console.log(item2.subtotal())