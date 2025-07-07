// 🛒 ações do carrinho

// ADICIONAR
async function addItem(userCart, item) {
    userCart.push(item)
}

// CALCULAR TOTAL
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💰 Total: R$ ${result.toFixed(2)}`)
}

// DELETAR
async function deleteItem(userCart, name) {
    const index =  userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// REMOVER - diminui um item
async function removeItem(userCart, index) {

}

// LISTAR ITENS NO CARRINHO
async function displayCart(userCart) {
    console.log(`Shopee Cart List:`)
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price.toFixed(2)}| Quant. ${item.quantity} | Subtotal = R$${item.subtotal().toFixed(2)}`)
    })
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}