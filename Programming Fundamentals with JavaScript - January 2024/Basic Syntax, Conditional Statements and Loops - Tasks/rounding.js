function rounding(number, decimal){
    if (decimal > 15){
        decimal = 15;
    }

    let rounded = parseFloat(number.toFixed(decimal))
    console.log(rounded)

}