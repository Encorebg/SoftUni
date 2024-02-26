function storeProvision(currentStocks, foodDelivery) {
    let store = [];

    for (let i = 0; i < currentStocks.length; i += 2) {
        let product = currentStocks[i];
        let productQty = Number(currentStocks[i + 1]);
        let productobject = { name: product, qty: productQty }
        store.push(productobject);
    }

    for (let i = 0; i < foodDelivery.length; i += 2) {
        let product = foodDelivery[i];
        let productQty = Number(foodDelivery[i + 1]);
        let productFound = store.find(p => p.name === product);
        if (productFound) {
            productFound.qty += productQty
        } else {
            let productobject = { name: product, qty : productQty };
            store.push(productobject);
        }
    }
    for(let product of store){
        console.log(`${product.name} -> ${product.qty}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)