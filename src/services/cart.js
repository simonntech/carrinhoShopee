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
async function removeItem(userCart, item) {
    //encontrar o índice do item
    const indexFound = userCart.findIndex((p) => p.name === item);
    
    //caso não encontre o item
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    // item > 1 subtrair um item
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -=1;
        return
    }

    // item for =1 delete o item
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return
    }
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