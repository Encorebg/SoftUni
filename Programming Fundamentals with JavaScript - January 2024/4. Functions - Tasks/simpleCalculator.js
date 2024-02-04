function simpleCalculator(num1, num2, operator){
    let res;
    switch(operator){
        case "multiply":
            res = (x,y) => num1 * num2;
            break;
        case "divide":
            res = (x,y) => num1 / num2;
            break;
        case "add":
            res = (x,y) => num1 + num2;
            break;
        case "subtract":
            res = (x,y) => num1 - num2;
    }

    console.log(res());
}