function computerStore(input) {
    let prices = input.shift();
    let totalPrice = 0;
    let totalPriceWithTaxes = 0

    while (prices != "special" && prices != "regular") {
        prices = Number(prices);
        if (prices < 0){
            console.log(`Invalid price!`);
            prices = input.shift();
            continue;
        }
        totalPrice = totalPrice + prices;
        prices = input.shift()


    }
    if (totalPrice === 0){
        console.log(`Invalid order!`)
        return;
    }

    let taxes = totalPrice * 0.2

    if (prices === "regular"){
        totalPriceWithTaxes = taxes + totalPrice
    } else {
        totalPriceWithTaxes = (taxes + totalPrice) * 0.9
    }

    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log(`-----------`)
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`)

}

      