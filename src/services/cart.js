// 🛒 ações do carrinho

// ADICIONAR
async function addItem(userCart, item) {
    userCart.push(item)
}

// CALCULAR TOTAL
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result)
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


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}