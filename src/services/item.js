// 🏀 ações dos itens

// CRIAR ITEM COM SUB-TOTAL CERTO
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}

export default createItem;